// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// --- POTONGAN A ---
/*
Tebakan Output Potongan A:
- menu awal: ["Kopi", "Teh", "Roti", "Susu"]
- menu.push("Jus") -> Menambah "Jus" di akhir: ["Kopi", "Teh", "Roti", "Susu", "Jus"]
- menu.unshift("Air") -> Menambah "Air" di awal: ["Air", "Kopi", "Teh", "Roti", "Susu", "Jus"]
- menu.pop() -> Membuang elemen terakhir ("Jus") dan menyimpannya ke terakhirDibuang. (terakhirDibuang = "Jus")
- menu.shift() -> Membuang elemen pertama ("Air") dan menyimpannya ke pertamaDibuang. (pertamaDibuang = "Air")
  Sisa menu saat ini: ["Kopi", "Teh", "Roti", "Susu"]
- menu.splice(1, 1) -> Menghapus 1 elemen mulai dari indeks 1 ("Teh").
  Sisa menu saat ini: ["Kopi", "Roti", "Susu"]
- menu.slice(1, 3) -> Mengambil irisan array dari indeks 1 sampai sebelum indeks 3 ("Roti", "Susu"). Array asli tetap.
- menu.indexOf("Susu") -> Mengembalikan indeks dari "Susu", yaitu 2.
- menu.indexOf("Nasi") -> Karena tidak ada, mengembalikan -1.
- menu.includes("Kopi") -> Karena "Kopi" ada di array, mengembalikan true.
- menu[menu.length - 1] -> Mengambil elemen terakhir array (indeks 3 - 1 = indeks 2, yaitu "Susu"). [Catatan: di soal tertulis menu[menu.length 1] tanpa operator minus, yang jika dibaca JS bisa error atau undefined, diasumsikan menu[menu.length - 1]].

Hasil Asli:
Jus
Air
[ 'Kopi', 'Roti', 'Susu' ]
[ 'Roti', 'Susu' ]
2
-1
true
Susu
*/
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

// --- POTONGAN B ---
/*
Tebakan Output Potongan B:
- tambah(2, 3) mengembalikan nilai 5, disimpan ke variabel x. (x = 5)
- cetakTambah(2, 3) mencetak angka 5 ke console, tetapi fungsi ini TIDAK memiliki keyword `return`, sehingga mengembalikan `undefined`, disimpan ke variabel y. (y = undefined)
- console.log(x) -> 5
- console.log(y) -> undefined

Hasil Asli:
5
5
5
undefined
*/
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);


// --- POTONGAN C ---
/*
Tebakan Output Potongan C:
- hitungDiskonPersen(50000, 20) -> 50000 - (50000 * 20 / 100) = 50000 - 10000 = 40000.
- hitungDiskonPersen(50000) -> Karena parameter kedua menggunakan default parameter `persen = 10`, maka 50000 - (50000 * 10 / 100) = 50000 - 5000 = 45000.
- cekAngka(-5) -> Masuk ke kondisi `n < 0`, langsung bertemu `return "negatif"`. Baris `console.log` setelah return TIDAK AKAN PERNAH DIJALANKAN (unreachable code).
- cekAngka(5) -> Mengembalikan "bukan negatif".

Hasil Asli:
40000
45000
negatif
bukan negatif
*/
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?"); // Tidak muncul karena berada setelah return
  }
  return "bukan negatif";
}
console.log(cekAngka(-5));
console.log(cekAngka(5));


/*
--- JAWABAN PERTANYAAN LANGKAH 1 ---
1. Pada Potongan A, kenapa menu dan irisan isinya berbeda? Mana method yang mengubah array aslinya, dan mana yang tidak?
   - `menu` berisi array utama yang sudah dimodifikasi oleh method mutator (`push`, `unshift`, `pop`, `shift`, `splice`), sehingga elemen di dalamnya berubah.
   - `irisan` dibuat menggunakan method `slice()`, yang menyalin sebagian elemen dari array asli tanpa merusak atau mengubah array aslinya.
   - Method yang mengubah array asli (mutator): `push`, `unshift`, `pop`, `shift`, `splice`.
   - Method yang tidak mengubah array asli: `slice`, `indexOf`, `includes`.
2. Pada Potongan B, apa beda tambah dan cetakTambah? Kenapa y bernilai undefined?
   - `tambah` menggunakan `return` untuk mengembalikan hasil perhitungan keluar fungsi sehingga nilainya bisa disimpan ke variabel (`x`).
   - `cetakTambah` hanya menampilkan hasil lewat `console.log()` tanpa keyword `return`. Karena tidak ada nilai yang dikembalikan, fungsi secara otomatis mengembalikan `undefined`, sehingga variabel `y` bernilai `undefined`.
3. Pada Potongan C, kenapa hitungDiskonPersen(50000) tetap menghasilkan angka? Apakah baris console.log tercetak? Kenapa?
   - `hitungDiskonPersen(50000)` tetap menghasilkan angka (`45000`) karena menggunakan fitur *Default Parameter* di ES6 (`persen = 10`), sehingga argumen kedua otomatis bernilai 10 jika tidak diisi.
   - Baris `console.log("Baris ini muncul atau tidak?")` **tidak tercetak** sama sekali karena berada tepat di bawah perintah `return`. Di JavaScript, fungsi langsung berhenti dan keluar begitu perintah `return` dieksekusi.
*/


