// script.js
document.getElementById("TombolStart").onclick = function () {
  document.getElementById("mainH1").classList.add("slide-in");
  document.getElementById("mainH1").classList.remove("hidden");
  document.getElementById("mainH2").classList.add("slide-in");
  document.getElementById("mainH2").classList.remove("hidden");
  document.getElementById("mainH3").classList.add("slide-in");
  document.getElementById("mainH3").classList.remove("hidden");
  const myBtn = document.getElementById("TombolBio");
  myBtn.style.display = "inline-block";
  myBtn.classList.remove("hidden");
  myBtn.style.animation = "fadeInBtn 3s ease forwards";
  document.getElementById("TombolStart").style.display = "none";
  document.getElementById("tekan").style.display = "none";
};

document.getElementById("TombolBio").onclick = function () {
  document.getElementById("kananBox").style.display = "block";
  document.getElementById("kananBox").innerHTML = `
                <span id="closeBox" style="cursor:pointer;float:right;font-size:1.5rem;font-weight:bold;">&times;</span>
                <b><u>Ini Biodataku</u></b><br><br>Hi! Perkenalkan namaku <b>Rizky Dzaky Nur</b><br> Umurku 15 tahun<br> Aku punya hobi Menggambar kadang juga Badminton<br>Aku tinggal di Jawa Timur<br>
            `;
  document.getElementById("closeBox").onclick = function () {
    document.getElementById("kananBox").style.display = "none";
  };
};
