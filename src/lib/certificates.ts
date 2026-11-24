export interface Certificate {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  year: string;
  category: 'office' | 'data' | 'compliance' | 'academic';
  description: string;
  descriptionEn: string;
  image: string;
  badge: string;
  badgeEn: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "1",
    slug: "microsoft-excel-beginner-to-advanced",
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    titleEn: "Microsoft Excel - Excel from Beginner to Advanced 2026",
    issuer: "Udemy / Kyle Pew (2M+ Students), Office Newb",
    issuerEn: "Udemy / Kyle Pew (2M+ Students), Office Newb",
    year: "2026",
    category: "office",
    description: "Sertifikasi keahlian komprehensif Microsoft Excel 23 jam pembelajaran mencakup formula lanjutan (VLOOKUP, INDEX/MATCH, IF Bertingkat), Pivot Tables, Dashboarding dinamis, pemodelan data, hingga otomatisasi spreadsheet.",
    descriptionEn: "Comprehensive 23-hour professional Microsoft Excel certification covering advanced formulas (VLOOKUP, INDEX/MATCH, Nested IF), Pivot Tables, Dynamic Dashboards, Data Modeling, and Spreadsheet Automation.",
    image: "/certificates/cert-excel-advanced.jpg",
    badge: "23 Jam • Tingkat Lanjutan",
    badgeEn: "23 Hours • Advanced Level",
    credentialId: "UC-f273e4ec-7376-4666-a34d-9e78d3a0d93f",
    credentialUrl: "https://ude.my/UC-f273e4ec-7376-4666-a34d-9e78d3a0d93f",
    skills: ["Microsoft Excel Lanjutan", "VLOOKUP & Pivot Tables", "Pemodelan Data", "Otomasi Spreadsheet"],
  },
  {
    id: "2",
    slug: "microsoft-office-lkp-duta",
    title: "Sertifikat Pelatihan Microsoft Office (LKP DUTA)",
    titleEn: "Microsoft Office Program Certification — LKP DUTA",
    issuer: "Lembaga Kursus dan Pelatihan (LKP) DUTA",
    issuerEn: "Vocational Training Center (LKP) DUTA",
    year: "2026",
    category: "office",
    description: "Sertifikasi resmi kompetensi penguasaan paket aplikasi perkantoran terintegrasi: Microsoft Word untuk tata kelola dokumen & korespondensi surat, Microsoft Excel untuk pengolahan data, dan PowerPoint untuk pelaporan presentasi eksekutif.",
    descriptionEn: "Official vocational competency certification for integrated office suite mastery: Microsoft Word for document management & correspondence, Microsoft Excel for data processing, and PowerPoint for executive reporting.",
    image: "/certificates/cert-lkp-duta-office.jpg",
    badge: "DTA-26-04670 • Terverifikasi",
    badgeEn: "DTA-26-04670 • Verified",
    credentialId: "DTA-26-04670",
    skills: ["Administrasi Perkantoran", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
  {
    id: "3",
    slug: "microsoft-power-bi-desktop-business-intelligence",
    title: "Microsoft Power BI Desktop for Business Intelligence",
    titleEn: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Maven Analytics (Chris Dutton & Aaron Parry) / Udemy",
    issuerEn: "Maven Analytics (Chris Dutton & Aaron Parry) / Udemy",
    year: "2026",
    category: "data",
    description: "Sertifikasi 17 jam Business Intelligence dan visualisasi data interaktif. Menguasai alur data end-to-end: Power Query ETL, Data Modeling, pembuatan formula DAX terukur, dan perancangan Interactive Executive Dashboard.",
    descriptionEn: "Comprehensive 17-hour Business Intelligence and interactive data visualization certification. Covers end-to-end workflows: Power Query ETL, Data Modeling, DAX measures, and Executive Interactive Dashboards.",
    image: "/certificates/cert-power-bi.jpg",
    badge: "17 Jam • Business Intelligence",
    badgeEn: "17 Hours • Business Intelligence",
    credentialId: "UC-570ab904-b9ca-49b8-ad8c-08809c810fc9",
    credentialUrl: "https://ude.my/UC-570ab904-b9ca-49b8-ad8c-08809c810fc9",
    skills: ["Business Intelligence", "Power BI Desktop", "DAX Formulas", "Executive Dashboards", "Data Modeling"],
  },
  {
    id: "4",
    slug: "anti-money-laundering-kyc-compliance",
    title: "Anti-Money Laundering: AML, KYC & Compliance",
    titleEn: "Anti-Money Laundering Concepts: AML, KYC and Compliance",
    issuer: "GenMan Solutions / Udemy",
    issuerEn: "GenMan Solutions / Udemy",
    year: "2026",
    category: "compliance",
    description: "Sertifikasi pemahaman kepatuhan hukum dan regulasi operasional: prinsip Know Your Customer (KYC), Customer Due Diligence (CDD), identifikasi transaksi mencurigakan, mitigasi risiko keuangan, dan standar regulasi anti pencucian uang.",
    descriptionEn: "Compliance and operational regulatory certification covering Know Your Customer (KYC) standards, Customer Due Diligence (CDD), suspicious transaction identification, financial risk mitigation, and compliance frameworks.",
    image: "/certificates/cert-aml-kyc-compliance.jpg",
    badge: "Kepatuhan & Kontrol Risiko",
    badgeEn: "Compliance & Risk Control",
    credentialId: "UC-d176d46f-d831-4675-be6c-6d1281154264",
    credentialUrl: "https://ude.my/UC-d176d46f-d831-4675-be6c-6d1281154264",
    skills: ["KYC & Customer Verification", "AML Compliance", "Due Diligence", "Manajemen Risiko", "Kepatuhan Regulasi"],
  },
  {
    id: "5",
    slug: "ai-for-work-productivity",
    title: "AI For Work: 12 Ways to Do Better Work, Faster",
    titleEn: "AI For Work: 12 Ways to Do Better Work, Faster",
    issuer: "Diane Flynn & Jeremy Utley / Udemy",
    issuerEn: "Diane Flynn & Jeremy Utley / Udemy",
    year: "2026",
    category: "compliance",
    description: "Sertifikasi penerapan praktis kecerdasan buatan (AI) untuk akselerasi produktivitas kantor: penyusunan draft surat resmi, peringkasan laporan bervolume tebal, otomatisasi penulisan email bisnis, dan optimalisasi alur kerja harian.",
    descriptionEn: "Practical application of Artificial Intelligence (AI) to accelerate workplace productivity: drafting formal business correspondence, summarizing large reports, email automation, and streamlining administrative workflows.",
    image: "/certificates/cert-ai-for-work.jpg",
    badge: "Produktivitas AI Terverifikasi",
    badgeEn: "Verified AI Productivity",
    credentialId: "UC-dd4a8d8c-35c6-4ff8-9580-d89fd38f9d41",
    credentialUrl: "https://ude.my/UC-dd4a8d8c-35c6-4ff8-9580-d89fd38f9d41",
    skills: ["AI Workflow Automation", "Prompt Engineering", "Efisiensi Dokumen", "Penyusunan Laporan Cepat"],
  },
  {
    id: "6",
    slug: "ijazah-s1-pendidikan-bahasa-inggris",
    title: "Ijazah Sarjana (S1) Pendidikan Bahasa Inggris",
    titleEn: "Bachelor of Education (S1) in English Education",
    issuer: "Universitas Bengkulu",
    issuerEn: "University of Bengkulu",
    year: "2024",
    category: "academic",
    description: "Gelar Sarjana Pendidikan (S.Pd) dengan Indeks Prestasi Kumulatif (IPK) 3,77 dari skala 4,00 dengan predikat Sangat Memuaskan. Mempelajari komunikasi profesional, linguistik terapan, dan administrasi pendidikan.",
    descriptionEn: "Bachelor of Education (B.Ed) degree graduated with Academic Distinction (GPA: 3.77 / 4.00). Specialized in professional communication, applied linguistics, and educational administration.",
    image: "/certificates/ijazah-s1.jpg",
    badge: "IPK 3,77 (Sangat Memuaskan)",
    badgeEn: "GPA 3.77 (Academic Distinction)",
    skills: ["Komunikasi Bahasa Inggris", "Administrasi Dokumen", "Pedagogi & Pelatihan", "Analisis Teks"],
  },
  {
    id: "7",
    slug: "toefl-itp-english-proficiency",
    title: "Sertifikat Kemahiran Bahasa Inggris (TOEFL ITP)",
    titleEn: "Official English Language Proficiency (TOEFL ITP)",
    issuer: "IIEF / Educational Testing Service (ETS)",
    issuerEn: "IIEF / Educational Testing Service (ETS)",
    year: "2024",
    category: "academic",
    description: "Sertifikasi kemahiran bahasa Inggris standar internasional resmi. Memverifikasi kemampuan tingkat lanjut dalam pemahaman dokumen tertulis, tata bahasa bisnis, serta komunikasi formal perkantoran.",
    descriptionEn: "Official international standardized English proficiency certification. Verifies advanced competency in reading comprehension, business grammar, and formal corporate correspondence.",
    image: "/certificates/toefl-itp.jpg",
    badge: "CEFR C1 / Working Fluency",
    badgeEn: "CEFR C1 / Working Fluency",
    skills: ["Business English", "Korespondensi Internasional", "Grammar & Dokumen", "Komunikasi Lintas Budaya"],
  },
  {
    id: "8",
    slug: "sertifikat-pelatihan-kompetensi-blk",
    title: "Sertifikat Pelatihan Kompetensi Kerja — BLK Manna",
    titleEn: "Vocational Competency Training Certificate — BLK Manna",
    issuer: "Balai Latihan Kerja (Kementerian Ketenagakerjaan RI)",
    issuerEn: "Vocational Training Center (Ministry of Manpower RI)",
    year: "2023",
    category: "compliance",
    description: "Sertifikasi bukti kelulusan pelatihan berbasis kompetensi kerja, pemahaman kepatuhan Standar Operasional Prosedur (SOP), kedisiplinan kerja industri, serta standar Keselamatan dan Kesehatan Kerja (K3).",
    descriptionEn: "Certified vocational training completion emphasizing workplace operational discipline, strict Standard Operating Procedure (SOP) compliance, and Occupational Health & Safety (K3) standards.",
    image: "/certificates/sertifikat-blk.jpg",
    badge: "Sertifikasi Resmi Kemnaker",
    badgeEn: "Official Ministry Certification",
    skills: ["Kepatuhan Standar K3", "Penegakan SOP", "Disiplin Kerja Lapangan", "Manajemen Prosedur"],
  },
];

export function getCertificates(): Certificate[] {
  return certificates;
}
