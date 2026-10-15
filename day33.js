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

// LANGKAH 3: BIKIN KASIR SENDIRI
// ==========================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Espresso", kategori: "minuman", harga: 15000, stok: 8 },
    { nama: "Matcha Latte", kategori: "minuman", harga: 22000, stok: 5 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 6 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 25000, stok: 4 }
  ],
  keranjang: [],

  // 2. Method cariHarga
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama.toLowerCase() === namaMenu.toLowerCase()) {
        return item.harga;
      }
    }
    return 0;
  },

  // 3. Method tambahKeKeranjang
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama.toLowerCase() === namaMenu.toLowerCase()) {
        if (item.stok >= jumlah) {
          item.stok -= jumlah; // Kurangi stok
          this.keranjang.push({ nama: item.nama, jumlah: jumlah });
          return true;
        } else {
          return false; // Stok tidak cukup
        }
      }
    }
    return false; // Menu tidak ditemukan
  },

  // 4. Method hitungSubtotal
  hitungSubtotal() {
    let subtotal = 0;
    for (let pesanan of this.keranjang) {
      let hargaSatuan = this.cariHarga(pesanan.nama);
      subtotal += hargaSatuan * pesanan.jumlah;
    }
    return subtotal;
  },

  // 5. Method hitungDiskon
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    }
    return 0;
  },

  // 6. Method cetakStruk
  cetakStruk() {
    console.log(`=== STRUK PEMBAYARAN ${this.nama.toUpperCase()} ===`);
    console.log(`Kota: ${this.kota}`);
    console.log("Daftar Pesanan:");
    
    let nomor = 1;
    for (let pesanan of this.keranjang) {
      let harga = this.cariHarga(pesanan.nama);
      console.log(`${nomor}. ${pesanan.nama} (${pesanan.jumlah}x) - Rp ${harga.toLocaleString('id-ID')}`);
      nomor++;
    }

    let subtotal = this.hitungSubtotal();
    let diskon = this.hitungDiskon(subtotal);
    let setelahDiskon = subtotal - diskon;
    let pajak = setelahDiskon * 0.11;
    let total = setelahDiskon + pajak;

    console.log(`-----------------------------------`);
    console.log(`Subtotal : Rp ${subtotal.toLocaleString('id-ID')}`);
    console.log(`Diskon   : Rp ${diskon.toLocaleString('id-ID')}`);
    console.log(`Pajak 11%: Rp ${pajak.toLocaleString('id-ID')}`);
    console.log(`Total    : Rp ${total.toLocaleString('id-ID')}`);
    console.log(`===================================\n`);

    // Tambah total ke saldoKas
    this.saldoKas += total;
  }
};

// 7. Properti Dinamis "website"
let propWebsite = "website";
kasirKedai[propWebsite] = "www.kedaisenja.com";
console.log("Website ada dalam kedai?", "website" in kasirKedai);
console.log("URL Website:", kasirKedai.website);
delete kasirKedai.website;
console.log("Website masih ada setelah delete?", "website" in kasirKedai);

// 8. for...in untuk jamOperasional dan menu[0]
console.log("\n--- Jam Operasional ---");
for (let kunci in kasirKedai.jamOperasional) {
  console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}

console.log("\n--- Detail Menu Pertama ---");
for (let kunci in kasirKedai.menu[0]) {
  console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}

// 9. Object.keys dan Object.values dari jamOperasional
console.log("\nKeys Jam Operasional:", Object.keys(kasirKedai.jamOperasional));
console.log("Values Jam Operasional:", Object.values(kasirKedai.jamOperasional));

// 10. Hitung kemunculan huruf "a" kecil pada kasirKedai.nama ("Kedai Senja")
let jumlahHurufA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}
console.log(`Jumlah huruf 'a' kecil pada nama kedai: ${jumlahHurufA}`);


// --- PENGUJIAN KASUS GAGAL TAMBAH KE KERANJANG ---
console.log("\n--- Uji Kasus Gagal ---");
let gagalMenuTidakAda = kasirKedai.tambahKeKeranjang("Es Teh Manis", 1); // Menu tidak ada
let gagalStokKurang = kasirKedai.tambahKeKeranjang("Nasi Goreng", 10);   // Stok cuma 4
console.log("Uji menu tidak ada (harus false):", gagalMenuTidakAda);
console.log("Uji stok kurang (harus false):", gagalStokKurang);


// --- UJI 2 SKENARIO TRANSAKSI ---

// Skenario 1: Kopi Susu x3, Roti Bakar x2
kasirKedai.keranjang = []; // Reset keranjang
kasirKedai.tambahKeKeranjang("Kopi Susu", 3);
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.cetakStruk();

