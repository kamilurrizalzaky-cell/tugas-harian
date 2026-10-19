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