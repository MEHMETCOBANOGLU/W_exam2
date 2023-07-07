var point = 0;
var arr = ["180", "Sümerler ", "Endonezya ", "Who ", "0", "86400", "Muğla", "Bartın", "Yavuz Sultan Selim", "Almanya"];
var pointArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// SORU KONTROL, DOĞRU YANLIŞ, PUAN, RENK 
function control(qn, ans) {

    var par_id = document.getElementById("qp" + qn);
    if (arr[qn - 1] == ans) {
        par_id.style.backgroundColor = "#34eb3a";
        par_id.style.borderRadius = "5px";
        if (pointArr[qn - 1] == 0) {
            point += 10;
        }
        pointArr[qn - 1] = 1;
    } else {
        par_id.style.backgroundColor = "#ff0000";
        par_id.style.borderRadius = "5px";
        if (pointArr[qn - 1] == 0) {
            point -= 10;
        }
        pointArr[qn - 1] = 10;
    }
    document.getElementById("point").innerHTML = "puan: " + point;
}
// SURE BASLANGICI
var time_id = document.getElementById("time");
var seconds = 150;
t_int = setInterval(timer, 1000);


function timer() {
    if (seconds <= 0) {
        time_id.innerHTML = "Süre: --:--";
        document.body.classList.add('timer-active');
        sureBitti();

    } else {
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        if (m < 10) {
            m = "0" + m;
        }

        if (s < 10) {
            s = "0" + s;
        }
        time_id.innerHTML = "Süre: " + m + ":" + s;
        seconds--;

    }
}

// SURE BITTI
function sureBitti() {
    // Sayfayı kapsayan bir örtü ekleyin
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    // Sayfayı kapsayan örtüye bir mesaj ekleyin
    var message = document.createElement('div');
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.color = 'white';
    message.style.fontSize = '24px';
    message.innerHTML = 'Süre doldu! Sınavdan ' + point + ' puan aldınız!';
    overlay.appendChild(message);

    // Sayfadaki tüm tıklama olaylarını iptal edin
    document.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, true);

    // Sayfadaki tüm tuş olaylarını iptal edin
    document.addEventListener('keydown', function(event) {
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, true);

};

//SINAVI BİTİR BUTONU
function sinaviBitir() {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    // Sayfayı kapsayan örtüye bir mesaj ekleyin
    var message = document.createElement('div');
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.color = 'white';
    message.style.fontSize = '24px';
    message.innerHTML = 'Sınavdan ' + point + ' puan aldınız!';
    overlay.appendChild(message);
    clearInterval(t_int);

    // Sayfadaki tüm tıklama olaylarını iptal edin
    document.addEventListener('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, true);

    // Sayfadaki tüm tuş olaylarını iptal edin
    document.addEventListener('keydown', function(event) {
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, true);
}
// SORU GEÇİŞ
var sorular = document.querySelectorAll('.soru');
var oncekiBtn = document.querySelector('.onceki');
var sonrakiBtn = document.querySelector('.sonraki');
var soruIndex = 0;

function gosterSoru(index) {
    sorular[soruIndex].classList.remove('aktif');
    sorular[index].classList.add('aktif');
    soruIndex = index;

    if (soruIndex === 0) {
        oncekiBtn.disabled = true;
    } else {
        oncekiBtn.disabled = false;
    }

    if (soruIndex === sorular.length - 1) {
        sonrakiBtn.disabled = true;
    } else {
        sonrakiBtn.disabled = false;
    }
}

oncekiBtn.disabled = true;
gosterSoru(soruIndex);

oncekiBtn.addEventListener('click', function() {
    gosterSoru(soruIndex - 1);
});

sonrakiBtn.addEventListener('click', function() {
    gosterSoru(soruIndex + 1);
});
//////////////////////////////////////////////////////////////////////

document.getElementById("bitirr").addEventListener("click", () => sinaviBitir()

);
// LOCAL STORAGE

localStorage.setItem("cevaplar: ", arr); //SORULARIN CEVAPLARI

//sorular
const questions = document.querySelectorAll('.soru p');
questions.forEach(function(paragraph) {
    const text = paragraph.textContent;
    localStorage.setItem("soru", text);
    console.log("soru", text);
});