const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;

let new_words = "";
let rand_words = "";

let swords = ['python', 'c++', 'c', 'java', 'javascript', 'ruby', 'scala', 'html', 'css', 'nodejs',
    'kotlin', 'go', 'reactjs', 'angularjs', 'android', 'sql', 'mongodb', 'php', 'c#',
    'flutter', 'native', 'julia', 'swift', 'vue'
]

const create_new_words = () => {
    let ran = Math.floor(Math.random() * swords.length);
    let new_temp_word = swords[ran];
    console.log(new_temp_word);
    return new_temp_word;
}

const scramble_words = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess the word";
        guess.classList.toggle('hidden');
        new_words = create_new_words();
        rand_words = scramble_words(new_words.split("")).join("");
        msg.innerHTML = ` Guess the word : ${rand_words}`;
    } else {
        let tempword = guess.value;
        if (new_words === tempword) {
            play = false;
            msg.innerHTML = `Awesome its correct. It is indeed ${new_words}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `You are a pitiful coder !`;
        }
    }
})