const main=document.querySelector("main");
const toggle_btn=document.getElementById("btn");
const allvoices=document.getElementById("allvoices");
const txtarea=document.getElementById("txtarea");
const readtxt_btn=document.getElementById("readtxt_btn");
const close_btn=document.getElementById("close");


const createcard=(item)=>{

  const box=document.createElement("div");
  const {image,text}=item;
  box.classList.add("box");
  box.innerHTML=`<img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
  <p class="info">${text}</p>`;

  box.addEventListener("click",()=>{handelspeech(text)});
main.appendChild(box);
}

data.forEach(createcard);




let voices = [];
function speechReader() {
 voices = speechSynthesis.getVoices();
 console.log(voices);
  voices.forEach((voice) => {
    // console.log(voice.name);
    const option = document.createElement("option");
    option.value = voice.name;
    // console.log(option.value)
    option.innerText = `${voice.name} ${voice.lang}`;
    // console.log(option.innerText);
    allvoices.appendChild(option);
  });
 
  
}

function handelspeech(text) {
  setTextMessage(text);
  speakText();
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}


function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}



toggle_btn.addEventListener("click", () => {
  document.querySelector(".textbox").classList.toggle("show");
});

close_btn.addEventListener("click", () => {
  document.querySelector(".textbox").classList.add("show");
});
speechSynthesis.addEventListener("voiceschanged", speechReader);


allvoices.addEventListener("change", setVoice);
readtxt_btn.addEventListener("click", () => {
  setTextMessage(txtarea.value);
  speakText();
});


speechReader();




