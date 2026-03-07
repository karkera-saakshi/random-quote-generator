let quoteBox = document.getElementById("load");
let loadQuote = () =>{
    fetchQuote();
}
let fetchQuote = async() =>
{
    let response = await fetch(`https://dummyjson.com/quotes`);
    let data = await response.json();
    console.log(data);
    let randomIndex = Math.floor(Math.random() * data.quotes.length);
    let randomQuote = data.quotes[randomIndex];
    console.log(randomQuote)
    quoteBox.innerHTML = `
    ${randomQuote.quote}
    <br>
    <span style="display:block; margin-top:15px; font-style: normal; color: #636e72;">
                        — ${randomQuote.author}
    </span>
    `
}