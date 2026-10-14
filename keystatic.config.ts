import { config, fields, collection, singleton } from '@keystatic/core';

// Teks dua bahasa: setiap field berisi { en, id }.
const t = (label: string, multiline = false) =>
  fields.object(
    {
      en: fields.text({ label: 'EN', multiline }),
      id: fields.text({ label: 'ID', multiline }),
    },
    { label, layout: [6, 6] },
  );
const tList = (label: string) =>
  fields.object(
    {
      en: fields.array(fields.text({ label: 'EN' }), { label: 'EN', itemLabel: (p) => p.value }),
      id: fields.array(fields.text({ label: 'ID' }), { label: 'ID', itemLabel: (p) => p.value }),
    },
    { label },
  );

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Owen Prasimsha' },
  },
  collections: {
    portfolio: collection({
      label: 'Portfolio',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { data: 'yaml' },
      columns: ['title', 'year'],
      schema: {
        title: fields.slug({ name: { label: 'Judul' } }),
        cover: fields.image({
          label: 'Gambar',
          directory: 'src/assets/portfolio',
          publicPath: '/src/assets/portfolio/',
          validation: { isRequired: true },
        }),
        category: t('Kategori'),
        year: fields.text({ label: 'Tahun' }),
        description: t('Deskripsi singkat', true),
        link: fields.url({ label: 'Link eksternal' }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Homepage',
      path: 'src/content/home',
      format: { data: 'yaml' },
      schema: {
        seo: fields.object({ title: t('Meta title'), description: t('Meta description', true) }, { label: 'SEO (meta)' }),
        nav: fields.object(
          { work: t('Work'), about: t('About'), services: t('Services'), contact: t('Contact') },
          { label: 'Header / navigasi' },
        ),
        hero: fields.object(
          {
            title: fields.text({ label: 'Judul' }),
            role: t('Peran'),
            subtitle: t('Subjudul', true),
            button: t('Tombol'),
          },
          { label: 'Hero' },
        ),
        skill: fields.object(
          {
            label: t('Label section'),
            groups: fields.array(fields.object({ label: t('Nama kelompok'), items: tList('Daftar') }), {
              label: 'Kelompok',
              itemLabel: (p) => p.fields.label.fields.en.value,
            }),
          },
          { label: 'Skill' },
        ),
        selected: fields.object(
          {
            label: t('Label section'),
            heading: t('Judul'),
            intro: t('Penjelasan singkat', true),
            linkLabel: t('Label tautan proyek'),
            cursorLabel: t('Label kursor saat hover card'),
          },
          { label: 'Selected projects' },
        ),
        moreWork: fields.object({ label: t('Judul section') }, { label: 'Portfolio (slider)' }),
        about: fields.object({ label: t('Label section'), text: t('Teks', true) }, { label: 'Tentang' }),
        services: fields.object(
          {
            label: t('Label section'),
            items: fields.array(
              fields.object({
                title: t('Judul'),
                text: t('Deskripsi', true),
                tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tag', itemLabel: (p) => p.value }),
              }),
              { label: 'Layanan', itemLabel: (p) => p.fields.title.fields.en.value },
            ),
          },
          { label: 'Layanan' },
        ),
        cta: fields.object(
          { label: t('Label section'), title: t('Judul'), text: t('Teks'), whatsapp: t('Tombol WhatsApp'), email: t('Tombol Email') },
          { label: 'CTA' },
        ),
        contact: fields.object(
          {
            email: fields.text({ label: 'Email' }),
            phone: fields.text({ label: 'WhatsApp (tampilan)' }),
            whatsappUrl: fields.url({ label: 'WhatsApp (tautan)' }),
            location: t('Lokasi'),
            linkedin: fields.url({ label: 'LinkedIn' }),
            github: fields.url({ label: 'GitHub' }),
          },
          { label: 'Kontak' },
        ),
        footer: fields.object({ backToTop: t('Kembali ke atas') }, { label: 'Footer' }),
      },
    }),
  },
});
