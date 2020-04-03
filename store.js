const captions = [
    {
        begin: '00:00:00,000',
        end: '00:00:03,230',
        script: 'And looking at the history a little bit,'
    },
    {
        begin: '00:00:03,530',
        end: '00:00:10,340',
        script: 'all the way back in 1981, was the first time the graphical'
    },
    {
        begin: '00:00:10,420',
        end: '00:00:14,940',
        script: 'user interface and the operating system for supporting'
    },
    {
        begin: '00:00:14,910',
        end: '00:00:21,110',
        script: 'graphical ui has been introduced in the system called Xerox star'
    },
    {
        begin: '00:00:21,120',
        end: '00:00:28,840',
        script: 'So it had a lot of these fantastic ideas that are currently used even after 40 years, right?'
    },
    {
        begin: '00:00:28,850',
        end: '00:00:35,650',
        script: 'The idea of icons , folders , and ethernet , file servers , print servers'
    },
    {
        begin: '00:00:35,660',
        end: '00:00:38,640',
        script: 'all these ideas came about in Xerox star'
    },
    {
        begin: '00:00:38,650',
        end: '00:00:45,360',
        script: 'And it is known that Steve Jobs stole a lot of the ideas from Xerox.'
    }
]

const dictionary = {
    graphical: [
        {
            word: 'graph·i·cal',
            pronunciation: "| ˈɡrafək(ə)l |",
            pos: 'adjective',
            meanings: [
                {
                    definition: 'relating to or in the form of a graph',
                    sentence: 'flowcharts are graphical presentations.'
                },
                {
                    definition: 'relating to visual art or computer graphics',
                    sentence: 'a high-resolution graphical display.'
                }
            ]
        }
    ],
    history: [
        {
            word: 'his·to·ry',
            pronunciation: "| 'hist(ə)rē |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'the study of past events, particularly in human affairs',
                    sentence: 'medieval European history.'
                },
                {
                    definition: 'the whole series of past events connected with someone or something',
                    sentence: 'the history of Aegean painting.'
                },
                {
                    definition: 'a continuous, typically chronological, record of important or public events or of a particular trend or institution',
                    sentence: 'a history of the labor movement.'
                }
            ]
        }
    ],
    little: [
        {
            word: 'lit·tle',
            pronunciation: '| ˈlidl |',
            pos: 'adjective',
            meanings: [
                {
                    definition: 'small in size, amount, or degree (often used to convey an appealing diminutiveness or express an affectionate or condescending attitude)',
                    sentence: "the plants will grow into little bushes | a little puppy dog | a boring little man | he's a good little worker."
                }
            ]
        },
        {
            word: 'lit·tle',
            pronunciation: '| ˈlidl |',
            pos: 'determiner & pronoun',
            meanings: [
                {
                    definition: '(a little) a small amount of',
                    sentence: "we got a little help from my sister"
                }
            ]
        }
    ],
    looking: [
        {
            word: 'look',
            pronunciation: '| lo͝ok |',
            pos: 'verb',
            meanings: [
                {
                    definition: "direct one's gaze toward someone or something or in a specified direction",
                    sentence: 'people were looking at him | they looked up as he came into the room'
                },
                {
                    definition: '(look at/on) think of or regard in a specified way',
                    sentence: 'I look at tennis differently from some coaches.'
                },
                {
                    definition: 'have the appearance or give the impression of being',
                    sentence: 'her father looked unhappy'
                },
                {
                    definition: '(look to) rely on to do or provide something',
                    sentence: 'she will look to you for help.'
                }
            ]
        },
        {
            word: 'look',
            pronunciation: '| lo͝ok |',
            pos: 'noun',
            meanings: [
                {
                    definition: "an act of directing one's gaze in order to see someone or something",
                    sentence: 'let me get a closer look.'
                },
                {
                    definition: 'the appearance of someone or something, especially as expressing a particular quality',
                    sentence: 'the bedraggled look of the village.'
                },
                {
                    definition: 'have the appearance or give the impression of being',
                    sentence: 'her father looked unhappy'
                },
                {
                    definition: '(look to) rely on to do or provide something',
                    sentence: 'she will look to you for help.'
                }
            ]
        }
    ],
    user: [
        {
            word: 'u·ser',
            pronunciation: "| juː.zər |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'computer/internet/mobile phone users',
                    sentence: 'a site with more than 2 million registered users'
                },
                {
                    definition: 'user of something',
                    sentence: 'The main users of this service are government departments.'
                }
            ]
        }
    ],
    interface: [
        {
            word: 'in·ter·face',
            pronunciation: "|ˈɪn.tə.feɪs|",
            pos: 'noun',
            meanings: [
                {
                    definition: 'a connection between two pieces of electronic equipment, or between a person and a computer',
                    sentence: 'My computer has a network interface, which allows me to get to other computers.'
                },
                {
                    definition: 'a situation, way, or place where two things come together and affect each other',
                    sentence: 'the interface between technology and tradition'
                }

            ]
        }
    ],
    'operating system': [
        {
            word: 'o·pe·ra·ting sys·tem',
            pronunciation: "| ˈɒp.ər.eɪ.tɪŋ ˌsɪs.təm |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'the set of programs that a computer uses to operate, store files, and communicate with devices and other computers',
                    sentence: 'A leading economist denied that the firm has a monopoly in the PC operating system market.'
                }
            ]
        }
    ],
    supporting: [
        {
            word: 'sup·port',
            pronunciation: "| səˈpɔːt |",
            pos: 'verd',
            meanings: [
                {
                    definition: 'to agree with and give encouragement to someone or something because you want him, her, or it to succeed',
                    sentence: 'The majority of people in the town strongly support the plans to build a new school.'
                },
                {
                    definition: 'to help someone emotionally or in a practical way',
                    sentence: "My family has always supported me in whatever I've wanted to do."
                },
                {
                    definition: 'to give a person the money they need in order to buy food and clothes and pay for somewhere to live',
                    sentence: 'He has a wife and four children to support.'
                }
            ]
        }
    ],
    ui: [
        {
            word: 'u·i',
            pronunciation: "| uː.i |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'user interface',
                    sentence: 'User interface (UI) design is the process of making interfaces in software or computerized devices with a focus on looks or style.'
                }
            ]
        }
    ],
    introduced: [
        {
            word: 'in·tro·duce',
            pronunciation: "| ˌɪn.trəˈdʒuːs |",
            pos: 'verb',
            meanings: [
                {
                    definition: 'to put something into use, operation, or a place for the first time',
                    sentence: 'Apple has sold many millions of iPods since the product was introduced in 2001.'
                },
                {
                    definition: "to tell someone another person's name the first time that they meet",
                    sentence: "I'd like to introduce my son, Mark."
                }
            ]
        }
    ],
    system: [
        {
            word: 'sys·tem',
            pronunciation: "| ˈsɪs.təm/ |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'a set of connected things or devices that operate together',
                    sentence: 'a central heating system'
                },
                {
                    definition: 'a set of computer equipment and programs used together for a particular purpose',
                    sentence: 'The system keeps crashing and no one is able to figure out why.'
                }
            ]
        }
    ],
    Xerox: [
        {
            word: 'Xe·rox',
            pronunciation: "| ˈzɪə.rɒks |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'a brand name for a copy of a document or other piece of paper with writing or printing on it, made by a machine that uses a photographic process, or the machine or process itself',
                    sentence: 'a Xerox machine'
                }
            ]
        }
    ],
    star: [
        {
            word: 's·tar',
            pronunciation: "| stɑːr |",
            pos: 'noun',
            meanings: [
                {
                    definition: 'a very large ball of burning gas in space that is usually seen from the earth as a point of light in the sky at night',
                    sentence: 'Stars twinkled above them as they lay on the hill.'
                }
            ]
        }
    ],
    called: [
        {
            word: 'call',
            pronunciation: "| kɔːl |",
            pos: 'verb',
            meanings: [
                {
                    definition: 'to give someone or something a name, or to know or address someone by a particular name',
                    sentence: "His real name is Jonathan, but they've always called him Johnny."
                },
                {
                    definition: 'to use a phone to talk to someone',
                    sentence: 'Do you think we should call the police?'
                }
            ]
        }
    ],
}
