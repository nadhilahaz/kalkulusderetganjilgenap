function hitung() {
  var deret = document.getElementById("deret").value;
  var batas = document.getElementById("batas").value;
  var suku_ke = document.getElementById("suku_ke").value;
  var sum = 0;
  var deret_str = "";
  var suku_n = 0;

  if (deret === "ganjil") {
    for (var i = 1; i <= batas; i++) {
      var deret_ganjil = 2 * i - 1;
      deret_str += deret_ganjil + " ";
      sum += deret_ganjil;
      if (i == suku_ke) {
        suku_n = deret_ganjil;
      }
    }
    localStorage.setItem("deretGanjil", JSON.stringify(deret_str));
    localStorage.setItem("jumlahDeret", JSON.stringify(sum));
    localStorage.setItem("sukuke", JSON.stringify(suku_ke));
    localStorage.setItem("sukun", JSON.stringify(suku_n));
    var hasilTerakhir = localStorage.getItem("hasilDeret");
    var hasilTerakhir = localStorage.getItem("jumlahDeret");
    var hasilTerakhir = localStorage.getItem("sukuke");
    var hasilTerakhir = localStorage.getItem("sukun");
    document.getElementById("hasil").innerHTML =
      "Deret bilangan ganjil: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n;
    console.log(deret_str);
    console.log(sum);
    console.log(suku_ke);
    console.log(suku_n);
  } else if (deret === "genap") {
    for (var i = 1; i <= batas; i++) {
      var deret_genap = 2 * i;
      deret_str += deret_genap + " ";
      sum += deret_genap;
      if (i == suku_ke) {
        suku_n = deret_genap;
      }
    }

    var hasilTerakhir = localStorage.getItem("hasilDeret");
    console.log(hasilTerakhir);

    document.getElementById("hasil").innerHTML =
      "Deret bilangan genap: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n;
  }
}

function reset() {
  // fungsi untuk mereset
  document.getElementById("deret").selectedIndex = 0;
  document.getElementById("batas").value = "";
  document.getElementById("suku_ke").value = "";
  document.getElementById("hasil").innerHTML = "";
}
