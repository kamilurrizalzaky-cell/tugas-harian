// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// --- POTONGAN A ---
/*
Tebakan Output Potongan A:
- luar() dipanggil -> dalam() dipanggil -> mencetak "Dalam"
- luar() mencetak "Luar"
- console.log(nama) di global -> mencetak "Global"
- hitung(100) -> 100 - 10 (diskonGlobal) - 5 (diskonLokal) -> 85
- if (true) -> mencetak "di dalam blok"
- for (let i = 0; i < 2; i++) -> mencetak "putaran 0" lalu "putaran 1"

Hasil Asli:
Dalam
Luar
Global
85
di dalam blok
putaran 0
putaran 1
*/
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;
function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}
console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}

// Percobaan Tambahan Potongan A:
// console.log(pesanBlok);
// Pesan error: ReferenceError: pesanBlok is not defined

// console.log(i);
// Pesan error: ReferenceError: i is not defined


// --- POTONGAN B ---
/*
Tebakan Output Potongan B:
- sapa() dipanggil sebelum deklarasi -> Karena function declaration di-hoist sepenuhnya, mengembalikan "Halo!"
- console.log(warna) -> Karena 'var warna' di-hoist deklarasinya saja (nilainya belum diisi), hasilnya `undefined`
- console.log(warna) setelah diisi -> mencetak "biru"

Hasil Asli:
Halo!
undefined
biru
*/
console.log(sapa());
function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);

// Percobaan Tambahan Potongan B:
// console.log(lokasi);
// const lokasi = "Sleman";
// Pesan error: ReferenceError: Cannot access 'lokasi' before initialization (Temporal Dead Zone / TDZ)

// console.log(salam());
// const salam = function () { return "Hai"; };
// Pesan error: ReferenceError: Cannot access 'salam' before initialization


// --- POTONGAN C ---
/*
Tebakan Output Potongan C:
- penghitungA() -> hitungan jadi 1 -> mengembalikan 1
- penghitungA() -> hitungan jadi 2 -> mengembalikan 2
- penghitungA() -> hitungan jadi 3 -> mengembalikan 3
- penghitungB() -> instance closure baru (hitungan mulai 0) -> hitungan jadi 1 -> mengembalikan 1
- penghitungA() -> mempertahankan state hitunganA sebelumnya (3) -> hitungan jadi 4 -> mengembalikan 4

Hasil Asli:
1
2
3
1
4
*/
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());


/*
--- JAWABAN PERTANYAAN LANGKAH 1 ---
1. Pada Potongan A, kenapa tiga console.log(nama) menghasilkan nilai yang berbeda? Kenapa hitung(100) tetap bisa memakai diskonGlobal? Kenapa pesanBlok dan i error di luar blok?
   - Karena masing-masing fungsi menciptakan scope tersendiri (Function Scope/Lexical Scope). JavaScript mencari variabel dari scope paling dalam ke luar (Scope Chain).
   - `hitung(100)` bisa mengakses `diskonGlobal` karena variabel tersebut dideklarasikan di Global Scope, sehingga bisa diakses dari dalam fungsi manapun.
   - `pesanBlok` dan `i` dideklarasikan menggunakan `let` di dalam blok `if` dan `for`. Variabel `let` bersifat Block Scope sehingga tidak dapat diakses dari luar blok tempat ia dideklarasikan.
2. Pada Potongan B, kenapa sapa() bisa dipanggil sebelum didefinisikan, sedangkan warna bernilai undefined, dan lokasi serta salam menimbulkan error?
   - `sapa()` adalah Function Declaration yang mengalami Hoisting penuh (fungsi dan isinya ditarik ke atas oleh JavaScript sebelum dieksekusi).
   - `var warna` mengalami hoisting deklarasi variabel saja (nilainya diinisialisasi `undefined` sampai baris penugasannya dieksekusi).
   - `lokasi` (const) dan `salam` (const function expression) berada dalam masa Temporal Dead Zone (TDZ) sebelum baris deklarasinya dieksekusi, sehingga memicu ReferenceError jika diakses lebih awal.
3. Pada Potongan C, kenapa penghitungA terus bertambah padahal buatPenghitung sudah selesai dijalankan? Kenapa penghitungB mulai dari 1 lagi?
   - Karena terjadi Closure: inner function tetap "mengingat" dan mempertahankan lingkungan lexical-nya (variabel `hitungan`) meskipun outer function (`buatPenghitung`) sudah selesai dieksekusi.
   - `penghitungB` mulai dari 1 lagi karena pemanggilan `buatPenghitung()` yang kedua membuat lingkungan Lexical Scope baru yang independen dari `penghitungA`.
*/