// ==========================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ==========================================

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: Gunakan push() untuk menambah elemen di akhir, bukan unshift() (yang menambah di awal)
daftarBelanja.push("Susu");

// FIX 2: Gunakan splice(1, 1) untuk menghapus 1 elemen pada indeks 1 ("Teh"), bukan slice()
daftarBelanja.splice(1, 1);

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.includes("Roti"); // FIX 3: Gunakan .includes() untuk mengecek keberadaan elemen, bukan indexOf() (yang menghasilkan angka indeks).

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length - 1]; // FIX 4: Tambahkan operator `- 1` pada length agar menunjuk indeks elemen terakhir dengan benar.

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100; // FIX 5: Tambahkan keyword `return` agar fungsi mengembalikan hasil perhitungan.
}

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
  return subtotal * 0.11; // FIX 6: Tambahkan keyword `return` (atau hapus kurung kurawal arrow function jika ingin implicit return).
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// FIX 7: Pindahkan deklarasi function/arrow function `hitungTotal` ke atas sebelum dipanggil (atau panggil setelah dideklarasikan) agar terhindar dari hoisting/ReferenceError.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
console.log(hitungTotal(80000, 8800));

/*
--- JAWABAN PERTANYAAN LANGKAH 2 ---
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing:
   - Kesalahan 1: Memakai `unshift` untuk menambah di akhir (seharusnya `push`).
   - Kesalahan 2: Memakai `slice` untuk menghapus data (seharusnya `splice`).
   - Kesalahan 3: Memakai `indexOf` untuk mengecek keberadaan nilai boolean (seharusnya `includes`).
   - Kesalahan 4: Kurang operator `- 1` pada pengambilan elemen terakhir array `[daftarBelanja.length]`.
   - Kesalahan 5: Kurang keyword `return` pada fungsi `hitungDiskon`.
   - Kesalahan 6: Kurang keyword `return` di dalam blok kurung kurawal arrow function `hitungPajak`.
   - Kesalahan 7: Memanggil fungsi `hitungTotal` sebelum variabel arrow function tersebut dideklarasikan.
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
   - Yang menyebabkan error di console adalah pemanggilan `hitungTotal` sebelum dideklarasikan (ReferenceError / Cannot access before initialization).
   - Yang tidak error namun hasilnya salah adalah pemakaian `unshift`, `slice`, `indexOf`, kurang `- 1` pada length, dan tidak adanya `return` (yang membuat output bernilai `undefined`).
3. Kenapa hitungDiskon dan hitungPajak sama-sama menghasilkan undefined, padahal cara menulisnya berbeda?
   - Karena kedua fungsi tersebut melakukan proses perhitungan tetapi **tidak mengembalikan nilai** (`return`). Dalam JavaScript, fungsi yang tidak memiliki `return` secara otomatis mengembalikan nilai `undefined`.
*/


// ==========================================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ==========================================

// Dua array paralel menu dan harga
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];

// Array keranjang belanja awal kosong
let kasirKeranjang = [];

// Fungsi untuk menambahkan item ke keranjang berdasarkan indeks menu
function kasirTambahItem(indeksMenu, jumlah) {
  let itemBaru = {
    nama: kasirNamaMenu[indeksMenu],
    hargaSatuan: kasirHargaMenu[indeksMenu],
    jumlah: jumlah,
    subtotal: kasirHargaMenu[indeksMenu] * jumlah
  };
  kasirKeranjang.push(itemBaru);
  console.log(`Berhasil menambahkan ${jumlah} ${kasirNamaMenu[indeksMenu]} ke keranjang.`);
}

// Fungsi untuk menghitung total belanja dari keranjang
function kasirHitungSubtotal() {
  let total = 0;
  for (let i = 0; i < kasirKeranjang.length; i++) {
    total += kasirKeranjang[i].subtotal;
  }
  return total;
}

// Arrow function untuk menghitung diskon khusus member (10%)
const kasirHitungDiskonMember = (subtotal, adalahMember) => {
  return adalahMember ? subtotal * 0.10 : 0;
};

// Arrow function untuk menghitung pajak 11%
const kasirHitungPajak = (subtotalSetelahDiskon) => subtotalSetelahDiskon * 0.11;

// Simulasi Transaksi Kasir
console.log("\n--- SIMULASI KASIR KEDAI SENJA ---");
kasirTambahItem(0, 2); // Beli 2 Kopi Susu (18000 * 2 = 36000)
kasirTambahItem(2, 1); // Beli 1 Roti Bakar (15000 * 1 = 15000)

let subtotalBelanja = kasirHitungSubtotal();
let diskonMember = kasirHitungDiskonMember(subtotalBelanja, true); // Status member: true
let subtotalSetelahDiskon = subtotalBelanja - diskonMember;
let pajakTransaksi = kasirHitungPajak(subtotalSetelahDiskon);
let totalAkhirBayar = subtotalSetelahDiskon + pajakTransaksi;

console.log(`Subtotal Belanja: Rp ${subtotalBelanja.toLocaleString('id-ID')}`);
console.log(`Diskon Member (10%): Rp ${diskonMember.toLocaleString('id-ID')}`);
console.log(`Pajak (11%): Rp ${pajakTransaksi.toLocaleString('id-ID')}`);
console.log(`Total Akhir Pembayaran: Rp ${totalAkhirBayar.toLocaleString('id-ID')}`);