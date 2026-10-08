// ============================================================
// TUGAS JAVASCRIPT: SISTEM DATA USAHA UMKM
// Nama: TULIS NAMA KAMU DI SINI
// ============================================================


// ============================================================
// === LANGKAH 1: PERBAIKI KODE AWAL ===
// ============================================================

// FIX: JavaScript bersifat case-sensitive.
// namaUsaha berbeda dengan namausaha.
const namaUsaha = "Kopi Senja";

const kotaUsaha = "Yogyakarta";

// FIX: Tahun disimpan sebagai number agar bisa digunakan
// untuk perhitungan.
const tahunBerdiri = 2020;

const TARIF_PAJAK = 0.11;

let statusBuka = true;

// FIX: website hanya dideklarasikan satu kali.
let website = null;

const jumlahProduk = 3;

let produk = [
    "Kopi Susu",
    "Es Teh Manis",
    "Roti Bakar"
];

let hargaProduk = [
    18000,
    7500,
    15000
];


// FIX: namausaha menjadi namaUsaha.
console.log(namaUsaha);

// FIX: Console menjadi console.
console.log("Kota: " + kotaUsaha);

// FIX: tahunBerdiri sekarang number.
console.log(
    "Tahun berdiri berikutnya: " +
    (tahunBerdiri + 1)
);


// FIX: TARIF_PAJAK tidak diubah karena const.

// FIX: x diganti menjadi *.
let hargaKopiSetelahPajak =
    hargaProduk[0] * (1 + TARIF_PAJAK);

console.log(
    "Harga kopi + pajak: " +
    hargaKopiSetelahPajak
);

let hargaTermurah = Math.min(
    hargaProduk[0],
    hargaProduk[1],
    hargaProduk[2]
);

console.log("Termurah: " + hargaTermurah);

// Produk ke-4 belum tersedia.
console.log("Produk ke-4: " + produk[3]);

console.log("Status buka: " + statusBuka);


/*
============================================================
CATATAN BUG
============================================================

1. namausaha
Jenis: Error
Penyebab:
JavaScript bersifat case-sensitive sehingga namausaha dan
namaUsaha dianggap sebagai variabel berbeda.

Perbaikan:
Menggunakan namaUsaha.


2. Console.log
Jenis: Error
Penyebab:
JavaScript membedakan huruf besar dan kecil.

Perbaikan:
Menggunakan console.log.


3. Deklarasi website dua kali
Jenis: Error
Penyebab:
let tidak boleh dideklarasikan dua kali dalam scope yang sama.

Perbaikan:
Menggunakan satu deklarasi:
let website = null;


4. tahunBerdiri = "2020"
Jenis: Tidak error tetapi salah
Penyebab:
"2020" merupakan string sehingga operasi + dengan 1 menjadi
penggabungan string.

Perbaikan:
Menggunakan number 2020.


5. TARIF_PAJAK = 0.12
Jenis: Error
Penyebab:
TARIF_PAJAK menggunakan const sehingga tidak boleh diubah.

Perbaikan:
Menghapus assignment tersebut.


6. Operator x
Jenis: Error
Penyebab:
JavaScript menggunakan * untuk perkalian.

Perbaikan:
Mengubah x menjadi *.


7. produk[3]
Jenis: Tidak error tetapi hasilnya salah/tidak sesuai harapan.
Penyebab:
Array dimulai dari indeks 0. Tiga produk memiliki indeks 0, 1,
dan 2.

Perbaikan:
Menambahkan produk keempat jika memang diperlukan.


8. Komentar blok pada status usaha
Jenis: Tidak error tetapi kode tidak dijalankan.
Penyebab:
console.log status berada di dalam komentar.

Perbaikan:
Mengaktifkan kembali console.log.
*/


/*
============================================================
JAWABAN LANGKAH 1
============================================================

1. namausaha dan namaUsaha berbeda karena JavaScript
   bersifat case-sensitive. Huruf besar dan kecil dibedakan.

2. TARIF_PAJAK ditolak karena dibuat menggunakan const.
   statusBuka menggunakan let sehingga nilainya boleh diubah.

3. "2020" + 1 menghasilkan "20201" karena "2020" adalah
   string sehingga + melakukan penggabungan.
   Saya memilih menyimpan tahun sebagai number 2020.
*/


// ============================================================
// === LANGKAH 2: BENAHI STRUKTUR DATA ===
// ============================================================

const usaha = {
    nama: "Kopi Senja",
    pemilik: "Budi Santoso",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    nomorWhatsApp: "08123456789",
    website: null
};


const daftarProduk = [
    {
        nama: "Kopi Susu",
        harga: 18000
    },
    {
        nama: "Es Teh Manis",
        harga: 7500
    },
    {
        nama: "Roti Bakar",
        harga: 15000
    },
    {
        nama: "Pisang Goreng",
        harga: 12000
    }
];


// Notasi titik
console.log(usaha.nama);

// Notasi kurung siku
console.log(usaha["kota"]);