// LANGKAH 2: PERBAIKI 8 KESALAHAN
// ==========================================

// FIX 1: Pindahkan deklarasi `pesanStok` (atau pengaksesan console.log) ke scope yang sama/global agar bisa diakses di luar blok `if`.
const stok = 10;
let pesanStok;
if (stok > 5) {
  pesanStok = "Stok aman";
}
console.log(pesanStok);

// FIX 2: Tambahkan `return` pada fungsi `hitungPotongan` agar mengembalikan hasil perhitungannya, dan tangkap hasilnya dalam console.log.
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
console.log(hitungPotongan(50000));

// FIX 3: Pindahkan deklarasi `sambutan` ke atas sebelum dipanggil, atau ubah menjadi Function Declaration agar terhindar dari TDZ.
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());

// FIX 4: Deklarasikan `kota` sebelum dipanggil dengan console.log untuk menghindari TDZ.
let kota = "Yogyakarta";
console.log(kota);

// FIX 5: Ganti `var` menjadi `let` atau `const` di dalam blok `if` agar tidak merusak/menimpa nilai variabel `total` di outer scope.
var total = 100000;
if (true) {
  let total = 90000; // Block scope, tidak menimpa var total di luar
}
console.log(total);

// FIX 6: Hapus re-deklarasi `let saldoKas = 0;` di dalam fungsi agar `tambahKas` memodifikasi variabel `saldoKas` di outer scope.
let saldoKas = 100000;
function tambahKas(jumlah) {
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// FIX 7: Pindahkan `let nomor = 0;` ke luar inner function (di dalam outer function `buatAntrean`) agar nilai `nomor` tidak di-reset ke 0 setiap kali fungsi dipanggil.
function buatAntrean() {
  let nomor = 0;
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// FIX 8: Ubah `this.saldo` menjadi `saldo` di dalam `cekSaldo` agar merujuk ke variabel privat di lexical scope closure, bukan ke properti object `this`.
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo;
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());


/*
--- JAWABAN PERTANYAAN LANGKAH 2 ---
1. Tulis ke-8 kesalahan tadi dalam satu kalimat singkat masing-masing:
   - Kesalahan 1: Mengakses variabel Block Scope `pesanStok` di luar blok `if`, diperbaiki dengan mendeklarasikan `pesanStok` di luar blok.
   - Kesalahan 2: Mengakses variabel lokal `potongan` di luar fungsi, diperbaiki dengan mencetak hasil kembalian `hitungPotongan(50000)`.
   - Kesalahan 3: Memanggil const function expression `sambutan` sebelum dideklarasikan (TDZ), diperbaiki dengan memindahkan pemanggilan ke bawah deklarasi.
   - Kesalahan 4: Memanggil `kota` sebelum baris `let kota = "Yogyakarta"` (TDZ), diperbaiki dengan memindahkan console.log ke bawah deklarasi.
   - Kesalahan 5: `var total` di dalam blok `if` menimpa `total` di luar, diperbaiki mengganti `var` menjadi `let`.
   - Kesalahan 6: Shadowing variabel `saldoKas` dengan `let saldoKas = 0`, diperbaiki dengan menghapus deklarasi ulang variabel lokal tersebut.
   - Kesalahan 7: Inisialisasi `let nomor = 0` berada di dalam inner function, diperbaiki dengan memindahkannya ke outer function closure.
   - Kesalahan 8: Penggunaan `this.saldo` pada method object padahal `saldo` adalah variabel closure, diperbaiki dengan menggantinya menjadi `saldo`.
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
   - Yang menyebabkan error di console: Kesalahan 1 (`ReferenceError: pesanStok is not defined`), Kesalahan 2 (`ReferenceError: potongan is not defined`), Kesalahan 3 (`ReferenceError: Cannot access 'sambutan' before initialization`), dan Kesalahan 4 (`ReferenceError: Cannot access 'kota' before initialization`).
   - Yang tidak error tetapi hasilnya salah: Kesalahan 5 (nilai total berubah jadi 90000), Kesalahan 6 (saldoKas luar tidak bertambah), Kesalahan 7 (mencetak `1 1 1`), dan Kesalahan 8 (mengembalikan `undefined`).
3. Kenapa let saldoKas = 0; di dalam tambahKas membuat saldoKas di luar tidak berubah? Apa istilah untuk kejadian ini?
   - Karena deklarasi `let saldoKas = 0` di dalam fungsi membuat variabel lokal baru yang "menutupi" atau menyembunyikan variabel `saldoKas` yang ada di luar (global/outer scope). Istilah untuk kejadian ini adalah **Variable Shadowing**.
4. Kenapa this.saldo di dalam cekSaldo menghasilkan undefined, padahal saldo ada di buatDompet?
   - Karena `saldo` dideklarasikan sebagai variabel lokal (`let saldo`) di dalam fungsi `buatDompet`, bukan sebagai properti dari object yang dikembalikan. `this.saldo` mencari properti `saldo` pada object `dompet`, yang nilainya tidak pernah dibuat/diisi sehingga bernilai `undefined`.
*/

// LANGKAH 3: BIKIN KASIR SENDIRI
// ==========================================

// 1. Variabel Global Scope
const NAMA_WARUNG = "Kedai Senja Utama";
const TARIF_PAJAK = 0.11;

// 2. Pemanggilan Function Declaration sebelum pendefinisian (Hoisting)
cetakJudul();

function cetakJudul() {
  console.log(`\n=== ${NAMA_WARUNG.toUpperCase()} ===`);
}

// 3 & 4. Function Pabrik buatKasir dengan Data Privat Closure
function buatKasir(namaKasir, modalAwal) {
  // Data privat ( closure state )
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  let riwayat = [];

  return {
    // 5. catatPenjualan
    catatPenjualan(namaMenu, harga, jumlah) {
      let subtotal = harga * jumlah;
      let pajak = subtotal * TARIF_PAJAK;
      let total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi++;
      riwayat.push({ namaMenu, jumlah, total });

      return total;
    },

    // 6. ambilKas
    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }
      saldoKas -= jumlah;
      return true;
    },

    // 7. cekSaldo & lihatRiwayat (mengembalikan salinan array pakai slice)
    cekSaldo() {
      return saldoKas;
    },

    lihatRiwayat() {
      return riwayat.slice();
    },

    // 8. ringkasan
    ringkasan() {
      console.log(`[KASIR] ${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo Kas: Rp ${saldoKas.toLocaleString('id-ID')}`);
    }
  };
}

