# Design Direction — Owen Prasimsha

Dasar keputusan: `docs/brief.md` (kata sifat brand: **tenang & percaya diri, rapi, banyak ruang kosong, tipografi tegas, modern tapi tidak ramai**; perumpamaan **studio desain kecil yang teliti**) dan `docs/references/ref1.png` (mikewilcockdesign.com).

Status: palet A dan 2 font sudah disetujui.

---

## 1. Palet warna (5)

**Dipilih: Opsi A — Gelap hangat**

| Token | Hex | Fungsi | Dasar |
|---|---|---|---|
| `ink` | `#141413` | Latar utama | ref1: latar hampir hitam; dibuat sedikit hangat agar "tenang", bukan neon/tech |
| `paper` | `#EDEAE3` | Teks utama, heading besar | ref1: heading off-white, bukan putih murni → kesan rapi & tidak silau |
| `stone` | `#8A877F` | Teks sekunder, label, nomor | ref1: label kecil abu; kontras ±5:1 di atas `ink` (lolos AA teks kecil) |
| `line` | `#2A2926` | Garis pemisah, border card | ref1: daftar Selected Work dipisah garis tipis |
| `signal` | `#D8F45A` | Aksen tunggal: tombol kontak, hover link | ref1 memakai satu aksen (biru) hanya di tombol & link; brief menolak "gradient dan neon", jadi aksen ini dipakai **hanya** di elemen interaktif, tidak pernah sebagai latar besar |

---

## 2. Font

- **Heading: Archivo** (Google Fonts, variable, sumbu `wdth` 62–125, berat 100–900).
  Dasar: ref1 memakai grotesk tebal yang sangat besar ("MIKE WILCOCK", "LET'S TALK") → brief "tipografi yang tegas". Archivo dipakai di `wdth 75–85` + berat 800 untuk display, sehingga tidak terlihat seperti Inter/Montserrat default template Elementor.
- **Body: Geist** (Google Fonts, variable).
  Dasar: "modern tapi tidak ramai"; netral, rapat, mudah dibaca di ukuran kecil, dan belum identik dengan kit ThemeForest.

**Label kecil:** tanpa font ketiga. Label memakai Geist 500, uppercase, tracking `0.08em` (pengganti mono di ref1).

---

## 3. Skala tipografi (mobile → desktop, `clamp`)

| Token | Ukuran | Font / berat / line-height | Pemakaian |
|---|---|---|---|
| `display` | clamp(3.5rem, 15vw, 11rem) | Archivo 800, wdth 80, lh 0.88, tracking -0.02em, uppercase | Nama di hero, "LET'S TALK" |
| `h1` | clamp(2.25rem, 6vw, 4.5rem) | Archivo 700, wdth 85, lh 1.0 | Judul proyek di Selected Projects |
| `h2` | clamp(1.75rem, 4vw, 3rem) | Archivo 600, lh 1.1 | Paragraf besar "Tentang saya" |
| `h3` | 1.375rem | Archivo 600, lh 1.2 | Judul layanan |
| `body` | 1rem (16px) | Geist 400, lh 1.6 | Teks umum |
| `small` | 0.875rem | Geist 400, lh 1.5 | Deskripsi layanan, meta proyek |
| `label` | 0.6875rem (11px) | Geist 500, uppercase, tracking 0.08em | Label section, nomor, tahun |

Dasar: ref1 memakai kontras ekstrem antara display raksasa dan label sangat kecil — itulah yang membuat desain sederhana terasa percaya diri.

## 4. Skala spacing (basis 4px)

`1=4 · 2=8 · 3=12 · 4=16 · 6=24 · 8=32 · 12=48 · 16=64 · 24=96 · 32=128 · 48=192`

- Gutter samping: 16px (mobile), 32px (desktop). Max width konten: 1440px.
- Jarak antar section: `24` (mobile) / `48` (desktop). Dasar: brief "banyak ruang kosong"; ref1 memberi jarak sangat lebar antara "Hello" dan "What I do".
- Grid 12 kolom desktop, 4 kolom mobile.

---

## 5. Gaya komponen

- **Tombol utama (WhatsApp/kontak):** pill (`radius 999px`), latar `signal`, teks `ink`, label uppercase 11–12px, tinggi 40px, panah `→` di kanan. Dasar: ref1 "START A PROJECT" & "SEE THE WORK".
- **Tombol sekunder:** pill outline 1px `line`/`paper`, latar transparan.
- **Sudut:** card & gambar `radius 2px` (hampir siku) — "rapi", "studio teliti"; hanya tombol yang pill. Kontras ini disengaja.
- **Bayangan:** tidak ada. Kedalaman dibuat dengan garis 1px `line`. Dasar: ref1 datar sepenuhnya; brief menolak kesan "mewah".
- **Foto/gambar portfolio:** screenshot karya asli apa adanya, rasio **4:5** di slider (ref1 "Up close") dan **4:3** di preview Selected Projects. Tanpa filter, tanpa mockup perangkat palsu, tanpa overlay gradient. Caption kecil di bawah: `(01) NAMA PROYEK · KATEGORI`.
- **Placeholder:** kotak `line` dengan label `[FOTO: nama proyek]` di tengah, rasio sama.
- **Garis:** semua daftar (proyek, layanan) dipisah border 1px `line`, seperti ref1.

