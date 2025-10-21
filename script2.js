// script.js
document.getElementById("TombolStart").onclick = function () {
  document.getElementById("mainH1").classList.add("slide-in");
  document.getElementById("mainH1").classList.remove("hidden");
  document.getElementById("mainH2").classList.add("slide-in");
  document.getElementById("mainH2").classList.remove("hidden");
  document.getElementById("mainH3").classList.add("slide-in");
  document.getElementById("mainH3").classList.remove("hidden");
  document.getElementById("github").classList.add("slide-in");
  document.getElementById("github").classList.remove("hidden");
  const myBtn = document.getElementById("TombolBio");
  myBtn.style.display = "inline-block";
  myBtn.classList.remove("hidden");
  myBtn.style.animation = "fadeInBtn 3s ease forwards";
  document.getElementById("TombolStart").style.display = "none";
  document.getElementById("tekan").style.display = "none";
};

  document.getElementById("TombolBio").addEventListener("click", function () {
    var kananBox = document.getElementById("kananBox");
    kananBox.classList.toggle("show");
  });
