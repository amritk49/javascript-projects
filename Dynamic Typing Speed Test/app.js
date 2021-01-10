const set_of_words = [
    "Zoro cuts Kuma's shoulder, revealing his body to be made of metal",
    "Kuma is modified by the genius Marine scientist Dr. Vegapunk into a Pacifista",
    "Vegapunk's intelligence in technology is said to five hundred years ahead of the current One Piece time",
    "Sanji offers to sacrifice his life in exchange for Zoro's and Luffy's, however he is knocked out by Zoro",
    "Zoro sacrifices himself by taking in all of Luffy's pain and fatigue, endurance",
    "This further shows the further extent Zoro's loyalty and care for his captain, Luffy"
]

// DYNAMIC TYPING TEST :: 
//(1) When user pressed start button than only activate the textarea else it would be disabled

const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let starttime, endtime;

const playgame = () => {
    let randomnumber = Math.floor(Math.random() * set_of_words.length);
    msg.innerText = set_of_words[randomnumber];
    let date = new Date();
    starttime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    console.log(totaltime);

    let totalstr = typewords.value;
    let wordcount = wordcounter(totalstr);

    let speed = Math.round((wordcount / totaltime) * 60);
    let finalmsg = " You typed total at " + speed + " words per minutes. ";

    finalmsg += comparewords(msg.innerText, totalstr);

    msg.innerText = finalmsg;
}

const comparewords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorwords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorwords + ".");
}

const wordcounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function() {
    if (this.innerText == "Start") {
        typewords.disabled = false;
        playgame();
    } else if (this.innerText == "Done") {
        typewords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})