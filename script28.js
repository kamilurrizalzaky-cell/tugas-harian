// a. tebakan: 13
//    hasil asli: 13 ✔
//    alasan: perkalian dikerjakan lebih dahulu, jadi 3 * 2 = 6,
//    lalu 7 + 6 = 13.
//    console.log[[7 + 3] * 2];

// b. tebakan: 20
//    hasil asli: 20
//    alasan: tanda kurung dikerjakan lebih dahulu.
//    7 + 3 = 10, lalu 10 * 2 = 20.
//    console.log[[7 + 3] * 2];

// c. tebakan: 2
//    hasil asli: 2 ✔
//    alasan: operator % menghasilkan sisa pembagian.
//    17 dibagi 5 menghasilkan sisa 2.
//    console.log[17 % 5];

// d. tebakan: 8
//    hasil asli: 8 ✔
//    alasan: operator ** digunakan untuk perpangkatan. 
//    2 ** 3 berarti 2 * 2 * 2 = 8. 
//    console.log[2 ** 3];

// e. tebakan: true
//    hasil asli: true ✔
//    alasan: operator == membandingkan nilai dan mnegizinkan
//    konversi tipe Data, sehingga 5 sama dengan "5" . 
//    console.log[5 == "5"];

// f. tebakan: false
//    hasil asli: false ✔
//    alasan: operator && menghasilkan true jika kedua kondisi
//    true. alasan salah satunya false, hasilnya false. 
//    console.log[true && false];

// g. tebakan: true 
//    hasil asli: true ✔
//    alasan: operator || menghasilkan true jika minimal satu
//    kondisi bernilai true. 
//    console.log[true || false];

// h. tebakan: false 
//    hasil asli: false ✔
//    alasan: operator ! membalik nilai Boolean. 
//    karena true dibalik, hasilnya menjadi false. 
//    console.log[!true];

// i. tebakan: false 
//    hasil asli: false ✔
//    alasan: 10 > 5 bernilai true, tetapi 3 > 8 bernilai false. 
//    operator && membutuhkan kedua kondisi true. 
//    console.log[10 . 5 && 3 > 8];

//    JAWABAN PERTANYAAN

//  1. Jika semua tebakan benar, tebakan paling sulit adalah
//     nomor 5 dan 6 karena operator == dan === berbeda.

//  2. 7 + 3 * 2 menghasilkan 13 karena perkalian dikerjakan
//     sebelum penjumlahan.

//  3. == mengizinkan konversi tipe data, sedangkan ===
//     membandingkan nilai dan tipe data sekaligus.

// FIX 1: Kalikan jumlah kopi dan teh sesuai pesanan.
let totalPesanan = hargaKopi * 2 + hargaTeh * 2;

// FIX 2: Ubah uangDiterima menjadi number agar tipe datanya sama.
let uangPas = Number(uangDiterima) === totalPesanan;

// FIX 3: Gunakan += agar jumlah member benar-benar bertambah.
jumlahMember += 1;

// FIX 4: Gunakan || karena syarat diskon memakai kata ATAU.
let dapatDiskon = sudahMember || totalPesanan > 100000;