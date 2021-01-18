const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const tweetme = document.getElementById('tweetme');
let realdata = "";
let quotes_data = "";

const tweet_Now = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotes_data.text}`;
    window.open(tweetPost);
}

const get_new_quotes = () => {
    let rnum = Math.floor(Math.random() * realdata.length);
    quotes_data = realdata[rnum];
    quotes.innerText = `${quotes_data.text}`;
    author.innerText = `${quotes_data.author}`;
}

const get_quotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        get_new_quotes();
    } catch (error) {

    }
}

tweetme.addEventListener('click', tweet_Now);
btn.addEventListener('click', get_new_quotes);

get_quotes();
