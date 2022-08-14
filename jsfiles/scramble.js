const wordText=document.querySelector(".word"),
hintText=document.querySelector(".hint span");
let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
];

let refresh=document.querySelector(".refresh-word");
let check=document.querySelector(".check-word");
let typedWord=document.querySelector("input");
let secTime=document.querySelector(".time span b");
let correctWord;


const timer = maxTime=>{
    time= setInterval(()=>{
        if(maxTime>0){
            maxTime--;
            return secTime.innerText=maxTime;
        }
        clearInterval(time);
        alert(`Time out! ${correctWord.toUpperCase()} was a correct word`);
        initgame();
    },1000)
};

const initgame = ()=>{
    timer(30);
    let randomObj= words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random() * (i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    correctWord=randomObj.word.toLocaleLowerCase();
    typedWord.value="";
    typedWord.setAttribute('maxlength',correctWord.length)
    wordText.innerText=wordArray.join("");
    hintText.innerText=randomObj.hint;
}

initgame();

function refreshbutton(){
    clearInterval(time);
    initgame();
}

refresh.addEventListener('click',refreshbutton);
check.addEventListener('click',checkWord);

function checkWord(){
    let userWord= typedWord.value.toLocaleLowerCase();
    if(!userWord){
        return alert("Please enter a word");
    }
    if(userWord==correctWord){
        alert(`Congrats ${userWord.toUpperCase()} is a correct word`);
        clearInterval(time);
        initgame();
    }else{
        return alert(`Oops ${userWord} is not a correct word`);
    }
}