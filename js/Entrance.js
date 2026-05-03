const card = document.getElementById('myCard');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

let words = [
    "entrance","door", "key", "lock", "shoe rack", "coat hanger", "mat"

];

let imgs = [
"entrance.webp","door.jpg", "key.webp", "lock.webp", "shoe rack.webp", "coat hanger.webp", "mat.webp"

];

let arWords = [
    "مدخل المنزل","باب", "مفتاح", "قُفل الباب", "الجزامة", "علاقة الملابس", "سجادة صغيرة"

];

let img = document.querySelector(".img");
let cardBack = document.querySelector(".flip-card-front");
cardBack.innerHTML = words[0];
img.setAttribute("src", "./imgs/" + imgs[0]);

let index = 0;
let nextBtn = document.querySelector(".next");

let voiceBtn = document.querySelector(".voice");

function speak(word) {
    let utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = .5;
    speechSynthesis.speak(utterance);
}

voiceBtn.onclick = function () {
        speak(words[index]);
}



let trans = document.querySelector(".trans");
let transBtn = document.querySelector(".show-trans");

transBtn.onclick = function () {
   trans.innerHTML = arWords[index] ;
}

nextBtn.onclick = function () {
    if (index < words.length - 1) {
        index++;
        cardBack.innerHTML = words[index];
        img.setAttribute("src", "./imgs/" + imgs[index])
 trans.innerHTML = "" ;
    }
}

let preBtn = document.querySelector(".previous")
preBtn.onclick = function () {
    if (index > 0) {
        index--;
        cardBack.innerHTML = words[index];
        img.setAttribute("src", "../imgs/" + imgs[index])
         trans.innerHTML = "";
    }

}