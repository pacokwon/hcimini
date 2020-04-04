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
        script: 'And it is known that Steve Jobs stole a lot of the ideas from Xerox'
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
        },
        {
            word: 'his·to·ry',
            pronunciation: "| 'hist(ə)rē |",
            pos: '명사',
            meanings: [
                {
                    definition: '역사',
                    sentence: 'a turning point in human history; 인류 역사에 있어서 하나의 전환점'
                },
                {
                    definition: '(특정 장소·주제 등과 관련된) 역사',
                    sentence: 'the history of Ireland / democracy / popular music; 아일랜드/민주주의/대중음악의 역사'
                },
                {
                    definition: '(학과목으로서의) 역사(학)',
                    sentence: 'a history teacher; 역사 교사'
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
            pos: '형용사',
            meanings: [
                {
                    definition: '(크기규모가) 작은, 소규모의',
                    sentence: "a little house; 작은 집"
                },
                {
                    definition: '형용사 뒤에 써서 특히 남을 아랫사람 다루듯 하면서 애정혐오를 나타냄',
                    sentence: "The poor little thing! It’s lost its mother.;아이구 가련한 것! 걔가 엄마를 잃어버렸대요."
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
        },
        {
            word: 'lit·tle',
            pronunciation: '| ˈlidl |',
            pos: '한정사 & 대명사',
            meanings: [
                {
                    definition: '(불가산 명사와 함께 쓰여) 거의 없는[아닌]',
                    sentence: "There was little doubt in my mind.; 내 마음속에 의심은 거의 들지 않았다."
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
        },
        {
            word: 'in·ter·face',
            pronunciation: "|ˈɪn.tə.feɪs|",
            pos: '명사',
            meanings: [
                {
                    definition: '컴퓨터 인터페이스',
                    sentence: 'the user interface; 사용자 인터페이스'
                },
                {
                    definition: '접점(두 가지 주제시스템 등이 서로 만나서 영향을 주고받는 영역)',
                    sentence: 'the interface between manufacturing and sales; 제조와 판매 사이의 접점'
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
        },
        {
            word: 'u·i',
            pronunciation: "| uː.i |",
            pos: '명사',
            meanings: [
                {
                    definition: '컴퓨터 사용자 인터페이스 ((사용자가 컴퓨터와 대화하기 위한 기호나 명령 체계))',
                    sentence: ''
                }
            ]
        },
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
        },
        {
            word: 'Xe·rox',
            pronunciation: "| ˈzɪə.rɒks |",
            pos: '명사',
            meanings: [
                {
                    definition: '(문서의) 복사, 제록스',
                    sentence: 'a Xerox machine; 제록스 복사기'
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
        },
        {
            word: 's·tar',
            pronunciation: "| stɑːr |",
            pos: '명사',
            meanings: [
                {
                    definition: '별, 항성',
                    sentence: 'There was a big moon and hundreds of stars were shining overhead.; 머리 위로 커다란 달과 수많은 별들이 빛나고 있었다.'
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
        },
        {
            word: 'call',
            pronunciation: "| kɔːl |",
            pos: '동사',
            meanings: [
                {
                    definition: '이름을 지어주다, …라고 부르다[칭하다]',
                    sentence: "They decided to call the baby Mark; 그들은 아기 이름을 마크로 짓기로 결정했다."
                },
                {
                    definition: '(전화를 걸어) 부르다[오라고 하다]',
                    sentence: 'to call the fire department / the police / a doctor / an ambulance; 소방대/경찰/의사/구급차를 부르다'
                }
            ]
        }
    ],
    fantastic : [
        {
            word: 'fantastic',
            pronunciation: '| fænˈtæstɪk |',
            pos : "adjective",
            meanings: [
                {
                    definition:'extremely good; excellent',
                    sentence: "He's done a fantastic job."
                },
                {
                    definition:'very large; larger than you expected',
                    sentence: "The response to our appeal was fantastic."
                },
                {
                    definition:'strange and showing a lot of imagination',
                    sentence: "fantastic dreams of forests and jungles."
                },
                {
                    definition:'impossible to put into practice; impossible to believe',
                    sentence: "It may sound rather fantastic, but it's the truth."
                }
            ]
        },
        {
            word: 'fantastic',
            pronunciation: '| fænˈtæstɪk |',
            pos: "형용사",
            meanings: [
                {
                    definition: '기막히게 좋은, 환상적인',
                    sentence: "a fantastic beach in Australia; 오스트레일리아에 있는 환상적인 해변"
                },
                {
                    definition: '엄청난, 굉장한',
                    sentence: "The response to our appeal was fantastic.; 우리의 호소에 대한 반응이 굉장했다."
                },
                {
                    definition: '기상천외한, 기이한',
                    sentence: "fantastic dreams of forests and jungles; 숲과 정글이 나오는 기이한 꿈들"
                }
            ]
        }
    ],
    ideas : [
        {
            word: 'idea',
            pronunciation: '| aɪˈdɪə |',
            pos : "noun",
            meanings: [
                {
                    definition:'a plan, thought or suggestion, especially about what to do in a particular situation',
                    sentence: "That's a great idea!"
                },
                {
                    definition:'a picture or an impression in your mind of what somebody/something is like',
                    sentence: "The brochure should give you a good idea of the hotel."
                },
                {
                    definition:'an opinion or a belief about something',
                    sentence: " He has some very strange ideas about education."
                },
                {
                    definition:'a feeling that something is possible or is true',
                    sentence: "Where on earth did you get that idea?"
                }
            ]
        }
    ],
    currently : [
        {
            word: 'currently',
            pronunciation: '| ˈkʌrəntli |',
            pos : "adverb",
            meanings: [
                {
                    definition:'at the present time',
                    sentence: "All the options are currently available."
                }
            ]
        },
        {
            word: 'currently',
            pronunciation: '| ˈkʌrəntli |',
            pos: "부사",
            meanings: [
                {
                    definition: '현재, 지금',
                    sentence: "The hourly charge is currently £35.; 시간당 수수료는 현재 35파운드이다."
                }
            ]
        }
    ],
    used : [
        {
            word: 'used',
            pronunciation: '| juːst |',
            pos : "adjective",
            meanings: [
                {
                    definition:'familiar with something because you do it or experience it often',
                    sentence: "used to doing something I'm not used to eating so much at lunchtime."
                }
            ]
        }
    ],
    years : [
        {
            word: 'year',
            pronunciation: '| /jɪə(r)/ |',
            pos : "noun",
            meanings: [
                {
                    definition:'the period from 1 January to 31 December, that is 365 or 366 days, divided into 12 months',
                    sentence: "next/last year"
                },
                {
                    definition:'a period of twelve months, measured from any particular time',
                    sentence: "She gave up teaching three years ago."
                },
                {
                    definition:'age; time of life',
                    sentence: "He was 14 years old when it happened."
                },
                {
                    definition:'a period of twelve months connected with a particular activity',
                    sentence: "the school year"
                }
            ]
        }
    ],
    icons : [
        {
            word: 'icon',
            pronunciation: '| ˈaɪkɒn |',
            pos : "noun",
            meanings: [
                {
                    definition:'a small symbol on a computer or smartphone screen that represents a program or a file',
                    sentence: "Click on the printer icon with the mouse."
                },
                {
                    definition:'a famous person or thing that people admire and see as a symbol of a particular idea, way of life, etc.',
                    sentence: "Madonna and other pop icons of the 1980s"
                }
            ]
        },
        {
            word: 'icon',
            pronunciation: '| ˈaɪkɒn |',
            pos: "명사",
            meanings: [
                {
                    definition: '(컴퓨터 화면의) 아이콘',
                    sentence: "Click on the printer icon with the mouse.; 마우스로 프린터 아이콘을 클릭하세요."
                },
                {
                    definition: '(특정한 사상·생활 방식 등의 상징으로 여겨지는) 우상[아이콘]',
                    sentence: "Madonna and other pop icons of the 1980s; 마돈나와 1980년대의 다른 팝 아이콘들"
                }
            ]
        }
    ],
    ethernet : [
        {
            word: 'ethernet',
            pronunciation: '| ˈiːθənet |',
            pos : "noun",
            meanings: [
                {
                    definition:'a system for connecting a number of computer systems to form a network',
                    sentence: ""
                }
            ]
        },
        {
            word: 'ethernet',
            pronunciation: '| ˈiːθənet |',
            pos: "명사",
            meanings: [
                {
                    definition: '이더넷(여러 대의 컴퓨터로 네트워크를 형성하는 시스템)',
                    sentence: ""
                }
            ]
        }
    ],
    file : [
        {
            word: 'file',
            pronunciation: '| faɪl |',
            pos : "noun",
            meanings: [
                {
                    definition:'a box or folded piece of card for keeping loose papers together and in order',
                    sentence: "a box file"
                },
                {
                    definition:'a collection of information stored together in a computer, under a particular name',
                    sentence: "The service converts video files from one format to another"
                },
                {
                    definition:'a file and the information it contains, for example about a particular person or subject',
                    sentence: "The film is based on real FBI case files."
                },
                {
                    definition:'(Canadian English) a number of issues and responsibilities connected with a particular government policy area',
                    sentence: "The politician's handling of flood, infrastructure and education files has been questioned."
                }
            ]
        }
    ],
    servers : [
        {
            word: 'server',
            pronunciation: '| ˈsɜːvə(r) |',
            pos : "noun",
            meanings: [
                {
                    definition:' a computer program that controls or supplies information to several computers connected in a network; the main computer on which this program is run',
                    sentence: ""
                },
                {
                    definition:'a player who is serving, for example in tennis',
                    sentence: ""
                },
                {
                    definition:'a kitchen utensil (= tool) used for putting food onto somebody’s plate',
                    sentence: "salad servers"
                },
                {
                    definition:'(North American English) a person who serves food in a restaurant; a waiter or waitress',
                    sentence: ""
                }
            ]
        }
    ],
    print : [
        {
            word: 'print',
            pronunciation: '| prɪnt |',
            pos : "verb",
            meanings: [
                {
                    definition:'to produce letters, pictures, etc. on paper using a machine that puts ink (= coloured liquid) on the surface',
                    sentence: "I'm printing a copy of the document for you."
                },
                {
                    definition:'to produce books, newspapers, etc. by printing them in large quantities',
                    sentence: "They printed 30 000 copies of the book."
                },
                {
                    definition:'to publish something in printed form',
                    sentence: "The photo was printed in all the national newspapers."
                },
                {
                    definition:'to produce a photograph on paper from a digital file or from film',
                    sentence: "Photographs can be printed from a digital file or from a negative."
                }
            ]
        }
    ],
    ideas: [
        {
            word: 'idea',
            pronunciation: '| aɪˈdɪə |',
            pos: 'noun',
            meanings: [
                {
                    definition: 'a plan, thought or suggestion, especially about what to do in a particular situation',
                    sentence: "The surprise party was Jane's idea."
                }
            ]
        },
        {
            word: 'idea',
            pronunciation: '| aɪˈdɪə |',
            pos: '명사',
            meanings: [
                {
                    definition: '(특히 특정 상황에서 해야 할 일에 대한) 발상[생각/방안/계획]',
                    sentence: "It would be a good idea to call before we leave.; 우리가 떠나기 전에 전화를 하는 게 좋을 것 같다."
                }
            ]
        },
    ],
    'came about': [
        {
            word: 'come about',
            pos: 'phrasal verb',
            meanings: [
                {
                    definition:  'to happen',
                    sentence: "Can you tell me how the accident came about?"
                }
            ]
        }
    ],
    'Steve Jobs': [
        {
            word: "Steve Paul Jobs(1955 – 2011)",
            pronunciation: '| dʒɒbz |',
            meanings: [
                {
                    definition: ' an American business magnate, industrial designer, investor, and media proprietor.',
                },
                {
                    definition: ' Pioneer of the personal computer revolution with Steve Wozniak'
                },
                {
                    definition: 'Co-creator of the Macintosh, iPod, iPhone, iPad, and first Apple Stores'
                }
            ]
        },
        {
            word: "Steve Paul Jobs(1955 – 2011)",
            pronunciation: '| dʒɒbz |',
            meanings: [
                {
                    definition: '스티브 잡스(Steven Paul Jobs), 기업인; 출생지: 미국; 1955~2011',
                }
            ]
        }
    ],
    stole: [
        {
            word: 'steal',
            pronunciation: '| stiːl |',
            pos: 'noun',
            meanings: [
                {
                    definition:  'to take something from a person, shop, etc. without permission and without intending to return it or pay for it.',
                    sentence: "I'll report you to the police if I catch you stealing again."
                }
            ]
        }
    ],
    lot: [
        {
            word: 'lot',
            pronunciation: '| lɒt |',
            pos: 'determiner',
            meanings: [
                {
                    definition:  'a large number or amount',
                    sentence: "Have some more cake. There's lots left."
                }
            ]
        }
    ]
}
