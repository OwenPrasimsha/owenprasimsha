# Starter

## Sekali saja (membuat template)
1. Buat folder, salin isi starter ini, `git init`.
2. Buka `claude`, jalankan `/0-setup`.
3. Setelah jalan, commit dan simpan sebagai template (GitHub template repo).

## Tiap client
1. Salin template jadi folder baru.
2. Isi docs/brief.md, docs/content.md, taruh screenshot di docs/references/.
3. Urutan: /1-design-direction -> /2-home-variants -> /3-components
   -> /4-page (per halaman) -> /5-cms -> /6-qa
4. Sebelum tiap langkah: /clear. Setelah tiap langkah: review, koreksi, git commit.

## Situs 1 halaman (mis. portfolio pribadi)
- Langkah 2 tetap berguna (pilih layout), langkah 4 cukup sekali: /4-page beranda.
- Koleksi tanpa halaman detail: Keystatic tetap butuh slug field (pakai title), tapi tidak perlu route detail.
- Contoh: /5-cms koleksi portfolio (judul, kategori, tahun, gambar, deskripsi singkat, link opsional), teks hero, kontak