// Produk pertama
console.log(daftarProduk[0]);

// Produk terakhir
console.log(
    daftarProduk[daftarProduk.length - 1]
);


/*
============================================================
JAWABAN LANGKAH 2
============================================================

1. Nomor WhatsApp menggunakan string karena nomor WhatsApp
   bukan angka untuk dihitung. Selain itu angka 0 di depan
   harus tetap dipertahankan.

2. website menggunakan null karena kita sengaja menyatakan
   bahwa usaha belum mempunyai website.

   undefined biasanya berarti suatu variabel belum memiliki
   nilai.

   null berarti nilai kosong yang sengaja diberikan.

3. daftarProduk[4] merupakan indeks kelima karena array
   dimulai dari indeks 0.

   Karena elemen kelima belum ada, hasilnya adalah undefined.
*/


// ============================================================
// === LANGKAH 3: PERHITUNGAN DAN TAMPILAN ===
// ============================================================

const tahunSekarang = 2026;

const tarifPajak = 0.11;

const usiaUsaha =
    tahunSekarang - usaha.tahunBerdiri;

const hargaProdukBaru =
    daftarProduk.map((produk) => produk.harga);

const hargaTermurahBaru =
    Math.min(...hargaProdukBaru);

const hargaTermahalBaru =
    Math.max(...hargaProdukBaru);


console.log(`
===== KARTU USAHA =====
Nama Usaha  : ${usaha.nama}
Pemilik     : ${usaha.pemilik}
Kota        : ${usaha.kota}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${usaha.statusBuka ? "Buka" : "Tutup"}
Website     : ${usaha.website ?? "belum ada"}

Daftar Produk (harga + PPN 11%):
`);


daftarProduk.forEach((produk, index) => {

    const hargaSetelahPajak =
        produk.harga * (1 + tarifPajak);

    console.log(
        `${index + 1}. ${produk.nama} : Rp ${hargaSetelahPajak}`
    );
});


console.log(`
Termurah : Rp ${hargaTermurahBaru}
Termahal : Rp ${hargaTermahalBaru}
=======================
`);


/*
============================================================
JAWABAN LANGKAH 3
============================================================

Semua variabel pada langkah ini menggunakan const karena
tidak ada variabel yang perlu di-assign ulang.

Contoh:

tahunSekarang -> const
Karena nilainya tidak berubah.

tarifPajak -> const
Karena tarif pajak tetap 11%.

usiaUsaha -> const
Karena hasil perhitungannya tidak diubah.

hargaSetelahPajak -> const
Karena setiap produk menghasilkan nilai baru yang tidak
perlu diubah.


PERHITUNGAN MANUAL:

Kopi Susu = Rp18.000
PPN = 11% = 0,11

18.000 x (1 + 0,11)
18.000 x 1,11
= 19.980

Hasil program:
Rp19.980

Jadi hasil manual sama dengan program.


Jika harga object diubah, hasil yang sudah tercetak sebelumnya
tidak berubah.

Namun jika perhitungan dilakukan kembali setelah harga diubah,
hasil baru akan mengikuti harga terbaru.
*/


// Bukti perubahan harga

const hasilAwal =
    daftarProduk[0].harga * (1 + tarifPajak);

console.log(
    "Harga awal Kopi Susu setelah pajak: Rp " +
    hasilAwal
);


daftarProduk[0].harga = 20000;


const hasilBaru =
    daftarProduk[0].harga * (1 + tarifPajak);

console.log(
    "Harga Kopi Susu setelah harga diubah: Rp " +
    hasilBaru
);


// ============================================================
// === LANGKAH 4: DETEKTIF TIPE DATA ===
// ============================================================

/*
TEBAKAN SEBELUM MENJALANKAN:

typeof 42
Tebakan: "number"

typeof "42"
Tebakan: "string"

typeof true
Tebakan: "boolean"

typeof undefined
Tebakan: "undefined"

typeof null
Tebakan: "object"

typeof [1, 2, 3]
Tebakan: "object"

typeof { nama: "Budi" }
Tebakan: "object"

"5" + 3
Tebakan: "53"

"5" * 3
Tebakan: 15

"abc" * 2
Tebakan: NaN

10 / 0
Tebakan: Infinity

typeof usaha.website
Tebakan: "object"
*/


console.log(typeof 42);
// Hasil asli: "number" ✔

console.log(typeof "42");
// Hasil asli: "string" ✔

console.log(typeof true);
// Hasil asli: "boolean" ✔

console.log(typeof undefined);
// Hasil asli: "undefined" ✔

console.log(typeof null);
// Hasil asli: "object" ✔

console.log(typeof [1, 2, 3]);
// Hasil asli: "object" ✔

console.log(typeof { nama: "Budi" });
// Hasil asli: "object" ✔

console.log("5" + 3);
// Hasil asli: "53" ✔

console.log("5" * 3);
// Hasil asli: 15 ✔

console.log("abc" * 2);
// Hasil asli: NaN ✔

console.log(10 / 0);
// Hasil asli: Infinity ✔

