// display slots 
// Images
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');

// Titles
var titleOne = document.getElementById('titleOne');
var titleTwo = document.getElementById('titleTwo');
var titleThree = document.getElementById('titleThree');

// View Links
var viewOne = document.getElementById('viewOne');
var viewTwo = document.getElementById('viewTwo');
var viewThree = document.getElementById('viewThree');

// Test Links
var testOne = document.getElementById('testOne');
var testTwo = document.getElementById('testTwo');
var testThree = document.getElementById('testThree');

// Language displayed
var languageDisplayed = document.getElementById('languageDisplayed');

//for animation
var slide = document.getElementById('sliding');

//----------------------------------------------------------
// Buttons for switching projects
var left = document.getElementById('prev');
var right = document.getElementById('next');

left.addEventListener('click', prev); 
right.addEventListener('click', next);

// -------------------------------------------------
// Languages
var language = ['React', 'JavaScript', 'HTML/CSS']; //language list
var currentLang = 0 //current language displayed

function next() { //right chevron
    currentLang++

    // currentLang should not exceed language length
    if (currentLang > language.length - 1) { //dont exceed element amount in list
        currentLang = 0 //reset to first index in list
    }  

    //add animation
    slide.classList.add('sliding')

    //run projects function when all slots have disappeared
    setTimeout(() => {
        projects() //run projects function
    }, 1300);
}

function prev() { //left chevron
    currentLang--

    // currentLang should not go under zero
    if (currentLang < 0) { 
        currentLang = (language.length - 1) //reset to last index in list
    }

    //add animation
    slide.classList.add('sliding')

    //run projects function when all slots have disappeared
    setTimeout(() => {
        projects() //run projects function
    }, 1300);

}

//for Projects
function projects() {

    let filteredProjects = [] //store filtered projects

    //get current language selected
    switch (language[currentLang]) {
        case 'React':
            filteredProjects = info.filter(project => project.category == 'React')
            break;
    
        case 'JavaScript':
            filteredProjects = info.filter(project => project.category == 'JavaScript')
            break;
        
        case 'HTML/CSS':
            filteredProjects = info.filter(project => project.category == 'HTML/CSS')
            break;
        
        default: //failsafe
            break;
    }

    // Images displayed
    imgOne.src = filteredProjects[0].image
    imgTwo.src = filteredProjects[1].image
    imgThree.src = filteredProjects[2].image

    // Titles
    titleOne.innerText = filteredProjects[0].title
    titleTwo.innerText = filteredProjects[1].title
    titleThree.innerText = filteredProjects[2].title

    // view links
    viewOne.href = filteredProjects[0].view
    viewTwo.href = filteredProjects[1].view
    viewThree.href = filteredProjects[2].view

    // test links
    testOne.href = filteredProjects[0].test
    testTwo.href = filteredProjects[1].test
    testThree.href = filteredProjects[2].test

    // Display Current Langauge Name
    languageDisplayed.innerText = language[currentLang]

    //remove animation if used once already, then re-add it to repeat animation effect
    setTimeout(() => {
        if (slide.classList.contains('sliding')) {
            slide.classList.remove('sliding');
        }
    }, 1000);
}

//for Certificates
function certChange(image) { //passed params

    //seperate certificates from other projects
    var slider_img = document.getElementById('certSlider');
    let filteredCerts = []
    filteredCerts = info.filter(certs => certs.type == 'certificate')

    // switch based on param of button

    if (!image) { //for default image

        slider_img.src = filteredCerts[0].image

    }else {

        switch (image) { //passed param must match one case below
            case 'imageOne':
                slider_img.src =  filteredCerts[0].image
                break;

            case 'imageTwo':
                slider_img.src = filteredCerts[1].image
                break;

            case 'imageThree':
                slider_img.src = filteredCerts[2].image
                break;

            case 'imageFour': 
                slider_img.src = filteredCerts[3].image
                break;

            case 'imageFive': 
                slider_img.src = filteredCerts[4].image
                break;

            case 'imageSix': 
                slider_img.src = filteredCerts[5].image
                break;

            case 'imageSeven': 
                slider_img.src = filteredCerts[6].image
                break;
        } 
    }
}


