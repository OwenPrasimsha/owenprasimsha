---
description: Tambahkan motion sesuai docs/design.md ke homepage yang sudah jadi
---

Baca CLAUDE.md dan bagian Motion di docs/design.md.

Tambahkan motion yang diizinkan ke homepage: $ARGUMENTS
(contoh: "reveal hero, reveal scroll, ticker, hover gambar card")

1. Tulis rencana dulu: elemen mana yang dianimasikan, teknik (CSS atau JS ringan),
   durasi dan easing. Tunggu persetujuan saya.
2. Implementasi hanya dengan CSS dan JavaScript ringan, tanpa library.
3. Satu pola reveal yang konsisten untuk semua section.
4. Hormati prefers-reduced-motion.
5. Jangan mengubah layout, teks, atau warna.
6. Setelah selesai: screenshot dengan Playwright (390px dan 1440px) untuk memastikan
   layout tidak rusak. Laporkan juga apa yang tidak bisa dicek lewat screenshot
   (gerakan harus saya lihat sendiri di browser).
   Berhenti setelah selesai.
