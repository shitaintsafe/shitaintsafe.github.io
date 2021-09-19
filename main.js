/* NICKNAMES */
// List of titles
const titles = {
    title1: 'shit ain\'t safe',
    // title2: '{ smokinSammySeal }',
    // title3: '{ originalSamSeal }',
    // title4: '{ samuelSealwall }',
};

const titlesArray = Object.values(titles);
        // CONSOLE TESTING
    console.log('Names to choose from: ' + titlesArray);

// Nickname randomizer
let t = Math.floor(Math.random() * titlesArray.length);
const randomTitle = titlesArray[t];
        // CONSOLE TESTING
    console.log('Titles index: ' + t);
    console.log('Random title: ' + randomTitle);

// DOM - Nickname manipulator
let titleDisplay = document.getElementById('title');
titleDisplay.innerHTML = randomTitle;
        // CONSOLE TESTING
    console.log('Title currently displayed: ' + titleDisplay.innerHTML);
/* END TITLES */

/* TITLE FONTS */
// List of title fonts
const fonts = {
    font1: "'Capriola', sans-serif",
    font2: "arial, sans-serif",
    font3: "'Carattere', sans-serif",
    font4: "'Caveat', sans-serif",
    font5: "'Gluten', sans-serif",
    font6: "'Lato', sans-serif",
    font7: "'Pacifico', sans-serif",
    font8: "'Courier-New', monospace",
    font9: "'Trebuchet', sans-serif",
    font10: "'Lucida Console', monospace"
};

const fontsArray = Object.values(fonts);
        // CONSOLE TESTING
    console.log('Available fonts: ' + fontsArray);

// Font randomizer
let f = Math.floor(Math.random() * fontsArray.length);
const randomFont = fontsArray[f];
        // CONSOLE TESTING
    console.log('Fonts index: ' + f);
    console.log('Random font: ' + randomFont);

// DOM - Title Font manipulator
titleDisplay.style.fontFamily = randomFont;

/* END TITLE FONTS */


/* PORTRAITS */
// List of portraits
const portraits = {
    portrait1: 'assets/poop1.png',
    portrait2: 'assets/poop2.png',
    portrait3: 'assets/poop3.png',
    portrait4: 'assets/poop4.png'
}

const portraitsArray = Object.values(portraits);
        // CONSOLE TESTING
    console.log('Portrait options: ' + portraitsArray);

// Portrait randomizer
let p = Math.floor(Math.random() * portraitsArray.length);
const randomPortrait = portraitsArray[p];
        // CONSOLE TESTING
    console.log('Portrait index: ' + p);
    console.log('Random portrait: ' + randomPortrait);

let portraitDisplay = document.getElementById('portrait');
portraitDisplay.src = randomPortrait;
        // CONSOLE TESTING
    console.log('Portrait currently displayed: ' + portraitDisplay.src);
/* END PORTRAITS */