//Featured Projects (UNDEFINED??)
var info = [
    {
        id: 1,
        title: 'Venedor Webpage',
        category: 'HTML/CSS',
        view: 'https://github.com/Taniyah-L-Jackson/venedor',
        test: 'https://taniyah-l-jackson.github.io/venedor/',
        image: "media/venedor.png",
        type: 'project'
    },

    {
        id: 2,
        title: 'Mock Pizza Website',
        category: 'HTML/CSS',
        view: 'https://github.com/Taniyah-L-Jackson/Pizza_Webpage',
        test: 'https://taniyah-l-jackson.github.io/Pizza_Webpage/',
        image: "media/pizzaWebpage.png",
        type: 'project'
    },

    {   
        id: 3,
        title: 'Umbrella Webpage',
        category: 'HTML/CSS',
        view: 'https://github.com/Taniyah-L-Jackson/umbrella',
        test: 'https://taniyah-l-jackson.github.io/umbrella/',
        image: "media/umbrellaWebpage.png",
        type: 'project'
    },

    {
        id: 4,
        title: 'Password Maker',
        category: 'JavaScript',
        view: 'https://github.com/Taniyah-L-Jackson/PasswordMaker',
        test: 'https://taniyah-l-jackson.github.io/PasswordMaker/',
        image: "media/passwordMaker.png",
        type: 'project'
    },

    {
        id: 5,
        title: 'Adventure Game',
        category: 'JavaScript',
        view: 'https://github.com/Taniyah-L-Jackson/Adventure_Prompt',
        test: 'https://taniyah-l-jackson.github.io/Adventure_Prompt/',
        image: "media/adventureGame.png",
        type: 'project'
    },

    {
        id: 6,
        title: 'Barista Game',
        category: 'JavaScript',
        view: 'https://github.com/Taniyah-L-Jackson/Baristas',
        test: 'https://taniyah-l-jackson.github.io/Baristas/',
        image: "media/baristaGame.png",
        type: 'project'
    },

    {
        id: 7,
        title: 'Ocean-Styled Todo List',
        category: 'React',
        view: 'https://github.com/Taniyah-L-Jackson/ocean_todolist',
        test: 'https://taniyah-l-jackson.github.io/ocean_todolist/',
        image: "media/ocean-todolist.png",
        type: 'project'
    },

    {
        id: 8,
        title: 'Mock Shopping Cart',
        category: 'React',
        view: 'https://github.com/Taniyah-L-Jackson/Shopping_Cart/tree/gh-pages',
        test: 'https://taniyah-l-jackson.github.io/Shopping_Cart/',
        image: "media/shoppingCart.png",
        type: 'project'
    },

    {
        id: 9,
        title: 'Sweet Sailings',
        category: 'React',
        view: 'https://github.com/Taniyah-L-Jackson/cra-sweet-sailings',
        test: 'https://taniyah-l-jackson.github.io/cra-sweet-sailings/',
        image: "media/SweetSailings.png",
        type: 'project'
    },

    {
        id: 10,
        title: 'HTML/CSS Certificate',
        view: 'https://www.sololearn.com/Certificate/1014-14588647/pdf/',
        image: 'media/HTML-CSS_Cert.jpg',
        type: 'certificate'
    },

    {
        id: 11,
        title: 'Responsive Web Design',
        view: 'https://www.freecodecamp.org/certification/lanesha_h/responsive-web-design',
        image: 'media/responsive_web_design.png',
        type: 'certificate'
    },  

    {
        id: 12,
        title: 'JavaScript Certificate',
        view: 'https://www.sololearn.com/Certificate/1024-14588647/pdf/',
        image: 'media/JavaScript_Cert.jpg',
        type: 'certificate'
    },

    {
        id: 13,
        title: 'JavaScript Algorithms',
        view: 'https://www.freecodecamp.org/certification/lanesha_h/javascript-algorithms-and-data-structures',
        image: 'media/JavaScript_Algorithms_and_Data_Structures.png',
        type: 'certificate'
    },  

    {
        id: 14,
        title: 'Python Certificate',
        view: 'https://www.sololearn.com/Certificate/1073-14588647/pdf/',
        image: 'media/Python_Cert.jpg',
        type: 'certificate'
    },

    {
        id: 15,
        title: 'Ruby Certificate',
        view: 'https://www.sololearn.com/Certificate/1073-14588647/pdf/',
        image: 'media/RubyCert.jpg',
        type: 'certificate'
    },

    {
        id: 16,
        title: 'SQL Certificate',
        view: 'https://www.sololearn.com/Certificate/1073-14588647/pdf/',
        image: 'media/SQLCert.jpg',
        type: 'certificate'
    },
    
    
]

projects() //run to show default language in projects
certChange() //run to show default image in certificates