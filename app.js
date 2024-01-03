const quoteBlock=document.querySelector(".quoteblock");
const authorSpan=document.querySelector(".authorspan");
const newQuoteBtn=document.querySelector(".newquote");

const api_url="https://api.quotable.io/random";

newQuoteBtn.addEventListener("click",()=>{
    getQuote(api_url);
})
async function getQuote(url){
    const response= await fetch(url);
    var data= await response.json();

    quoteBlock.innerHTML=data.content;
    authorSpan.innerHTML=data.author
    console.log(data);
}

function shareTweet(){
    window.open("https://twitter.com/intent/tweet?text="+quoteBlock.innerHTML+"----- by "+authorSpan.innerHTML,"Twitter Window","width=800","hight=400")
}