/*
// Skenario 1 Hasil:
// Subtotal : Rp 84.000 (Kopi 54k + Roti 30k)
// Diskon   : Rp 4.200 (5% dari 84k)
// Pajak 11%: Rp 8.778
// Total    : Rp 88.578
*/

// Skenario 2: Matcha Latte x3, Nasi Goreng x2
kasirKedai.keranjang = []; // Reset keranjang
kasirKedai.tambahKeKeranjang("Matcha Latte", 3);
kasirKedai.tambahKeKeranjang("Nasi Goreng", 2);
kasirKedai.cetakStruk();

/*
// Skenario 2 Hasil:
// Subtotal : Rp 116.000 (Matcha 66k + Nasi 50k)
// Diskon   : Rp 17.400 (15% dari 116k karena >= 100k)
// Pajak 11%: Rp 10.846
// Total    : Rp 97.446
*/


/*
--- JAWABAN PERTANYAAN LANGKAH 3 ---
1. Apa beda dot notation dan bracket notation? Beri contoh dari kodemu, dan jelaskan kapan bracket notation wajib dipakai.
   - Dot notation menggunakan titik (`kasirKedai.nama`) untuk mengakses properti statis yang namanya sudah diketahui pasti.
   - Bracket notation menggunakan tanda kurung siku (`kasirKedai["nama"]`) yang memungkinkan kita memakai variabel atau string yang dinamis.
   - Bracket notation **wajib dipakai** saat nama properti mengandung karakter khusus/spasi/tanda hubung (seperti `kontak["no-wa"]`) atau ketika nama propertinya disimpan di dalam variabel (seperti `kasirKedai[propWebsite]`).
2. Kenapa di dalam method kamu menulis this.saldoKas, bukan saldoKas? Apa yang terjadi jika kata this dihapus?
   - `this.saldoKas` digunakan untuk mengakses properti `saldoKas` yang berada di dalam ruang lingkup (*scope*) object itu sendiri.
   - Jika `this` dihapus, JavaScript akan mencari variabel lokal bernama `saldoKas` di dalam fungsi tersebut, yang tidak ditemukan dan memicu error `ReferenceError: saldoKas is not defined`.
3. Apa beda for...of dan for...in? Tunjuk satu tempat di kodemu yang memakai masing-masing, dan jelaskan kenapa yang satu tidak bisa ditukar dengan yang lain.
   - `for...of` digunakan untuk mengiterasi **nilai** dari struktur data yang bersifat *iterable* seperti Array atau String. Contoh di kode: `for (let item of this.menu)`.
   - `for...in` digunakan untuk mengiterasi **kunci (keys)** dari sebuah Object. Contoh di kode: `for (let kunci in kasirKedai.jamOperasional)`.
   - Keduanya tidak bisa ditukar karena object tidak memiliki elemen berurutan untuk `for...of`, sedangkan `for...in` pada array hanya akan mengembalikan indeks (string angka), bukan isi datanya.
4. Kenapa for...of pada kasirKedai (object) menghasilkan error, sedangkan pada string dan array tidak?
   - Karena object biasa di JavaScript secara bawaan tidak mengimplementasikan protokol *iterable* (tidak memiliki iterator internal). String dan array sudah memiliki iterator bawaan dari JavaScript sehingga mendukung `for...of`.
5. Apa beda Object.keys dan Object.values? Tunjuk hasilnya dari kodemu.
   - `Object.keys()` mengambil daftar **kunci (nama properti)** dari sebuah object dalam bentuk array. Contoh di kode: `Object.keys(kasirKedai.jamOperasional)` menghasilkan `[ 'buka', 'tutup' ]`.
   - `Object.values()` mengambil daftar **nilai (values)** dari sebuah object dalam bentuk array. Contoh di kode: `Object.values(kasirKedai.jamOperasional)` menghasilkan `[ '08:00', '21:00' ]`.
6. Kenapa cariHarga dan hitungSubtotal harus memakai return, sedangkan cetakStruk boleh tidak? Apa yang terjadi jika hitungSubtotal hanya memakai console.log?
   - `cariHarga` dan `hitungSubtotal` bertugas menghasilkan nilai kalkulasi yang harus **dikembalikan** agar bisa dipakai dan diolah lagi oleh fungsi lain di luarnya.
   - `cetakStruk` adalah fungsi prosedur yang tugas utamanya hanya mencetak teks ke console, sehingga tidak wajib me-return nilai.
   - Jika `hitungSubtotal` hanya memakai `console.log`, nilai subtotal tidak bisa disimpan ke variabel atau dipakai dalam perhitungan diskon dan pajak berikutnya, sehingga variabel perhitungan luar akan bernilai `undefined`.
*/