/** 
 * TUGAS DAY 30 - PENCABANGAN JAVASCRIPT
 * Nama: Zaky
 * Tanggal: 12 oktober 2026
 */

/*
tebakan output potongan A:
-if (0): falsy -> tidak tercetak
-if ("0"): truthy -> tercetak "2: masuk"
-if (""): falsy -> tidak tercetak
-if ([]): truthy -> tercetak "4: masuk"
-if (null): falsy -> tidak tercetak
-if (-1): truthy -> tercetak "6: masuk"

hasil asli:
2: masuk
4: masuk
6: masuk
*/

if (0) {
    console.log("1: masuk");
}
if ("0") {
    console.log("2: masuk");
}

if ("") {
    console.log("3: masuk");
}
if ([]) {
    console.log("4: masuk");
}
if (null) {
    console.log("5: masuk");
}
if (-1) {
    console.log("6: masuk");
}

// potongan B

/* 
tebakan output potongan B:
- Nilai belanja = 120000.
- karena pengecekan if...else if berjalan dari atas ke bawah, 120000 sudah memenuhi kondisi pertama.
- hasil asli: Diskon 5%
*/
let belanja = 120000;
if (belanja >= 25000) {
    console.log("Diskon 5%");
} else if (belanja >= 50000) {
    console.log("diskon 10%");
} else if (belanja >= 100000) {
    console.log("diskon 15%");
} else {
    console.log("Tidak ada promo");
}

// potongan C
/*
tebakan output potongan C:
- hari = "sabtu".
- masuk ke case "sabtu", mencetak "promo akhir pekan".
- karena tidak ada perintah break dibawah case "sabtu", kode terus mengeksekusi ke bawah ke case "minggu" dan mencetak "promo keluarga",lalu berhenti di break.
- hasil asli:
promo akhir pekan
promo keluarga
*/
let hari = "sabtu";
switch (hari) {
    case "jumat":
    console.log("Promo Jumat Berkah");
    case "sabtu":
    console.log("Promo Akhir Pekan");
    case "minggu":
        console.log("Promo Keluarga");
        break;
    default:
        console.log("Tidak ada promo");
}

/* 
jawaban langkah 1
1. di javascript, string `""` berisi karakter di dalamnya sehingga dianggap bernilai truthly. sedangkan `[]` secara tipe data adalah sebuah objek, dan semua objek di javascript selalu bernilai truthly meskipun isinya kosong.
2. karena struktur `if...else if` mengecek dari atas ke bawah dan langsung berhenti di kondisi pertama yang bernilai benar. angka 120000 sudah memenuhi syarat `>= 25000`. cara meperbaikinya adalah mengrurutkan kondisi dari nilai terbesar ke terkecil.
3. tercetak dua baris karena terjadi *fall-though*, yaitu kode terus mengeksekusi case di bawahnya ketika tidak ada perintah `break`. agar hanya satu baris yang tercatat, tambahkan `break;` di bawah case "sabtu".
*/

// langkah 2: perbaiki 5 kesalahan

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// fix 1: urutan dibalik dari terbesar ke terkecil agar 80000 masuk ke diskon 10%.
if (totalBelanja >= 100000) {
    diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
    diskon = totalBelanja * 0.05;
} else {
    diskon = 0;
}

// fix 2 & 3: perbaiki typo 'jenismember' menjadi "jenisMember" & tambah break agar diskon gold tidak tertimpa silver
switch (jenisMember) {
    case "gold":
        potonganMember = 5000;
        break;
    case "silver":
        potonganMember = 2000;
        break;
        default:
            potonganMember = 0;
}

// fix 4: ganti assignment (=) dengan pengecekan truthy/falsy 
if (!kodeVoucher) {
    console.log("Voucher tidak dipakai");
} else {
    console.log("Voucher dipakai:" + kodeVoucher);
}

let totalAkhir = totalBelanja - diskon - potonganMember;
let uangBayar = 67000;

// fix 5: ganti operator > menjadi >= agar uang pas terbaca lunas
if (uangBayar >= totalAkhir) {
    console.log("status: Lunas");
} else {
    console.log("status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

//  langkah 3: bikin kasir sendiri

const kasirNamaPelanggan = "asep";
const kasirTotalBelanja = 90000;
const kasirHari = "sabtu";
const kasirJenisMember = "silver";
const kasirKodeVoucher = "SENJA10";
const kasirUangBayar = 100000;

// 1. diskon belanja
let kasirDiskon = 0;
if (kasirTotalBelanja >= 100000) {
    kasirDiskon = kasirTotalBelanja * 0.25;
} else if (kasirTotalBelanja >= 50000) {
    kasirDiskon = kasirTotalBelanja * 0.10;
} else if (kasirTotalBelanja >= 35000) {
    kasirDiskon = kasirTotalBelanja * 0.05;
}

// 2. potongan member
let kasirPotonganMember = 0;
switch (kasirJenisMember) {
    case "gold": kasirPotonganMember = 5000; break;
    case "silver": kasirPotonganMember = 2000; break;
    default: kasirPotonganMember = 0;
}

// 3. promo hari sabtu dan minggu digabung tanpa break
let kasirPromoHari = 0;
switch (kasirHari) {
    case "jumat":
        kasirPromoHari = 3000;
        break;
        case "sabtu":
        case "minggu":
            kasirPromoHari = 5000;
            break;
            default:
                kasirPromoHari = 0;
}

// 4. validasi nama
if (!kasirNamaPelanggan) {
    console.log("Nama pelanggan belum diisi");
} else {
    console.log(`pelanggan: ${kasirNamaPelanggan}`);
}

// 5. validasi voucher 
let kasirPotonganVoucher = 0;
if (kasirKodeVoucher) {
    kasirPotonganVoucher = 2000;
    console.log(`voucher dipakai: ${kasirKodeVoucher}`);
}

//  6. hitung total akhir
let kasirTotalAkhir = kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPromoHari -kasirPotonganVoucher;
console.log(`total akhir: Rp ${kasirTotalAkhir.toLocaleString(`id-ID`)}`);

// 7. status pembayaran
if (kasirUangBayar > kasirTotalAkhir) {
    let kembalian = kasirUangBayar - kasirTotalAkhir;
    console.log(`Status: lunas (kembalian: Rp ${kembalian.toLocaleString(`id-ID`)})`);
} else if (kasirUangBayar === kasirTotalAkhir) {
    console.log("Status: lunas (uang pas)");
} else {
    let kurang = kasirTotalAkhir - kasirUangBayar;
    console.log(`Status: kurang (kekurangan: Rp ${kurang.toLocaleString(`id-ID`)})`);
}