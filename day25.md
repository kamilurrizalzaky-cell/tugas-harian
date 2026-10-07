1. Push & Pull
Push = mengirim perubahan dari komputer → GitHub.
Contoh: selesai mengerjakan fitur, lalu upload ke GitHub.
Pull = mengambil perubahan dari GitHub → komputer.
Contoh: mengambil perubahan yang dibuat teman.
2. git push

Fungsinya mengirim commit lokal ke repository GitHub.

a. -u → menghubungkan branch lokal dengan branch di GitHub.
b. Tanpa -u → push tetap bisa, tetapi harus menentukan branch tujuan.
c. Setelah -u → Git sudah tahu tujuan push, jadi cukup git push.
3. git clone vs git init
git clone → mengambil repository yang sudah ada dari GitHub ke komputer.
git init → membuat repository Git baru di folder lokal.
Setelah clone tidak perlu git init karena repository hasil clone sudah memiliki konfigurasi Git (.git).
4. git pull

Mengambil perubahan terbaru dari GitHub dan menggabungkannya ke repository lokal.

Penting dalam tim agar kode kita tidak ketinggalan.

Sebaiknya git pull:

Sebelum mulai mengerjakan proyek.
Sebelum melakukan push perubahan.
5. Alur kerja harian
git pull
# mengerjakan kode
git add .
git commit -m "pesan perubahan"
git push
pull → mengambil perubahan terbaru.
add → memilih perubahan yang akan disimpan.
commit → menyimpan perubahan secara lokal.
push → mengirim perubahan ke GitHub.
6. Fork

Fork = membuat salinan repository orang lain ke akun GitHub kita.

Digunakan untuk:

Berkontribusi ke proyek open source.
Mengembangkan proyek orang lain tanpa mengubah repository aslinya.

Fork = salinan di GitHub.
Clone = menyalin repository ke komputer.

7. Fork + Pull Request
Fork → buat salinan repo ke akun sendiri.
Clone → download repo ke komputer.
Branch → buat cabang untuk perubahan.
Edit + Commit → kerjakan dan simpan perubahan.
Push → kirim branch ke GitHub.
Pull Request → meminta pemilik repo memeriksa dan menggabungkan perubahan.
8. Pull Request

PR adalah permintaan untuk menggabungkan perubahan dari branch kita ke branch utama.

Keuntungannya:

Kode bisa direview oleh anggota tim.
Kesalahan bisa ditemukan sebelum merge.
9. Kasus Andi & Budi

a. Push Budi kemungkinan ditolak karena GitHub sudah punya perubahan baru dari Andi.

b. Budi belum mengambil perubahan Andi dengan git pull.

c. Sebelum mengedit, Budi sebaiknya menjalankan:

git pull

d. Urutannya:

git pull
# edit style.css
git add style.css
git commit -m "Memperbarui style"
git push
10. Studi Kasus

a. git clone mengambil seluruh repository GitHub ke komputer.

b. Branch dibuat agar perubahan bug tidak langsung mengganggu main.

c. git push origin perbaikan-bug berarti mengirim branch perbaikan-bug ke GitHub.

d. Di GitHub, buat Pull Request untuk meminta perubahan digabungkan ke main.

e. Jika diminta revisi:

# perbaiki kode
git add .
git commit -m "Memperbaiki revisi"
git push

PR yang sama akan ikut diperbarui.