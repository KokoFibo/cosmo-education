# Cosmo Education (Astro)

Situs konsultan pendidikan luar negeri, dibangun dari desain Stitch "Academic Prestige Modern".

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Struktur
- `src/pages/`: index (Beranda), destinasi-studi, layanan-bimbingan, beasiswa-biaya
- `src/layouts/Layout.astro`: head, font, skrip tema, Header, Footer
- `src/components/`: Header (menu desktop, drawer mobile, tombol tema) dan Footer
- `src/styles/global.css`: token warna tema terang dan gelap (variabel CSS)
- `tailwind.config.mjs`: tipografi, spacing, radius, dan warna dari DESIGN.md

## Catatan
- Tema gelap memakai warna dari "Dark Edition"; tombol di header menyimpan pilihan di localStorage.
- Gambar masih memakai URL asli dari ekspor Stitch (googleusercontent). Untuk produksi, unduh dan taruh di `public/images/`.
- Menu "Acara & Edu Fair" dan "Tentang Kami" belum punya desain halaman, jadi link-nya masih `#`.