// 9. Instansiasi Kasir & Transaksi
const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

// Minimal 3 penjualan kasir pagi
kasirPagi.catatPenjualan("Kopi Susu", 18000, 2);
kasirPagi.catatPenjualan("Roti Bakar", 15000, 1);
kasirPagi.catatPenjualan("Es Teh", 7000, 2);

// Minimal 2 penjualan kasir malam
kasirMalam.catatPenjualan("Matcha Latte", 22000, 2);
kasirMalam.catatPenjualan("Nasi Goreng", 25000, 1);

// Pengujian ambilKas (satu berhasil, satu gagal)
console.log("Ambil Kas Rp 30.000 (Pagi):", kasirPagi.ambilKas(30000));  // true
console.log("Ambil Kas Rp 500.000 (Pagi):", kasirPagi.ambilKas(500000)); // false (stok kas tidak cukup)

// Ringkasan Kedua Kasir
kasirPagi.ringkasan();
kasirMalam.ringkasan();

// 10. Bukti Data Privat
console.log("\n--- PEMBUKTIAN DATA PRIVAT ---");
console.log("Akses langsung kasirPagi.saldoKas:", kasirPagi.saldoKas); // Output: undefined
kasirPagi.saldoKas = 999999; // Coba merusak nilai dari luar
console.log("Saldo kasirPagi via cekSaldo() setelah diubah dari luar:", kasirPagi.cekSaldo()); 
/*
Hasil:
- kasirPagi.saldoKas menghasilkan `undefined` karena saldoKas bukan properti object.
- Setelah diisi kasirPagi.saldoKas = 999999, nilai asli saldoKas di dalam closure TIDAK BERUBAH dan cekSaldo() tetap mengembalikan nilai saldo kas yang valid.
*/

