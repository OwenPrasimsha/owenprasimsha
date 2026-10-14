# Brief Client

## Bisnis

- Nama: Owen Prasimsha (portfolio pribadi)
- Bisnis apa: Website portfolio pribadi untuk dibagikan ke calon klien dan perekrut sebagai freelancer web designer/developer. Spesialisasi: WordPress dan Elementor.
- Lokasi / area layanan: Indonesia, bekerja remote untuk klien dalam dan luar negeri.
- apa yang membuat saya berbeda dari freelancer WordPress/Elementor lain? (contoh: cepat, rapi, komunikasi jelas, hasil tidak terlihat seperti template)

## Target pelanggan

- Siapa, usia, kebiasaan:
- Agensi dan perusahaan di dalam dan luar negeri yang membutuhkan developer WordPress/Elementor.
- Pengunjung biasanya menilai cepat (beberapa detik), jadi hero dan portfolio harus langsung meyakinkan.

## Tujuan utama situs (pilih satu yang utama)

- [ ] Telepon [this] WhatsApp [ ] Booking [ ] Lihat menu/harga [ ] Lainnya:
- Sekunder via email : owenprasimsha84@gmail.com
- no WA 081227418327

## 5 halaman

1. Homepage saja (satu halaman, tanpa halaman detail).

urutan section mungkin mirip2 reference

- Header
- hero
- skill
- Selected projects
- Projects or Portfolio more simple image2 only slider similar to the reference
- Tntang saya
- what to do or service
- CTA ( Let's Talk text like refernce )
- Footer

## Karakter brand (3-5 kata sifat, dan yang BUKAN)

Ya: tenang dan percaya diri, rapi, banyak ruang kosong, tipografi yang tegas, modern tapi tidak ramai.
Perumpamaan: seperti studio desain kecil yang teliti, bukan agensi besar yang mengejar kesan mewah.
Bukan: template ThemeForest/Elementor kit, gradient dan neon, penuh badge skill atau bar persentase, kesan murahan, tata letak yang terlihat biasa.

## Referensi yang disuka (file di docs/references/ + alasan)

- ref1.png:

## Motion

Referensi: https://mikewilcockdesign.com/ Yang saya suka: animasi interaktif saat hover, padahal desainnya sederhana.

Detail:

Yang bergerak: hover pada card portfolio, link menu/navigasi, tombol (termasuk kontak), dan gambar portfolio; reveal hero saat halaman dibuka; reveal saat scroll dengan satu pola konsisten; kursor custom yang berubah konteks; tombol magnetik; roll pada link; pin slider More work (GSAP, diizinkan).
Gerakan halus dan singkat, tidak mengganggu pembacaan, menghormati prefers-reduced-motion.
Yang dihindari: parallax berat, scroll-jacking (kecuali pin More work), animasi berulang tanpa henti, ticker/marquee.
Aturan: layout dan komponen dibangun dulu tanpa animasi. Animasi ditambahkan di langkah terpisah, CSS dulu, JS ringan tanpa library. Library animasi hanya dengan izin eksplisit. Detail durasi/easing di docs/design.md bagian Motion.
Untuk menyelidiki teknik animasi dari URL referensi: hanya jenis motion di atas, jangan menyalin kode.

## Referensi yang tidak disuka (+ alasan)

## Warna/logo yang sudah ada (jika ada)

Belum ada warna atau logo. Pakai wordmark teks "Owen Prasimsha". Jangan membuat logo.
Palet diputuskan di /1-design-direction.

## Bahasa

- [ ] ID [ ] EN [this] ID + EN

Semua teks ditulis dalam dua bahasa dan bisa diedit di CMS.

## Bagian yang boleh diedit client (untuk langkah CMS)

Homepage (singleton): semua section (hero, layanan, tentang, kontak), ID dan EN.
Koleksi portfolio, terpisah dari homepage, tanpa halaman detail. Field: judul, gambar, kategori, tahun, deskripsi singkat, link eksternal. Homepage membaca koleksi ini untuk menampilkan card.
Tidak ada blog atau field rich text (Markdoc) di luar daftar ini.

## Catatan lain

-Situs ini statis, satu halaman, dan di-deploy ke Vercel dengan Keystatic Cloud.
Teks asli ada di docs/content.md. Jangan mengarang klaim, angka, atau testimoni.

## Aset yang sudah ada

- Folder tujuan: src/assets/portfolio/ (karya) ada 3 foto buat image portfolio ntar, src/assets/site/ (logo, foto umum)
- Daftar file + keterangan (nama proyek, kategori, tahun):
-
- Yang belum ada (pakai placeholder dulu):
