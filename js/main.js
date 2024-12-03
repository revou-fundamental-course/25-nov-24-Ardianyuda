
const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let gender = document.querySelector("#gender").value;
  let usia = document.querySelector("#usia").value;
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;  
  

  if (weight == "" || height == "") {
    alert("Ada yang belum kamu isi!");
  }

  gender = document.querySelector(".gen-result1").innerHTML = `<span>${gender}</span>`;
  usia = document.querySelector(".gen-result2").innerHTML = `( <span>${usia}</span>th )`;

  height = height / 100;
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);
  console.log(bmi);

  document.querySelector("#result").innerHTML = bmi;

  let status = "";
  let solusi = "";

  if (bmi < 18.5) {
    status = "kekurangan berat badan";
    solusi =
      "Hasil BMI anda kurang dari 18.5 menandakan bahwa anda kekurangan berat badan. Hal ini biasanya disebabkan oleh kondisi medis, ganguan makan, stres dan gaya hidup. Untuk membantu meningkatkan berat badan anda bisa memperbanyak olahraga, meningkatkan asupan kalori, istirahat yang cukup, kelola stres, dan juga jikalau perlu konsultasilah pada dokter. Tetap semangat sesuatu yang diinginkan memerlukan kesabaran dan juga perjuangan.";
  }
  if (bmi >= 18.5 && bmi < 25) {
    status = "memiliki berat badan normal";
    solusi = "Hasil BMI anda antara 18.5 dan 25 menandakan bahwa anda memiliki berat badan yang normal. Hal tersebut sangat bagus dan perlu anda pertahankan dengan menjaga pola makan yang seimbang, konsisten dalam berolahraga, istirahat yang cukup dan cek kesehatan rutin. Tetap semangat, Pertahankan!!."

  }
  if (bmi >= 25 && bmi < 30) {
    status = "memiliki berat badan berlebih";
    solusi = "Hasil BMI anda antara 25 dan 30 menandakan bahwa anda memiliki berat badan yang berlebih. Hal tersebut kurang baik untuk kesehatan, jadi anda perlu menurunkan berat badan anda menuju berat badan yang normal dengan atur pola makan, tingkatkan aktivitas fisik, cukup istirahat, perbanyak minum air putih, dan konsultasi pada dokter. Menurunkan berat badan yang berlebih juga sangat baik  untuk kesehatan kita seperti mencegah penyakit kronis, meningkatkan energi, meningkatkan mood dan meningkatkan kualitas hidup. Tetap Semangat, Jangan Menyerah!."
  }
  if (bmi >= 30) {
    status = "kelebihan berat badan / Obesitas";
    solusi = "Hasil BMI anda lebih dari 30 menandakan bahwa kelebihan berat badan atau Obesitas. Hal tersebut tidak baik untuk kesehatan, jadi anda perlu menurunkan berat badan anda menuju berat badan yang normal dengan atur pola makan, tingkatkan aktivitas fisik, cukup istirahat, perbanyak minum air putih, dan konsultasi pada dokter. Menurunkan berat badan yang berlebihan juga sangat baik  untuk kesehatan kita seperti mencegah penyakit kronis, meningkatkan energi, meningkatkan mood dan meningkatkan kualitas hidup. Tetap Semangat, Jangan Menyerah!."
  }

  document.querySelector(".comment").innerHTML = `Anda <span>${status}</span>`;
  document.querySelector(".des").innerHTML = `<span>${solusi}</span>`;
});

let print = document.getElementById("print");

print.addEventListener("click", function(){
  window.print();
})

