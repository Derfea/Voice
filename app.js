const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const name = ['John'];

const bedrooms = [
    '3',
];

const greetings = [
    'thank you',
    'I am excellent thank you',
    'I am good'
];

const bye = [
    'bye',
    'bye have a nice day',
    'bye see you tommorow'
];

const between = [
    'The term 2D and 3D are used to indicate dimensions. The term 2D stands for Two-Dimensional, whereas 3D stands for Three-Dimensional. 2D represents an object in just two dimensions, while 3D represents it in three dimensions. 2D shapes can be summarized by calling them flat shapes.'
];
const haha = [
    'You are not smarter than me hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha'
];

const cube = [
    'A 3d shape and its called a cube it is also like a 2d square on each sides if you wanted to hear that'
];

const shapes = [
    'The form of an object - how it is laid out in space (not what it is made of, or where it is). Common two dimensional (2D) shapes are: Circles, squares, triangles, etc. Common three dimensional (3D) shapes are: Spheres, cubes, pyramids'
];

const nice = [
    'thank you',
    'you look nice too',
    'thank you are very nice'
];
const not_nice = [
    'hey you are so mean',
    'you do not look nice too',
    'talk to someone else I am not talking to you anymore',
    'not listening'
];

const play = [
    'what game'
];

const play_ok = [
    'ok'
];

const hello = [
    'hi how are',
    'hello dear friend',
    'hi'
];

const weather = [
    'Weather is fine',
    'it is lovely'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you are now speaking')
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


//add the listrner to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;

    if (message.includes('how are you')) {
        const finalGreetings = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalGreetings;
    }
    
    if (message.includes('weather')) {
        const finalWeather = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalWeather;
    }    
    if (message.includes('are you smart')) {
        const finalHaha = haha[Math.floor(Math.random() * haha.length)];
        speech.text = finalHaha;
    }
    
    if (message.includes('how many rooms have we got')) {
        const finalBedrooms = bedrooms[Math.floor(Math.random() * bedrooms.length)];
        speech.text = finalBedrooms;
    }
    
    if (message.includes('bye')) {
        const finalBye = bye[Math.floor(Math.random() * bye.length)];
        speech.text = finalBye;
    }
    
    if (message.includes('you do not look nice')) {
        const finalNotNice = not_nice[Math.floor(Math.random() * not_nice.length)];
        speech.text = finalNotNice;
    }
    
    if (message.includes('Tig', 'Hide and seek', '123', 'Manhunt', 'Ultimate Tig')) {
        const finalPlay_ok = play_ok[Math.floor(Math.random() * play_ok.length)];
        speech.text = finalPlay_ok;
    }

    if (message.includes("let's play")) {
        const finalPlay = play[Math.floor(Math.random() * play.length)];
        speech.text = finalPlay;
    }

    if (message.includes('what shapes')) {
        const finalShapes = shapes[Math.floor(Math.random() * shapes.length)];
        speech.text = finalShapes;
    }

    if (message.includes('what are cube')) {
        const finalCube = cube[Math.floor(Math.random() * cube.length)];
        speech.text = finalCube;
    }

    if (message.includes('you look nice')) {
        const finalNice = nice[Math.floor(Math.random() * nice.length)];
        speech.text = finalNice;
    }

    if (message.includes('different shapes')) {
        const finalbetween = between[Math.floor(Math.random() * between.length)];
        speech.text = finalbetween;
    }

    if (message.includes('hello')) {
        const finalHello = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalHello;
    }

    if (message.includes('what is your name')) {
        const finalName = name[Math.floor(Math.random() * name.length)];
        speech.text = finalName;
    }

    

    speech.volume = 1;
    // if(name = 'John'){
    //     speech.pitch = - 100000000000000000000000000000000000000;
    // }
    speech.pitch = - 100000000000000000000000000000000000000;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}