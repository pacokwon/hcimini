const video = document.querySelector('video')
const captionDiv = document.querySelector('#caption')
let subIdx = 0

const toMillis = time => parseFloat(time.split(':')[2].replace(',', '.'))
const beginTimes = captions.map(e => toMillis(e.begin))
const dictionaryWords = Object.keys(dictionary)
const toggleCC = () => {
    captionDiv.classList.toggle('show')
    const show = document.querySelectorAll('.capword .show')
    show.forEach(e => { e.classList.toggle('show') })
}
const makeArrow = () => {
    const arrow = document.createElement('span')
    arrow.classList.add('arrow')
    return arrow
}

const splitToCaptions = captionline => {
    const splitted = captionline.split(' ')
    const includeStatus = word =>
        dictionaryWords.reduce((acc, cur) => {
            if (acc === 'match' || cur === word) return 'match'
            if (acc === 'include' || cur.split(' ').includes(word)) return 'include'
            return ''
        }, '')

    let captions = []
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] in dictionaryWords) {
            captions.push(splitted[i])
            continue
        }

        let template = splitted[i]
        while (true) {
            const stat = includeStatus(template)
            if (stat === 'match') {
                captions.push(template)
                break
            } else if (stat === 'include') {
                i += 1
                template += ` ${splitted[i]}`
            } else {
                template.split(' ').forEach(e => { captions.push(e) })
                break
            }
        }
    }

    return captions
}

const makeDefinition = word => {
    const popup = document.createElement('div')
    popup.classList.add('popup', 'dictionary')
    dictionary[word].forEach(wordInfo => {
        // create the top part of the popup. contains the word, pronunciation and pos(part of speech)
        const entry = ['word', 'pronunciation', 'pos'].reduce((acc, key) => {
            const entryElement = document.createElement('div')
            entryElement.innerText = wordInfo[key] || ' '

            if (key === 'word') {
                entryElement.style.fontSize = 30
            } else {
                entryElement.style.fontSize = 14
            }

            acc.appendChild(entryElement)
            return acc
        }, document.createElement('div'))
        entry.classList.add('wordentry')

        // create the bottom part of the popup. contains definitions
        const ul = document.createElement('ul')
        ul.classList.add('meanings')
        wordInfo.meanings.forEach(e => {
            const li = document.createElement('li')
            li.innerHTML = `${e['definition']}: <i>${e['sentence']}</i>`
            ul.appendChild(li)
        })

        // add the word entry and definition elements to the container
        popup.appendChild(entry)
        popup.appendChild(ul)
    })

    return popup  // return the container
}

// updateSubtitles function. Get subtitle index as argument and update subtitles
const updateSubtitles = idx => {
    const words = splitToCaptions(captions[idx].script)

    const wordDivs = words.map(word => {
        // create word div element
        const div = document.createElement('div')
        div.classList.add('capword')
        div.innerText = word

        // create popup div element
        let popup
        if (word in dictionary) {
            popup = makeDefinition(word)
        } else {
            popup = document.createElement('div')
            popup.classList.add('popup')
            popup.innerText = word
        }
        div.appendChild(popup)

        const arrow = makeArrow()
        div.appendChild(arrow)

        // add popup to div
        div.onclick = e => {
            const show = document.querySelectorAll('.capword .show')
            // it could be the element itself. in that case don't toggle
            if (show !== null && show[0] !== popup)
                show.forEach(e => { e.classList.toggle('show') })

            popup.classList.toggle('show')
            arrow.classList.toggle('show')
        }

        return div
    })

    captionDiv.innerHTML = ''
    wordDivs.forEach(div => { captionDiv.appendChild(div) })
}

// set caption width when video is loaded
video.onloadeddata = () => { captionDiv.style.width = video.videoWidth }

// update subtitles to the next one once the appropriate time comes
video.ontimeupdate = () => {
    const EPSILON = 0.2
    const { currentTime } = video
    const curIdx = beginTimes.reduce((acc, cur, idx) => Math.abs(currentTime - cur) < EPSILON ? idx : acc , null)

    if (curIdx === null) return  // no changes to make. return
    subIdx = curIdx  // update subIdx
    updateSubtitles(subIdx)
}

video.onseeked = () => {
    const { currentTime } = video
    const gaussIdx = beginTimes.reduceRight((acc, cur, idx) =>
        acc === -1 && currentTime > cur ? idx : acc
        , -1)
    subIdx = gaussIdx  // update subIdx
    updateSubtitles(subIdx)
}
