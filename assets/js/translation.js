var language;
language = localStorage.getItem("language");


window.addEventListener("load", (event) => {
    // alert("hello");
    language = localStorage.getItem("language");
    // alert(langauage);
    if (language) {
        if (language === "ru") {
            translate_ru();
        }else if( language === "ar"){
            translate_ar();
        }
    }
    else{
        language = "en";
        localStorage.setItem("language", "en");
    }
});

function translatePage(targetLang) {
    const elements = document.getElementsByClassName('text');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const text = element.innerText;
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${text}`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                element.innerText = data[0][0][0];
            })
            .catch(error => {
                console.error(error);
            });
    }
}

function translate_ru() {
    const targetLang = 'ru'; // Change this to the language you want to translate to
    translatePage(targetLang);
    localStorage.setItem("language", "ru");
}
function translate_ar() {
    const targetLang = 'ar'; // Change this to the language you want to translate to
    translatePage(targetLang);
    localStorage.setItem("language", "ar");
}
function translate_en() {
    localStorage.setItem("language", "en");
    location.reload();
}



document.getElementById("ru").addEventListener("click", translate_ru);
document.getElementById("ar").addEventListener("click", translate_ar);
document.getElementById("en").addEventListener("click", translate_en);