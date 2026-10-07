1. Merge Conflict

Terjadi saat Git menemukan perubahan yang bertentangan pada bagian yang sama.

Dua orang mengedit baris yang sama.
Perubahan lokal dan remote bertabrakan.

Contoh: Andi mengubah warna <h1> menjadi merah, Budi menjadi biru pada baris yang sama.

2. Penanda Conflict
<<<<<<< HEAD → awal perubahan dari branch aktif.
======= → pemisah kedua perubahan.
>>>>>>> branch-teman → akhir perubahan dari branch teman.

b. Merah = branch aktif.
c. Biru = branch teman.

3. Menyelesaikan Conflict

VS Code:

Buka file konflik.
Pilih Accept Current/Incoming/Both.
Simpan.
git add.
Commit.

Manual:

Buka file.
Tentukan kode yang dipakai.
Hapus tanda conflict.
Simpan.
git add lalu commit.

VS Code lebih mudah karena menyediakan tombol penyelesaian conflict.

4. Setelah Conflict
git add .
git commit -m "Menyelesaikan merge conflict"
git status
git add → tandai konflik selesai.
git commit → simpan hasil merge.
git status → memastikan kondisi repo bersih.
5. git merge --abort

Membatalkan proses merge yang sedang konflik dan mengembalikan kondisi sebelum merge.

Dipakai jika konflik terlalu rumit dan ingin mengulang proses dengan cara lain.

6. Mengurangi Conflict
Sering pull → kode selalu terbaru.
Gunakan branch → pekerjaan terpisah.
Commit kecil dan jelas → perubahan mudah dilacak.
Komunikasi dengan tim → menghindari mengedit bagian yang sama.
7. Pesan Commit

Pesan jelas memudahkan memahami riwayat perubahan.

Buruk:

update
fix
perubahan

Baik:

Menambahkan halaman kontak
Memperbaiki tombol login
Mengubah warna navbar
8. Conventional Commits

Format:

tipe: deskripsi
feat → fitur baru → feat: menambahkan fitur login
fix → memperbaiki bug → fix: memperbaiki tombol login
docs → dokumentasi → docs: memperbarui README
style → perubahan tampilan/style → style: memperbaiki warna navbar
9. Commit Terbaik

Yang paling baik:

feat: menambahkan fitur pencarian produk di navbar

Karena menjelaskan jenis perubahan (feat) dan perubahan yang dilakukan.

10. .gitignore

File untuk menentukan file yang tidak perlu dilacak Git.

Contoh:

node_modules/ → terlalu besar dan bisa di-install ulang.
.env → bisa berisi data rahasia.
File log → tidak diperlukan dalam repository.
File hasil build → bisa dibuat ulang dari source.
11. Penamaan Branch

Format umum:

tipe/nama-perubahan

Contoh:

feature/login
fix/navbar-error
docs/readme

Lebih baik karena rapi, konsisten, dan mudah mengetahui tujuan branch.

12. HTML, CSS, JavaScript
HTML → struktur website.
CSS → tampilan/desain.
JavaScript → interaksi dan logika.
13. Lingkungan JavaScript
Browser → menjalankan JavaScript pada halaman web.
Node.js → menjalankan JavaScript di luar browser, misalnya untuk backend.
14. JavaScript vs ECMAScript
JavaScript = bahasa pemrograman yang implementasinya mengikuti standar ECMAScript.
ECMAScript (ES) = standar/spesifikasi yang menentukan fitur JavaScript.

Contoh lama:

var nama = "Andi";

Modern:

let nama = "Andi";

let adalah fitur JavaScript modern yang diperkenalkan dalam ES6.