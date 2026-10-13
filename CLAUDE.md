# Aturan Proyek (tetap, berlaku untuk semua client)

## Peran
Kamu membangun website statis kecil (maks 5 halaman) untuk client. Saya art director,
kamu eksekutor. Jangan mengambil keputusan desain di luar `docs/design.md`.

## Stack (terkunci)
- Astro (halaman statis), Tailwind, Keystatic (CMS), deploy ke Vercel.
- Dilarang menambah library tanpa izin saya. Tanyakan dulu.
- Untuk detail setup/adapter/versi, cek dokumentasi resmi terbaru, jangan mengandalkan ingatan.

## Sumber kebenaran
- `docs/brief.md`: tujuan dan karakter bisnis.
- `docs/design.md`: palet, font, spacing, gaya. Wajib dibaca sebelum membuat UI apa pun.
- `docs/content.md`: satu-satunya sumber teks.
- `docs/references/`: screenshot referensi.

## Aturan desain
- Warna, font, spacing HANYA dari tokens di `design.md` / konfigurasi Tailwind. Tidak boleh hardcode.
- Dilarang menambah section, efek, animasi, atau dekorasi yang tidak ada di brief atau desain.
- Dilarang: gradient ungu-biru default, emoji sebagai dekorasi, grid tiga kartu ikon generik,
  stok foto palsu, glassmorphism tanpa alasan, hero generik "centered title + 2 tombol" kecuali dipilih.
- Reuse komponen yang sudah ada sebelum membuat yang baru.

## Aturan teks
- Teks hanya dari `content.md`. Kalau kurang, tulis placeholder jelas seperti `[TEKS: deskripsi layanan]`.
- Jangan mengarang klaim, angka, testimoni, atau nama.
- Hindari copy klise ("Solusi terbaik untuk Anda", "Elevate your...", "Welcome to...").

## Kualitas
- Mobile-first, semantic HTML, alt text pada gambar, kontras cukup.
- Gambar lewat `astro:assets`.
- Konten bilingual ID/EN disiapkan lewat Keystatic, tanpa mengubah tampilan.

## Cara kerja
- Kerjakan satu bagian per langkah, lalu BERHENTI dan tunggu review saya.
- Sebelum menyatakan halaman selesai: screenshot dengan Playwright di lebar 390px dan 1440px
  (hanya di akhir, bukan tiap edit), bandingkan dengan `design.md`, perbaiki selisihnya.
- Jangan commit sendiri kecuali diminta.

## Log pelajaran (tambah 1 baris tiap kesalahan berulang)
- (kosong)

## Aset (foto, gambar, logo)
- Aset situs ada di `src/assets/`: `src/assets/portfolio/` (gambar item portfolio),
  `src/assets/site/` (logo, foto umum, hero). Semua dipakai lewat `astro:assets`.
- `docs/references/` HANYA untuk screenshot inspirasi desain. Jangan dipakai sebagai gambar situs.
- Gambar yang diedit client lewat Keystatic disimpan di `src/assets/portfolio/` (atur `directory` dan `publicPath` di field image).
- Kalau aset belum ada: pakai placeholder polos (kotak netral dengan label `[FOTO: nama proyek]`),
  rasio sesuai desain. Dilarang memakai stok foto atau gambar generate untuk menggantikan karya asli.
- Saat menambahkan aset baru, beri nama deskriptif (`nama-proyek-cover.jpg`) dan tanyakan alt text-nya kepada saya.
- Animasi/efek berat (GSAP, WebGL, smooth scroll) tidak dipakai kecuali saya minta eksplisit.
