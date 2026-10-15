// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// --- POTONGAN A ---
/*
Tebakan Output Potongan A:
- produk awal: { nama: "Kopi Susu", harga: 18000, stok: 10 }
- produk.harga = 20000 -> Harga berubah jadi 20000.
- produk.kategori = "minuman" -> Menambah properti baru kategori: "minuman".
- delete produk.stok -> Menghapus properti stok dari object.
- let kunci = "nama";
- console.log(produk.nama); -> "Kopi Susu"
- console.log(produk[kunci]); -> "Kopi Susu" (menggunakan bracket notation dengan variabel string)
- console.log(produk["harga"]); -> 20000
- console.log(produk.stok); -> undefined (karena sudah dihapus dengan delete)
- console.log("kategori" in produk); -> true (properti kategori ada)
- console.log("stok" in produk); -> false (properti stok sudah dihapus)
- console.log(Object.keys(produk)); -> [ 'nama', 'harga', 'kategori' ]
- console.log(Object.values(produk)); -> [ 'Kopi Susu', 20000, 'minuman' ]

Hasil Asli:
Kopi Susu
Kopi Susu
20000
undefined
true
false
[ 'nama', 'harga', 'kategori' ]
[ 'Kopi Susu', 20000, 'minuman' ]
*/
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));


// --- POTONGAN B ---
/*
Tebakan Output Potongan B:
- dompet awal: pemilik "Rina", saldo 50000.
- dompet.belanja(20000) -> saldo berkurang 20000 menjadi 30000, method me-return nilai sisa saldo (30000), disimpan ke variabel `sisa`.
- console.log(sisa); -> 30000
- dompet.cekSaldo(); -> mencetak "Rina: Rp 30000"
- dompet.belanja(10000) -> saldo berkurang 10000 menjadi 20000 (tidak disimpan ke variabel, tapi saldo object berubah).
- dompet.cekSaldo(); -> mencetak "Rina: Rp 20000"
- console.log(dompet.saldo); -> 20000

Hasil Asli:
30000
Rina: Rp 30000
Rina: Rp 20000
20000
*/
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);


// --- POTONGAN C ---
/*
Tebakan Output Potongan C:
- for...of pada array hari -> mencetak "Senin", lalu "Selasa".
- for...in pada array hari -> mencetak kunci/indeks array, yaitu "0" dan "1".
- for...in pada object kopi -> mencetak kunci properti beserta nilainya ("nama: Kopi", "harga: 18000").
- for...of pada string "Kopi" -> mencetak setiap huruf satu per baris ("K", "o", "p", "i").

Percobaan tambahan: for (let x of kopi) { console.log(x); }
Tebakan: Error, karena object biasa bersifat non-iterable (tidak bisa langsung di-loop dengan for...of).
Pesan error saat diaktifkan: TypeError: kopi is not iterable
*/
const hari = ["Senin", "Selasa"];
for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };
for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

// Baris percobaan:
// for (let x of kopi) { console.log(x); }
// Pesan error: TypeError: kopi is not iterable


/*
--- JAWABAN PERTANYAAN LANGKAH 1 ---
1. Pada Potongan A, apa beda produk.nama dan produk[kunci]? Kenapa produk.stok hasilnya undefined?
   - `produk.nama` menggunakan dot notation (titik) di mana nama kunci properti ditulis secara langsung secara statis.
   - `produk[kunci]` menggunakan bracket notation di mana nama kunci disimpan di dalam variabel (`kunci = "nama"`), sehingga bersifat dinamis.
   - `produk.stok` menghasilkan `undefined` karena properti tersebut telah dihapus sebelumnya menggunakan perintah `delete produk.stok`.
2. Pada Potongan B, kenapa dompet.saldo di akhir bernilai 20000, padahal belanja(10000) tidak disimpan ke variabel? Apa yang dirujuk oleh this?
   - `dompet.saldo` bernilai 20000 karena method `belanja(10000)` tetap memodifikasi secara langsung (*mutating*) nilai properti `saldo` di dalam object `dompet`, meskipun nilai kembaliannya tidak ditampung ke dalam variabel baru.
   - `this` merujuk pada object pemilik method itu sendiri (yaitu object `dompet`).
3. Pada Potongan C, kenapa for...in pada array menghasilkan 0 dan 1, bukan "Senin" dan "Selasa"? Kenapa for...of pada object kopi menghasilkan error?
   - `for...in` dirancang untuk mengiterasi **kunci (keys/indeks)** dari sebuah object atau array, bukan nilai di dalamnya. Pada array, indeksnya adalah `"0"` dan `"1"`.
   - `for...of` menghasilkan error karena object biasa di JavaScript tidak memiliki sifat *iterable* (tidak bisa diiterasi langsung secara sekuensial seperti array atau string).
*/

// langkah 2: perbaiki 7 kesalahan

const warung = {
    nama: "Warung Senja",
    saldoKas: 100000,
    
    tambahKas(jumlah) {
        this.saldoKas += jumlah;
    },

    ambilKas(jumlah) {
        this.saldoKas -= jumlah;
        return this.saldoKas;
    },
};

warung.tambahKas(50000);
console.assert;ongamepadconnected(warung.saldoKas);
console.log(warung.ambilKas(30000));

const kontak = { "no-wa": "08123"};
console.log(kontak["no-wa"]);

const akun = {nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

const menu = ["kopi", "teh", "roti"];
for (let item of menu) {
    console.log(item);
}

const info = { nama: "Warung Senja", kota: "yogyakarta" };
for (let kolom of info) {
    console.log(kolom + ": " + info[kolom]);
}

console.log(Object.keys(info));

/*
--- JAWABAN PERTANYAAN LANGKAH 2 ---
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing:
   - Kesalahan 1: Kurang `this.` pada `saldoKas += jumlah`, diperbaiki dengan menambah `this.saldoKas`.
   - Kesalahan 2: Method `ambilKas` tidak mengembalikan nilai, diperbaiki dengan menambahkan `return this.saldoKas`.
   - Kesalahan 3: Mengakses key berkarakter `-` dengan dot notation, diperbaiki memakai bracket notation `kontak["no-wa"]`.
   - Kesalahan 4: Menghapus properti dengan mengisi `undefined`, diperbaiki menggunakan operator `delete`.
   - Kesalahan 5: Memakai `for...in` untuk array, diperbaiki memakai `for...of`.
   - Kesalahan 6: Memakai `for...of` untuk object, diperbaiki memakai `for...in`.
   - Kesalahan 7: Penulisan method `Object.key` yang keliru, diperbaiki menjadi `Object.keys`.
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
   - Yang menyebabkan error di console: Mengakses properti berkarakter `-` memakai dot notation (`kontak.no-wa`) dan kesalahan nama method `Object.key` (TypeError).
   - Yang tidak error tetapi hasilnya salah: Kurangnya `this.` (menyebabkan ReferenceError/variabel global), tidak adanya `return` pada method (hasil `undefined`), penggunaan `undefined` alih-alih `delete`, serta tertukarnya penggunaan `for...in` dan `for...of`.
3. Kenapa akun.kataSandi = undefined tidak sama dengan delete akun.kataSandi? Tunjukkan bedanya memakai in.
   - `akun.kataSandi = undefined` hanya mengubah nilai propertinya menjadi kosong/undefined, tetapi **propertinya tetap ada** di dalam object.
   - `delete akun.kataSandi` **menghapus properti tersebut sepenuhnya** dari object.
   - Pembuktian dengan `in`:
     `"kataSandi" in akun` akan bernilai `true` jika diberi nilai `undefined`, tetapi bernilai `false` jika propertinya dihapus dengan `delete`.
*/