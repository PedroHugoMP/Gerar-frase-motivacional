const bntget = document.getElementById("bnt");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const apiulr = `https://dummyjson.com/quotes/random`;

bntget.addEventListener("click", async () => {
    const response = await fetch(apiulr);
    const data = await response.json();
    h1.innerText = data.quote;
    h2.innerText = data.author;
    
})