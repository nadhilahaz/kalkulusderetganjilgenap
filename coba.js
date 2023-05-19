function hitung() {
  var deret = document.getElementById("deret").value;
  var batas =
    document.getElementById(
      "batas"
    ).value; /* syntax untuk mendapatkan nilai dari elemen html dengan 'id' batas. nilai terdebut kemudian disimpan dalam variabel 'batas' */
  var suku_ke =
    document.getElementById(
      "suku_ke"
    ).value; /* syntax untuk mendapatkan nilai dari elemen html dengan 'id' suku-ke. nilai terdebut kemudian disimpan dalam variabel 'suku-ke' */
  var sum = 0;
  var deret_str =
    ""; /* inisialisasi  variabel 'dere_str' dengan string kosong, yang akan digunakan untuk menyimpan deret bilangan ganjil atau genap dalam bentuk string */
  var suku_n = 0; /* inisialisasi variabel 'sum' dengan nilai awal 0, yang akan digunakan untuk menyimpan jumlah dari deret bilangan ganjil atau genap */

  if (deret === "ganjil") {
    /* ini pernyataan if yang digunakan untuk memeriksa apakah input jenis deret yang diberikan oleh pengguna adalah "ganjil", jika benar maka program akan menjalankan */
    for (var i = 1; i <= batas; i++) {
      /* loop 'for' yang akan mengulang sebanyak 'batas' kali, dimulai dari 1 hingga 'batas'. variabel 'i' digunakan sebagai interator loop. setiap iterasi program akan menjalankan blok kode di daldm kurung kurawal */
      var deret_ganjil =
        2 * i -
        1; /* syntax untuk menghitung bilangan ganjil ke i pada deret ganjil, yaitu dengan cara mengalikan 'i' dengan 2 dan mengurangi hasilnya dengan 1. hasil perhitungan tersebut disimpan dalam variabel 'deret_ganjil' */
      deret_str +=
        deret_ganjil +
        " "; /* syntax untuk menambahkan 'deret_ganjil' ke variabel 'deret_str' yang berisi deret bilangan ganjil, diikuti dengan spasi */
      sum += deret_ganjil;
      if (i == suku_ke) {
        suku_n = deret_ganjil;
      }
    }
    document.getElementById("hasil").innerHTML =
      "Deret bilangan ganjil: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n;
  } else if (deret === "genap") {
    /* ini pernyataan if yang digunakan untuk memeriksa apakah input jenis deret yang diberikan oleh pengguna adalah "genap", jika benar maka program akan menjalankan */
    for (var i = 1; i <= batas; i++) {
      /* loop 'for' yang akan mengulang sebanyak 'batas' kali, dimulai dari 1 hingga 'batas'. variabel 'i' digunakan sebagai interator loop. setiap iterasi program akan menjalankan blok kode di daldm kurung kurawal */
      var deret_genap =
        2 *
        i; /* syntax untuk menghitung bilangan genap ke i pada deret ganjil, yaitu dengan cara mengalikan 'i' dengan 2. hasil perhitungan tersebut disimpan dalam variabel 'deret_genap' */
      deret_str +=
        deret_genap +
        " "; /* syntax untuk menambahkan 'deret_genap' ke variabel 'deret_str' yang berisi deret bilangan genap, diikuti dengan spasi */
      sum += deret_genap;
      if (i == suku_ke) {
        suku_n = deret_genap;
      }
    }
    document.getElementById("hasil").innerHTML =
      "Deret bilangan genap: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n; /*menentukan suku ke n*/
  }
}

function reset() {
  /*fungsi untuk meereset*/
  document.getElementById("deret").selectedIndex = 0;
  document.getElementById("batas").value = "";
  document.getElementById("suku_ke").value = "";
  document.getElementById("hasil").innerHTML = "";
}
