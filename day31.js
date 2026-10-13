for(let i = 5; i >= 1; i--) {
    console.log(i)
}
console.log("mulai");
// output: 5, 4, 3, 2, 1, mulai!

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

let total = 0;

for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log("total:", total); // output: total: 55

const buah = ["apel", "jeruk", "Mangga", "Anggur"];

for (let i = 0; i < buah.length; i++) {
    console.log(i + 1 ".", buah[i]);
}
// 1. jeruk
// 2.jeruk
// 3.mangga
// 4.anggur

let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

let konfirmasi;

do {
  konfirmasi = prompt("Ketik 'ya' untuk melanjutkan:");
} while (konfirmasi !== "ya");

console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");

for (let i = 1; i <= 100; i++) {
  if (i === 10) {
    console.log(
      "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan.",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + i);
}
// Output:
// Memeriksa posisi ke-1
// Memeriksa posisi ke-2
// ... (hingga ke-9)
// Target ditemukan pada posisi ke-10. Pencarian dihentikan.

const nilai = [85, -5, 92, -10, 78, 60];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", nilai[i]);
}
// Output:
// Nilai valid:
// - 85
// - 92
// - 78
// - 60

const daftarNilai = [78, 45, 92, -3, 88, 55, 100, 0, 67];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
// Output:
// Nilai tidak valid dilewati: -3
// ---
// Total data    : 9
// Data valid    : 8
// Data tidak valid: 1
// Rata-rata     : 65.63