console.log(typeof usaha.website);
// Hasil asli: "object" ✔


/*
============================================================
JAWABAN LANGKAH 4
============================================================

Semua tebakan sesuai dengan hasil asli.

typeof null menghasilkan "object", tetapi bukan berarti null
adalah object biasa.

Ini merupakan perilaku lama JavaScript yang sudah menjadi
bagian dari bahasa tersebut.

"5" + 3 menghasilkan "53" karena + dapat digunakan untuk
penggabungan string.

"5" * 3 menghasilkan 15 karena operator * melakukan operasi
matematika dan JavaScript mengubah "5" menjadi number.
*/


// ============================================================
// === LANGKAH 5: MODIFIKASI DADAKAN ===
// ============================================================


// Menambahkan satu produk baru.

daftarProduk.push({
    nama: "Brownies Cokelat",
    harga: 22000
});


// Menambahkan property instagram.

usaha.instagram = "@kopisenja";


// Perhitungan baru: total harga seluruh produk.

const totalHargaSemuaProduk =
    daftarProduk.reduce(
        (total, produk) => total + produk.harga,
        0
    );


console.log(
    "Produk baru: " +
    daftarProduk[daftarProduk.length - 1].nama
);

console.log(
    "Instagram: " +
    usaha.instagram
);

console.log(
    "Total harga semua produk: Rp " +
    totalHargaSemuaProduk
);


/*
============================================================
JAWABAN LANGKAH 5
============================================================

Yang harus ditambahkan:

1. Produk baru ke dalam daftarProduk.
2. Property instagram ke object usaha.
3. Perhitungan total harga.

Yang tidak perlu diubah:

Struktur produk tidak perlu diubah karena produk baru masih
menggunakan format yang sama, yaitu { nama, harga }.

Perhitungan pajak juga tidak perlu diubah karena tetap
menggunakan property harga dari object produk.


CONTOH STATEMENT:

1.
const tahunSekarang = 2026;

2.
usaha.instagram = "@kopisenja";


CONTOH EXPRESSION:

1.
tahunSekarang - usaha.tahunBerdiri

Dievaluasi menjadi:
6


2.
produk.harga * (1 + tarifPajak)

Untuk Kopi Susu:
18000 * 1.11
= 19980


============================================================
BONUS
============================================================
*/


// var sengaja hanya digunakan pada bagian bonus.

// var dapat diakses dari luar block.

if (true) {

    var contohVarDalamIf = "Saya masih bisa diakses";

    let contohLetDalamIf = "Saya hanya di dalam block";

    console.log(contohVarDalamIf);
    console.log(contohLetDalamIf);
}

console.log(contohVarDalamIf);

// Jika baris berikut dijalankan akan menghasilkan ReferenceError.
// console.log(contohLetDalamIf);


// var dapat dideklarasikan ulang.

var namaVar = "pertama";
var namaVar = "kedua";

console.log(namaVar);


// let tidak dapat dideklarasikan ulang pada scope yang sama.

// Jika kode berikut dijalankan akan menghasilkan SyntaxError.

// let namaLet = "pertama";
// let namaLet = "kedua";


/*
SKENARIO BUG:

Dalam program besar, var bisa menimbulkan masalah karena variabel
yang dibuat di dalam block seperti if masih dapat digunakan
di luar block.

Programmer lain bisa saja menggunakan nama variabel yang sama
dan nilainya berubah tanpa sengaja.

Karena itu let dan const lebih aman digunakan dalam JavaScript
modern.
*/


// ============================================================
// === OUTPUT KE HALAMAN HTML ===
// ============================================================

const hasil = document.getElementById("hasil");

hasil.innerHTML = `
    <h2>${usaha.nama}</h2>

    <p>
        <strong>Pemilik:</strong> ${usaha.pemilik}<br>
        <strong>Kota:</strong> ${usaha.kota}<br>
        <strong>Usia:</strong> ${usiaUsaha} tahun<br>
        <strong>Status:</strong>
        ${usaha.statusBuka ? "Buka" : "Tutup"}<br>
        <strong>WhatsApp:</strong> ${usaha.nomorWhatsApp}<br>
        <strong>Website:</strong>
        ${usaha.website ?? "Belum ada"}<br>
        <strong>Instagram:</strong> ${usaha.instagram}
    </p>

    <h3>Daftar Produk</h3>

    <ul>
        ${daftarProduk.map((produk) => `
            <li>
                ${produk.nama} -
                Rp ${produk.harga.toLocaleString("id-ID")}
            </li>
        `).join("")}
    </ul>

    <p>
        <strong>Harga termurah:</strong>
        Rp ${hargaTermurahBaru.toLocaleString("id-ID")}
    </p>

    <p>
        <strong>Harga termahal:</strong>
        Rp ${hargaTermahalBaru.toLocaleString("id-ID")}
    </p>

    <p>
        <strong>Total harga produk:</strong>
        Rp ${totalHargaSemuaProduk.toLocaleString("id-ID")}
    </p>
`;