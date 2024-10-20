function cekKategoriUmur() {
    // Meminta input dari pengguna
    let umur = prompt("Masukkan umur Anda:");

    // Mengubah input menjadi tipe number
    umur = Number(umur);

    // Variabel untuk menyimpan hasil kategori
    let kategori;

    // Mengecek kategori umur berdasarkan input
    if (umur < 12) {
        kategori = "Anak-anak";
    } else if (umur >= 13 && umur <= 17) {
        kategori = "Remaja";
    } else if (umur >= 18 && umur <= 64) {
        kategori = "Dewasa";
    } else if (umur >= 65) {
        kategori = "Lansia";
    } else {
        kategori = "Input umur tidak valid";
    }

    // Menampilkan hasil di halaman
    document.body.innerHTML += `<p>Kategori umur Anda: ${kategori}</p>`;
}

// Memanggil fungsi untuk mengecek kategori umur saat halaman dimuat
cekKategoriUmur();

