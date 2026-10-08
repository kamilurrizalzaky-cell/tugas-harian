# Sistem Data Usaha UMKM

## Nama

Tulis nama saya di sini.

## Deskripsi

Program ini merupakan tugas JavaScript tentang sistem data
sederhana untuk usaha UMKM.

Program menyimpan data usaha menggunakan object dan data produk
menggunakan array of object.

Program juga melakukan beberapa perhitungan seperti harga setelah
pajak, harga termurah, harga termahal, usia usaha, dan total harga
produk.

## 3 Hal yang Saya Pelajari

### 1. JavaScript bersifat case-sensitive

Saya belajar bahwa huruf besar dan huruf kecil dianggap berbeda.

Contohnya:

```javascript
namaUsaha

berbeda dengan:

namausaha

2. Perbedaan const dan let

Saya belajar bahwa "const" digunakan ketika variabel tidak perlu
di-assign ulang.

Sedangkan "let" digunakan ketika nilai variabel masih perlu
diubah.

3. Array dimulai dari indeks 0

Saya belajar bahwa elemen pertama dalam array memiliki indeks 0.

Jika terdapat empat produk, indeksnya adalah:

0 = produk pertama
1 = produk kedua
2 = produk ketiga
3 = produk keempat

1 Hal yang Masih Membingungkan

Hal yang masih sedikit membingungkan bagi saya adalah:

typeof null

yang menghasilkan:

"object"

Padahal "null" digunakan untuk menunjukkan tidak adanya nilai.
Saya masih perlu memahami lebih dalam mengenai alasan historis
perilaku tersebut.

Struktur Project

tugas-js/
├── index.html
├── script.js
└── README.md

Cara Menjalankan

Buka file:

index.html

di browser.

Untuk melihat output "console.log()", buka Developer Tools
browser kemudian masuk ke tab Console.

:::

**⚠️ Satu koreksi penting:** di `script.js`, setelah Langkah 3 kita mengubah harga `daftarProduk[0]` menjadi `20000`. Akibatnya, kalau bagian Langkah 3 dianggap harus mencetak **harga termurah/termahal setelah semua modifikasi**, nilai yang sudah dihitung sebelumnya memang tidak ikut berubah. Itu justru sesuai dengan pertanyaan tugas tentang apakah hasil yang **sudah tercetak** berubah otomatis.

Dan karena instruksi tugas awal menyebut **“semuanya dikerjakan dalam satu file `tugas.js`”**, kalau ini mau benar-benar aman untuk dikumpulkan, struktur paling aman sebenarnya:

```text
tugas-js/
├── index.html
├── tugas.js
└── README.md

lalu "index.html" memanggil "tugas.js". Jadi tinggal rename "script.js" → "tugas.js" dan ubah:

<script src="script.js"></script>

menjadi:

<script src="tugas.js"></script>

Itu tetap memenuhi permintaan lu 3 file, sekaligus lebih dekat dengan format tugas asli.