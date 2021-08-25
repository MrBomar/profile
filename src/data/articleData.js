let articles = [
    {
        articleID: "article11",
        title: "Paradigm Pet Professionals",
        description: [
            {
                object: 'p',
                content: "A HTML & CSS project completed for a WGU class assessment. The assignment specified that the website be responsive, follow UX/UI guidelines, and contain no Javascript."
            }
        ],
        keywords: "HTML responsive design mobile optimized CSS",
        author: "Leslie C. Bomar",
        publishedDate:"08/23/2021",
        type: "school project",
        image: "https://mrlesbomar.com/projects/screenshots/paradigm-professionals.png",
        links: [
            {
                linkID: 1,
                link: "https://mrlesbomar.com/paradigm-pets/index.html",
                alt: "paradigm pet professionals",
                image: "/images/website-icon.png",
                message: "Give it a try!"
            },
            {
                linkID: 2,
                link: "https://github.com/MrBomar/paradigm-professionals",
                alt: "paradigm professionals source code github link",
                image: "/images/github-icon.png",
                message: "See the code!"
            }
        ]
    },
    {
        articleID: "article10",
        title: "Solitare 3",
        description: [
            {
                object: 'p',
                content: "This is a free web based solitare game. The previous version of this game was click based and this was a major negative. So after a few requests I decided to make a drag and drop version. This version is not complete yet, but you are welcome to check out the code and test the game for yourself."
            },
            {
                object: 'p',
                content: "In this game users can choose from a shuffled/random deck or from a random solvable deck. Additionally this game will save user state so they can quit and return to their game later. In time I will also add the following features:"
            },
            {
                object: 'List',
                content: [
                    "Ability to change the colors of the board and deck.",
                    "Ability to upload images which can be used for card backs",
                    "Points system and user rankings",
                    "Android, Windows, and iPhone versions"
                ]
            },
            {
                object: 'p',
                content: "This project is created using JavaScript, CSS, Webpack, and CSS-Loader. Data for the game is hosted on a Apache server using PHP and MariaDB."
            }
        ],
        keywords: "solitare game cards javascript css webpack css-loader, apache, php, mariadb",
        author: "Leslie C. Bomar",
        publishedDate:"08/25/2021",
        type: "coding project",
        image: "https://mrlesbomar.com/projects/screenshots/Solitare3.png",
        links: [
            {
                linkID: 1,
                link: "https://github.com/MrBomar/solitare3",
                alt: "solitare 3 github link",
                image: "/images/github-icon.png",
                message: "See the code!"
            }
        ]
    },
    {
        articleID: "article9",
        title: "Robot Friends",
        description: [
            {
                object: 'p',
                content: "A simple React.js project that was part of a developer training course."
            },
            {
                object: 'p',
                content: "This project was built using React.js, redux, tachyons, and JSONPlaceholder."
            }
        ],
        keywords: "JSON react redux-thunk redux tachyons javascript",
        author: "Leslie C. Bomar",
        publishedDate:"03/01/2019",
        type: "coding project",
        image: "https://mrlesbomar.com/projects/screenshots/robotfriends.png",
        links: [
            {
                linkID: 1,
                link: "https://mrlesbomar.com/robotfriends/index.html",
                alt: "robot friends",
                image: "/images/website-icon.png",
                message: "Give it a try!"
            },
            {
                linkID: 2,
                link: "https://github.com/MrBomar/RobotFriends",
                alt: "robot friends git hub",
                image: "/images/github-icon.png",
                message: "See the code!"
            }
        ]
    },
    {
        articleID: "article8",
        title: "Student Roster",
        description: [
            {
                object: 'p',
                content: "A C++ command line project for WGU assignment, just a demonstration of basic programming skill and the use of pointers."
            }
        ],
        keywords: "c++ cli school project",
        author: "Leslie C. Bomar",
        publishedDate:"01/18/2020",
        type: "school project",
        image: "https://mrlesbomar.com/projects/screenshots/studentroster.png",
        links: [
            {
                linkID: 1,
                link: "https://github.com/MrBomar/Student-Roster",
                alt: "simple command line interface project",
                image: "/images/github-icon.png",
                message: "See the code!"
            }
        ]
    },
    {
        articleID: "article7",
        title: "Face Recognition Brain",
        description: [
            {
                object: 'p',
                content: "A React.js project that was part of a developer training course. In this project the the user uploads a photo and the Clarifi API will draw a box around any face in the photo."
            },
            {
                object: 'p',
                content: "This project was the first project I built utilizing a web based registration and login. The project was build uting React.js, Clarifi, React-particles, webpack, babel, and tachyons. The site is hosted on an express server from Heroku."
            }
        ],
        keywords: "react css html5 jsx clarifi tachyons api javascript single page application SPA webpack babel express",
        author: "Leslie C. Bomar",
        publishedDate:"05/19/2019",
        type: "project",
        image: "https://mrlesbomar.com/projects/screenshots/facialrecognition.png",
        links: [
            {
                linkID: 1,
                link: "https://smart-brain-les.herokuapp.com/",
                alt: "go to face recognition brain",
                image: "/images/website-icon.png",
                message: "Give it a try!"
            },
            {
                linkID: 2,
                link: "https://github.com/MrBomar/FacialRecognition",
                alt: "face recognition brain github repository",
                image: "/images/github-icon.png",
                message: "See the code!"
            }
        ]
    },
    {
        articleID:"article6",
        title:"Solitaire",
        description: [
            {
                object: 'p',
                content: "On object oriented, free, web-based solitaire game. This game is clicked based, which means single clicks on the draw pile will draw a card, and double clicks on a card will automatically move it to a matching pile."
            },
            {
                object: 'p',
                content: "This game give the user the option of selecting from a randomized(shuffled) deck, a solvable deck, or replay the previous hand. Additionally it will save the user's progress so the can return to their game later."
            },
            {
                object: 'p',
                content: "The project was build using Javascript, CSS, webpack, babel, and css-loader. It is hosted on an Apache server using MariaDB."
            }
        ],
        keywords:"javascript solitaire css html5 html php sql pdo mariahdb object oriented class api cgi restful application game responsive webpack css-bundler",
        author:"Leslie C. Bomar",
        publishedDate:"04/11/2019",
        type:"project",
        image:"https://mrlesbomar.com/projects/screenshots/solitaire.jpg",
        links:[
            {
                linkID:1,
                link:"https://mrlesbomar.com/games/solitaire.html",
                alt:"play my solitaire game",
                image:"/images/website-icon.png",
                message:"Play the game!"
            },
            {
                linkID:2,
                link:"https://github.com/MrBomar/solitaire",
                alt:"solitaire github repository",
                image:"/images/github-icon.png",
                message:"See the code!"
            }
        ]
    },
    {
        articleID:"article5",
        title:"Personal Website",
        description: [
            {
                object: 'p',
                content: "A place to see all of my projects and the current status of my educational journey. Evenually I will make this more personal by including information about my hobbies, favorite music, books I've read, etc."
            },
            {
                object: 'p',
                content: "Built using React.js, CSS, and webpack. Hosted on an Apache server."
            }
        ],
        keywords:"react profile personal portfolio json javascript html css ajax pdo mariahdb php sql html5 api cgi restful responsive css-bundler",
        author:"Leslie C. Bomar",
        publishedDate:"04/13/2019",
        type:"project",
        image:"https://mrlesbomar.com/projects/screenshots/personal-website2.png",
        links:[
            {
                linkID:2,
                link:"https://github.com/MrBomar/profile",
                alt:"personal website github repository",
                image:"/images/github-icon.png",
                message:"See the code!"
            }
        ]
    },
    {
        articleID:"article4",
        title:"Tic Tac Toe",
        description: [
            {
                object: 'p',
                content: "A free web-based Tic-Tac-Toe game. User plays against the computer. This is the first web application I built, I decided to start with a simple activity and see if I could figure out the rest."
            },
            {
                object: 'p',
                content: "Since building this I found an error in the computer-opponent's logic that needs corrected, also the appearance could be improved. Eventually I will be redesigning this application to support head to head play."
            }
        ],
        keywords:"html css javascript tic tac toe dom game application responsive",
        author:"Leslie C. Bomar",
        publishedDate:"2018",
        type:"project",
        image:"https://mrlesbomar.com/projects/screenshots/tic-tac-toe.jpg",
        links:[
            {
                linkID:1,
                link:"https://mrlesbomar.com/games/tic-tac-toe.html",
                alt:"play my tic tac toe game",
                image:"/images/website-icon.png",
                message:"Play the game!"
            },
            {
                linkID:2,
                link:"https://github.com/MrBomar/tic-tac-toe",
                alt:"tic tac toe github repository",
                image:"/images/github-icon.png",
                message:"See the code!"
            }
        ]
    },
    {
        articleID:"article3",
        title:"Code Animation",
        description: [
            {
                object: 'p',
                content: "An animation that types out Javascript code so that it resembles VSCode."
            },
            {
                object: 'p',
                content: "This animation sequence is the first screen you see when accessing my website. Even though my website is built with React.js, this animation is not React, it is just JavaScript set inside a frame."
            }
        ],
        keywords:"animate js javascript splash landing page json css object oriented class",
        author:"Leslie C. Bomar",
        publishedDate:"04/11/2019",
        type:"project",
        image:"https://mrlesbomar.com/projects/screenshots/personal-website.png",
        links:[
            {
                linkID:1,
                link:"https://mrlesbomar.com/profile/index.html",
                alt:"my vscode animation",
                image:"/images/website-icon.png",
                message:"See the animation!"
            },
            {
                linkID:2,
                link:"https://github.com/MrBomar/Code-Animation",
                alt:"vs code animation github repository",
                image:"/images/github-icon.png",
                message:"See the code!"
            }
        ]
    },
    {
        articleID:"article2",
        title:"Driver Performance Monitor",
        description: [
            {
                object: 'p',
                content: "This application was built using MS Access and MySQL in 2018 for XPO Logistics. This suite of tools included:"
            },
            {
                object: 'List',
                content: [
                    "Reporting tools for managing drive down time utilizing driver e-logs and internal delivery data. Resulted in a 12% reduction in paid overtime.",
                    "Automated route status reporting utilizing driver e-logs, internal delivery data, and MS Outlook.",
                    "Barcoding function for generating shipping labels.",
                    "Route planning tool that optomized routes using historical delivery data, internal delivery data, and Google Maps.",
                    "Automated client upgrade tool. This tool would check for latest release, then automatically download the new version and write over the old version."
                ]
            }
        ],
        keywords:"microsoft visual basic for applications outlook access dynamic sql html logistics application api google maps user accounts version control vba",
        author:"Leslie C. Bomar",
        publishedDate:"2018",
        type:"project",
        image:"./images/Microsoft_Access_2013_logo.svg",
        publishedLocation:"none",
        repository:"https://github.com/MrBomar/access-code-snippets",
        links:[
            {
                linkID:1,
                link:"https://github.com/MrBomar/access-code-snippets",
                alt:"access vba code github repository",
                image:"/images/github-icon.png",
                message:"See the code!"
            }
        ]
    },
    {
        articleID:"article1",
        title:"Purchasing Tools",
        description: [
            {
                object: 'p',
                content: "This application was written for Valspar in 2006 using MS Access and MySql. Key features of this suite of tools were:"
            },
            {
                object :'List',
                content: [
                    "Raw material shortage tracking resulting in an 80% reduction in shortages.",
                    "Automated raw material orders which resulted in a 90% reduction in time spent making ordering decisions, and a 20% reduction in on-hand inventory.",
                    "Raw material staging software that managed the staging process and generated pick orders and labels.",
                    "MRO ordering and approval process used for office, production, maintenance and safety materials. This tool allowed us to track spending and find additional waste."
                ]
            },
            {
                object: 'p',
                content: "Unfortunately, I am unable to find my copy of the application or any of the screen shots I had saved."
            }
        ],
        keywords:"microsoft visual basic for applications outlook access dynamic sql html logistics application api google maps user accounts version control vba",
        author:"Leslie C. Bomar",
        publishedDate:"2018",
        type:"project",
        image:"./images/Microsoft_Access_2013_logo.svg",
        publishedLocation:"none",
        repository:"_blank",
        links:[]
    }
]

export default articles