// 11. Bukti Salinan Array (slice)
console.log("\n--- PEMBUKTIAN SALINAN ARRAY ---");
let salinanRiwayat = kasirPagi.lihatRiwayat();
salinanRiwayat.push({ namaMenu: "Item Palsu", jumlah: 99, total: 0 });
console.log("Panjang salinan riwayat:", salinanRiwayat.length); // 4
console.log("Panjang riwayat asli via lihatRiwayat():", kasirPagi.lihatRiwayat().length); // 3
/*
Hasil:
- Menambahkan item ke salinanRiwayat tidak mempengaruhi riwayat asli di dalam closure kasirPagi karena method `.slice()` menghasilkan array baru yang terpisah.
*/

// 12. Function Pabrik buatPenghitungDiskon
function buatPenghitungDiskon(persen) {
  return (harga) => harga - (harga * persen / 100);
}

const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);

console.log("\n--- PENGHITUNG DISKON (CLOSURE) ---");
console.log("Harga 80000 Diskon 10%:", diskon10(80000)); // 72000
console.log("Harga 80000 Diskon 25%:", diskon25(80000)); // 60000

// 13. Shadowing Demo
console.log("\n--- SHADOWING DEMO ---");
const variabelGlobal = "Saya Global";

function demoShadowing() {
  const variabelGlobal = "Saya Lokal (Shadowing)";
  console.log("Di dalam fungsi:", variabelGlobal);
}

demoShadowing();
console.log("Di luar fungsi:", variabelGlobal);
/*
Hasil:
Di dalam fungsi: Saya Lokal (Shadowing)
Di luar fungsi: Saya Global
*/

// Percobaan Tambahan Pertanyaan 5 (Function Expression Hoisting Test):
// console.log(cetakJudulExp());
// const cetakJudulExp = function() { return NAMA_WARUNG; };
// Pesan Error: ReferenceError: Cannot access 'cetakJudulExp' before initialization


/*
--- JAWABAN PERTANYAAN LANGKAH 3 ---
1. Kenapa kasirPagi.saldoKas menghasilkan undefined, padahal method kasir bisa mengubah saldoKas? Apa hubungannya dengan closure?
   - Karena `saldoKas` dideklarasikan menggunakan `let` di dalam ruang lingkup fungsi `buatKasir`, bukan sebagai properti dari object yang dikembalikan. Method-method kasir bisa mengubahnya karena method tersebut membentuk **Closure** yang mempertahankan akses ke variabel lokal milik fungsi induknya, sedangkan kode luar tidak memiliki akses langsung.
2. Kenapa saldo kasirPagi dan kasirMalam terpisah, padahal dibuat dari function yang sama?
   - Karena setiap kali fungsi `buatKasir()` dipanggil, JavaScript membuat lingkungan eksekusi (*Lexical Environment*) dan ruang alokasi memori variabel baru yang sepenuhnya terisolasi.
3. Setelah buatKasir selesai dijalankan, variabel mana saja yang masih "diingat"? Kenapa tidak hilang?
   - Variabel yang masih diingat adalah `saldoKas`, `jumlahTransaksi`, `riwayat`, `namaKasir`, dan `modalAwal`. Variabel ini tidak dihapus oleh Garbage Collector karena masih terus dirujuk (*referenced*) oleh inner function (method-method) yang dikembalikan oleh `buatKasir`.
4. Kenapa TARIF_PAJAK bisa dipakai di dalam method meskipun dideklarasikan di luar buatKasir? Apa nama mekanismenya?
   - Karena JavaScript menggunakan mekanisme **Scope Chain**. Jika suatu variabel tidak ditemukan di lokal scope fungsi, JavaScript akan terus mencari ke scope di atasnya hingga mencapai Global Scope.
5. Kenapa cetakJudul() bisa dipanggil sebelum didefinisikan?
   - Karena `cetakJudul()` dibuat menggunakan **Function Declaration** yang mengalami hoisting penuh oleh compiler JavaScript. Jika diubah menjadi `const cetakJudulExp = function()...` dan dipanggil sebelumnya, akan memicu `ReferenceError: Cannot access 'cetakJudulExp' before initialization` akibat Temporal Dead Zone (TDZ).
6. Pada buatPenghitungDiskon, nilai persen tidak dikirim lagi saat diskon10(80000) dipanggil. Dari mana function itu mengetahui nilai persen?
   - Arrow function mengetahui nilai `persen` dari closure lingkungan lexical tempat arrow function tersebut diciptakan, yaitu saat `buatPenghitungDiskon(10)` pertama kali dieksekusi.
*/