---

## 6. Ide khas: "Spesifikasi build" yang terlihat

Owen adalah developer WordPress/Elementor — pekerjaannya adalah struktur yang rapi di balik layar. Jadi struktur itu **ditampilkan sebagai bahasa visual**:

- Setiap section dibuka label seperti anotasi build (Geist uppercase): `(02) SKILL`, `(03) SELECTED PROJECTS — 03`.
- Setiap card proyek memiliki baris meta seperti spec sheet: `WORDPRESS · ELEMENTOR · 2025 · LIVE ↗` (dari field kategori/tahun/link di CMS, bukan karangan).
- Saat hover pada card, garis tepi/grid tipis (`line` → `signal`) muncul membingkai elemen, seperti outline container di editor Elementor saat di-hover.

Dasar: brief meminta "hasil tidak terlihat seperti template" dan "studio desain kecil yang teliti"; ref1 sudah memakai label bernomor — kita mengubahnya menjadi metafora spesifik untuk keahlian Owen, bukan sekadar meniru. Ini juga menjawab motion brief (hover card) tanpa library: cukup CSS `outline`/`border-color` transition.

---

## 7. Gaya penulisan

- **Nada:** tenang, langsung, orang pertama ("saya"/"I"), kalimat pendek. Tidak menjual berlebihan. Dasar: "tenang dan percaya diri".
- Fakta konkret > kata sifat. Sebut alat dan hasil, bukan janji.
- Label section singkat, kata benda saja.
- Contoh nada (bukan copy final — teks final hanya dari `content.md`):
  - ID: "Saya membangun situs WordPress yang rapi di dalam dan di luar."
  - EN: "I build WordPress sites that are as tidy inside as they look outside."
  - CTA: "Ada proyek? Kirim pesan." / "Got a project? Send a message."
- Semua teks wajib ada versi ID dan EN dengan panjang serupa agar tata letak tidak berubah.

---

## 8. Yang dihindari (khusus Owen)

- Bar persentase skill, rating bintang, badge/logo teknologi berderet (brief: "penuh badge skill atau bar persentase"). Section Skill = daftar teks biasa.
- Tampilan Elementor kit / ThemeForest: hero split foto-kiri-teks-kanan, ikon bulat berwarna, counter "100+ projects".
- Gradient, neon glow, `signal` sebagai latar section besar.
- Mockup laptop/HP palsu di sekitar screenshot.
- Bayangan lembut + sudut membulat besar di card (kesan template SaaS).
- Angka atau klaim yang tidak ada di `content.md` (jumlah klien, tahun pengalaman, testimoni).
- Logo/ikon buatan — wordmark teks "Owen Prasimsha" saja, Archivo 700.
- Menyalin langsung ref1: ticker boleh (lihat bagian 9) tetapi tidak meniru ticker italic ref1 ("Build • Motion • Shopify"), dan tidak menyalin kode animasi.
- Parallax berat, scroll-jacking (scroll dibajak/diperlambat), animasi berulang tanpa henti (kecuali ticker, lihat bagian 9), dan kursor custom.

---

## 9. Motion

Dasar: brief bagian Motion (ref mikewilcockdesign.com: "animasi interaktif saat hover, padahal desainnya sederhana"; "gerakan halus dan singkat, tidak mengganggu pembacaan").

### Yang diizinkan
- **Hover:** card portfolio (garis tepi `line` → `signal`, lihat bagian 6), link navigasi, tombol (termasuk tombol kontak), gambar portfolio (zoom halus maks `scale(1.03)` di dalam bingkai).
- **Reveal hero:** sekali saat halaman dibuka. Wordmark/display dan teks hero muncul berurutan.
- **Reveal saat scroll:** satu pola untuk seluruh situs: `opacity 0 → 1` + `translateY(16px → 0)`. Diputar sekali per elemen, tanpa variasi arah atau efek lain.
- **Ticker:** satu baris teks berjalan horizontal, linear, berhenti saat di-hover.

### Durasi & easing
| Token | Nilai | Pemakaian |
|---|---|---|
| `duration-fast` | 150ms | Hover link, warna tombol |
| `duration-base` | 250ms | Hover card, gambar, border |
| `duration-reveal` | 600ms | Reveal hero & scroll |
| `stagger` | 80ms | Jeda antar elemen di reveal hero |
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Semua hover & reveal |
| `ease-linear` | `linear` | Ticker saja |

### Aksesibilitas
- Wajib `@media (prefers-reduced-motion: reduce)`: reveal dimatikan (konten langsung tampil), ticker berhenti (statis), hover hanya berubah warna tanpa gerak/scale.
- Konten tidak boleh tersembunyi kalau JS gagal: status awal "tersembunyi" hanya dipasang lewat class dari JS.

### Aturan teknis
- CSS lebih dulu (transition, `@keyframes`). JS ringan hanya untuk memicu reveal saat scroll (`IntersectionObserver`, tanpa library).
- Hanya animasikan `transform` dan `opacity` (plus `color`/`border-color` untuk hover).
- Tanpa library animasi (GSAP, Framer Motion, Lenis, dll.) kecuali ada izin eksplisit.
