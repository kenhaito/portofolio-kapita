import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  // --- DATA MATERI (UPDATED) ---
  const materials = [
    {
      id: 1,
      title: "10 Kekuatan Pendatar Dunia",
      category: "Materi",
      preview: "Konsep The World Is Flat menggambarkan perubahan besar tatanan global akibat kemajuan teknologi dan inovasi.",
      content: (
        <div>
          <div className="content-section">
            <h3>Penjelasan Konsep Dunia Datar</h3>
            <p>Konsep <em>The World Is Flat</em> diperkenalkan oleh Thomas L. Friedman untuk menggambarkan perubahan besar dalam tatanan global akibat kemajuan teknologi, inovasi, serta keterbukaan sistem ekonomi dan politik. Dunia yang sebelumnya terfragmentasi oleh batas geografis dan waktu kini menjadi semakin terhubung dan kompetitif. Dalam kondisi ini, individu, organisasi, dan negara memiliki peluang yang lebih setara untuk berpartisipasi dalam aktivitas global.</p>
            <p>Friedman menjelaskan bahwa dunia menjadi “datar” bukan karena satu faktor tunggal, melainkan akibat konvergensi berbagai peristiwa penting yang saling berkaitan. Konvergensi ini melibatkan aspek politik, perkembangan teknologi informasi, serta strategi perusahaan global yang memanfaatkan kemajuan digital untuk meningkatkan efisiensi dan kolaborasi lintas negara.</p>
          </div>

          <div className="content-section">
            <h3>Sepuluh Kekuatan Pendatar Dunia</h3>
            <ul className="detail-list">
              <li>
                <strong>Runtuhnya Tembok Berlin (1989)</strong><br/>
                Peristiwa ini menandai berakhirnya pembatasan ideologi dan keterbukaan sistem global.<br/>
                <em>Contoh:</em> Negara-negara Eropa Timur mulai terbuka terhadap perdagangan bebas dan teknologi global.
              </li>
              <li>
                <strong>Netscape dan Internet Publik</strong><br/>
                Netscape memungkinkan internet digunakan secara luas oleh masyarakat umum.<br/>
                <em>Contoh:</em> Munculnya website, email, dan platform digital yang dapat diakses oleh siapa saja.
              </li>
              <li>
                <strong>Workflow Software</strong><br/>
                Perangkat lunak yang memungkinkan sistem dan manusia bekerja sama secara terintegrasi lintas lokasi.<br/>
                <em>Contoh:</em> Sistem ERP yang menghubungkan data produksi, gudang, dan penjualan.
              </li>
              <li>
                <strong>Open Sourcing</strong><br/>
                Konsep pengembangan teknologi secara kolaboratif tanpa batas institusi atau negara.<br/>
                <em>Contoh:</em> Linux, Wikipedia, dan proyek open source di GitHub.
              </li>
              <li>
                <strong>Outsourcing</strong><br/>
                Pemindahan pekerjaan tertentu ke pihak lain yang lebih efisien dan kompeten.<br/>
                <em>Contoh:</em> Layanan customer service perusahaan internasional yang dikerjakan di India.
              </li>
              <li>
                <strong>Offshoring</strong><br/>
                Pemindahan lokasi produksi atau operasional ke negara lain.<br/>
                <em>Contoh:</em> Pabrik manufaktur dipindahkan ke negara dengan biaya produksi lebih rendah.
              </li>
              <li>
                <strong>Supply Chaining</strong><br/>
                Integrasi rantai pasok secara global untuk meningkatkan efisiensi distribusi.<br/>
                <em>Contoh:</em> Walmart mengelola stok dan distribusi lintas negara secara real-time.
              </li>
              <li>
                <strong>Insourcing</strong><br/>
                Pihak ketiga mengambil alih proses internal perusahaan.<br/>
                <em>Contoh:</em> UPS mengelola sistem logistik dan pengiriman perusahaan lain.
              </li>
              <li>
                <strong>In-forming</strong><br/>
                Akses informasi secara mandiri melalui mesin pencari dan internet.<br/>
                <em>Contoh:</em> Google digunakan untuk belajar, riset, dan pengambilan keputusan.
              </li>
              <li>
                <strong>The Steroids</strong><br/>
                Perkembangan teknologi digital, mobile, dan cloud yang mempercepat seluruh proses globalisasi.<br/>
                <em>Contoh:</em> Smartphone, aplikasi mobile, dan cloud computing.
              </li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Dampak Globalisasi Dunia Datar</h3>
            <p>Kesepuluh kekuatan pendatar dunia tersebut berdampak besar pada berbagai sektor seperti pendidikan, industri, dan pemerintahan. Dunia kerja menjadi semakin kompetitif dan menuntut kemampuan adaptasi serta pemanfaatan teknologi. Individu dituntut untuk terus mengembangkan kompetensi agar mampu bersaing di tingkat global.</p>
          </div>

          <div className="content-section highlight-box">
            <strong>Ringkasan:</strong> Sepuluh kekuatan pendatar dunia menunjukkan bagaimana konvergensi teknologi, politik, dan bisnis membentuk globalisasi modern yang saling terhubung dan kompetitif.
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Tugas Kapita Selekta",
      category: "Tugas",
      preview: "Tugas Kapita Selekta yang mencakup pemilihan kekuatan pendatar dunia, kompetensi program studi, judul skripsi dan kerja praktik.",
      content: (
        <div>
          <div className="content-section">
            <p>Halaman ini berisi pemenuhan tugas pada mata kuliah Kapita Selekta yang disusun berdasarkan keterkaitan antara teori globalisasi, kompetensi akademik, serta rencana pengembangan proyek akademik.</p>
          </div>

          <div className="content-section">
            <h3>1. Pemilihan Kekuatan Pendatar Dunia</h3>
            <p>Kekuatan pendatar dunia yang dipilih adalah perkembangan teknologi informasi dan digitalisasi. Pemilihan ini didasarkan pada relevansinya dengan perkembangan sistem informasi berbasis web dan aplikasi yang saat ini banyak digunakan di berbagai sektor, khususnya sektor agraris dan industri.</p>
          </div>

          <div className="content-section">
            <h3>2. Kompetensi Program Studi yang Relevan</h3>
            <p>Kompetensi yang dipilih adalah Rekayasa Perangkat Lunak (RPL). Kompetensi ini mencakup kemampuan analisis kebutuhan, perancangan sistem, pengembangan antarmuka pengguna (UI/UX), serta pengujian sistem.</p>
          </div>

          <div className="content-section">
            <h3>3. Judul Skripsi</h3>
            <div className="highlight-box">
                <p>Judul skripsi yang diajukan adalah:<br/>
                <strong>“Pengembangan Frontend Website Sistem Informasi Manajemen Produksi pada Peternakan Raman.”</strong></p>
                <p style={{marginTop:'10px'}}>Judul ini berfokus pada pengembangan antarmuka sistem informasi untuk mendukung pengelolaan data produksi peternakan secara digital.</p>
            </div>
          </div>

          <div className="content-section">
            <h3>4. Judul Kerja Praktik (KP)</h3>
            <div className="highlight-box">
                <p>Judul kerja praktik yang diajukan adalah:<br/>
                <strong>“Perancangan User Interface Website BASIS untuk Manajemen Peminjaman Barang di PT Semen Baturaja.”</strong></p>
                <p style={{marginTop:'10px'}}>Judul ini menitikberatkan pada perancangan UI yang efektif dan mudah digunakan oleh pengguna internal perusahaan.</p>
            </div>
          </div>

          <div className="content-section">
            <h3>5. Partisipasi Seminar Akademik</h3>
            <p>Sebagai bagian dari tugas, dilakukan partisipasi pada seminar akademik dengan menghadiri dan mencatat sepuluh rekan seminar beserta topik yang diangkat. Kegiatan ini bertujuan untuk menambah wawasan akademik serta memahami tren penelitian dan pengembangan sistem informasi.</p>
            
            {/* Tabel Data Rekan Seminar (Tetap disertakan agar tugas lengkap) */}
            <h4 style={{marginTop: '20px'}}>Data Seminar yang Dihadiri</h4>
            <div style={{overflowX: 'auto'}}>
                <table>
                  <thead>
                    <tr><th>No</th><th>Nama</th><th>Topik / Judul</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Renata Adisti P.</td><td>Deteksi Penyakit Mata (CNN)</td></tr>
                    <tr><td>2</td><td>Budi Cahyono</td><td>Absensi Face Recognition</td></tr>
                    <tr><td>3</td><td>Nur Annisa S.</td><td>App Android Face Recog.</td></tr>
                    <tr><td>4</td><td>Levian Dandra</td><td>API Django Face Recog.</td></tr>
                    <tr><td>5</td><td>M. Afif Rafi S.</td><td>Data Analytics Udara</td></tr>
                    <tr><td>6</td><td>Molinda Sari S.</td><td>FE Dashboard Perpus</td></tr>
                    <tr><td>7</td><td>Marselinus Heris</td><td>BE Dashboard Perpus</td></tr>
                    <tr><td>8</td><td>Elika Dwi Utami</td><td>FE SI MBEK (Laravel)</td></tr>
                    <tr><td>9</td><td>Faiz Ridho U.</td><td>Inventory Control DPR-RI</td></tr>
                    <tr><td>10</td><td>Halimah Mufita</td><td>FE Web Kualitas Air IoT</td></tr>
                  </tbody>
                </table>
            </div>
          </div>

          
        </div>
      )
    },
    {
      id: 3,
      title: "Analisis SWOT",
      category: "Materi",
      preview: "Analisis strategis untuk mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman dalam pengembangan sistem informasi.",
      content: (
        <div>
          <div className="content-section">
            <p>Analisis SWOT merupakan metode analisis strategis yang digunakan untuk mengevaluasi kondisi internal dan eksternal suatu sistem atau produk sebelum diterapkan atau dikembangkan lebih lanjut. Analisis ini membantu perancang sistem dalam menyusun strategi yang lebih terarah dan realistis.</p>
          </div>

          <div className="content-section">
            <ul className="detail-list">
                <li>
                    <strong>1. Strengths (Kekuatan)</strong><br/>
                    Kekuatan menggambarkan keunggulan internal yang dimiliki sistem.<br/>
                    <em>Contoh:</em> Antarmuka sistem dirancang sederhana dan mudah dipahami oleh pengguna, sehingga meningkatkan kenyamanan dan efisiensi penggunaan.
                </li>
                <li>
                    <strong>2. Weaknesses (Kelemahan)</strong><br/>
                    Kelemahan menunjukkan keterbatasan internal yang perlu diperbaiki.<br/>
                    <em>Contoh:</em> Sistem masih membutuhkan koneksi internet yang stabil sehingga belum sepenuhnya optimal di daerah dengan akses terbatas.
                </li>
                <li>
                    <strong>3. Opportunities (Peluang)</strong><br/>
                    Peluang merupakan faktor eksternal yang dapat dimanfaatkan untuk pengembangan.<br/>
                    <em>Contoh:</em> Meningkatnya kebutuhan digitalisasi di sektor agraris dan industri membuka peluang penerapan sistem informasi secara lebih luas.
                </li>
                <li>
                    <strong>4. Threats (Ancaman)</strong><br/>
                    Ancaman adalah faktor eksternal yang dapat menghambat keberlangsungan sistem.<br/>
                    <em>Contoh:</em> Munculnya sistem atau aplikasi sejenis dengan fitur yang lebih lengkap dan teknologi yang lebih baru.
                </li>
            </ul>
          </div>

          <div className="content-section highlight-box">
            <strong>Ringkasan:</strong> Analisis SWOT digunakan sebagai alat evaluasi untuk memahami kondisi internal dan eksternal sistem, sehingga dapat mendukung pengambilan keputusan dan perencanaan pengembangan yang tepat.
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Analisis Porter Five Forces",
      category: "Materi",
      preview: "Memetakan struktur persaingan industri teknologi pertanian untuk memahami posisi produk.",
      content: (
        <div>
          <div className="content-section">
            <h3>Pengantar Konsep</h3>
            <p>Porter Five Forces adalah model analisis industri yang dikembangkan oleh Michael E. Porter untuk memahami tingkat persaingan dan daya tarik suatu industri. Model ini menilai lima kekuatan utama yang memengaruhi posisi dan keberlanjutan suatu produk atau organisasi.</p>
          </div>

          <div className="content-section">
            <h3>Lima Kekuatan Porter</h3>
            <ul className="detail-list">
                <li>
                    <strong>Threat of New Entrants (Ancaman Pendatang Baru)</strong><br/>
                    Menilai kemudahan pesaing baru masuk ke industri.<br/>
                    <em>Contoh:</em> Pengembangan website relatif mudah sehingga banyak pendatang baru.
                </li>
                <li>
                    <strong>Bargaining Power of Suppliers (Kekuatan Tawar Pemasok)</strong><br/>
                    Menilai kemampuan pemasok dalam menentukan harga dan kualitas.<br/>
                    <em>Contoh:</em> Banyak penyedia hosting membuat kekuatan tawar pemasok rendah.
                </li>
                <li>
                    <strong>Bargaining Power of Buyers (Kekuatan Tawar Pembeli)</strong><br/>
                    Menilai kemampuan pengguna dalam memengaruhi pilihan produk.<br/>
                    <em>Contoh:</em> Pengguna dapat beralih ke aplikasi lain jika sistem tidak sesuai kebutuhan.
                </li>
                <li>
                    <strong>Threat of Substitutes (Ancaman Produk Pengganti)</strong><br/>
                    Menilai keberadaan solusi alternatif.<br/>
                    <em>Contoh:</em> Penggunaan Excel sebagai pengganti sistem informasi.
                </li>
                <li>
                    <strong>Industry Rivalry (Persaingan Industri)</strong><br/>
                    Menilai tingkat persaingan antar pelaku industri.<br/>
                    <em>Contoh:</em> Banyak startup teknologi bersaing di bidang sistem informasi.
                </li>
            </ul>
          </div>

          <div className="content-section highlight-box">
             <strong>Ringkasan:</strong> Porter Five Forces membantu menganalisis tingkat persaingan dan posisi strategis suatu produk dalam industri.
          </div>
        </div>
      )
    },
   {
  id: 6,
  title: "Konsep Dasar Kapita Selekta",
  category: "Materi",
  preview: "Pemahaman dasar Kapita Selekta sebagai landasan analisis teknologi, globalisasi, dan strategi pengembangan sistem.",
  content: (
    <div>
      <div className="content-section">
        <h3>Pengantar Konsep</h3>
        <p>
          Kapita Selekta merupakan mata kuliah yang membahas isu-isu strategis dan perkembangan terkini
          di bidang teknologi informasi dalam konteks global. Mata kuliah ini menekankan kemampuan
          mahasiswa untuk memahami keterkaitan antara teknologi, globalisasi, dan strategi dalam
          pengembangan sistem informasi.
        </p>
        <p>
          Berbeda dengan mata kuliah teknis murni, Kapita Selekta menuntut mahasiswa untuk berpikir
          kritis dan analitis terhadap fenomena teknologi yang berkembang di masyarakat dan industri.
        </p>
      </div>

      <div className="content-section">
        <h3>Peran Kapita Selekta dalam Pengembangan Sistem</h3>
        <ul className="detail-list">
          <li>
            <strong>Pemahaman Globalisasi Teknologi</strong><br/>
            Mahasiswa memahami bagaimana teknologi informasi berperan dalam menghubungkan individu,
            organisasi, dan negara tanpa batas geografis.
          </li>
          <li>
            <strong>Analisis Strategis</strong><br/>
            Kapita Selekta melatih mahasiswa menggunakan pendekatan strategis seperti analisis SWOT
            dan Porter Five Forces untuk menilai posisi suatu sistem atau produk.
          </li>
          <li>
            <strong>Penerapan Teori ke Praktik</strong><br/>
            Konsep yang dipelajari tidak berhenti pada teori, tetapi diterapkan pada pengembangan
            website pribadi dan perencanaan proyek akademik.
          </li>
          <li>
            <strong>Pengembangan Pola Pikir Kritis</strong><br/>
            Mahasiswa didorong untuk menganalisis tren teknologi serta dampaknya terhadap dunia kerja
            dan industri.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Relevansi dengan Website Pribadi</h3>
        <p>
          Website pribadi yang dibangun menjadi media untuk merepresentasikan pemahaman mahasiswa
          terhadap konsep Kapita Selekta. Isi website mencerminkan proses analisis, pemilihan materi,
          serta strategi pengembangan yang selaras dengan perkembangan teknologi informasi saat ini.
        </p>
      </div>

      <div className="content-section highlight-box">
        <strong>Ringkasan:</strong> Kapita Selekta menjadi landasan konseptual dalam memahami
        globalisasi teknologi dan strategi pengembangan sistem informasi secara kritis dan terarah.
      </div>
    </div>
  )
},
{
  id: 7,
  title: "Filosofi Open Source",
  category: "Materi",
  preview: "Pemahaman filosofi keterbukaan, kolaborasi, dan pemanfaatan teknologi open source dalam pengembangan sistem.",
  content: (
    <div>
      <div className="content-section">
        <h3>Pengantar Konsep</h3>
        <p>
          Open source merupakan filosofi pengembangan perangkat lunak yang menekankan keterbukaan
          akses terhadap kode sumber, kolaborasi komunitas, serta kebebasan untuk mempelajari dan
          mengembangkan teknologi secara bersama-sama.
        </p>
        <p>
          Filosofi ini berkembang seiring dengan meningkatnya kebutuhan akan inovasi yang cepat,
          transparan, dan berkelanjutan di dunia teknologi informasi.
        </p>
      </div>

      <div className="content-section">
        <h3>Prinsip Utama Open Source</h3>
        <ul className="detail-list">
          <li>
            <strong>Keterbukaan (Transparency)</strong><br/>
            Kode sumber dapat diakses dan dipelajari oleh siapa pun.
          </li>
          <li>
            <strong>Kolaborasi</strong><br/>
            Pengembangan teknologi dilakukan secara bersama oleh komunitas global.
          </li>
          <li>
            <strong>Kebebasan Penggunaan</strong><br/>
            Teknologi dapat digunakan dan dimodifikasi sesuai kebutuhan.
          </li>
          <li>
            <strong>Pembelajaran Berkelanjutan</strong><br/>
            Pengembang dapat belajar langsung dari praktik nyata melalui kode dan dokumentasi.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Prioritas Penerapan Open Source</h3>
        <p>
          Dalam pengembangan website pribadi, filosofi open source diterapkan melalui penggunaan
          framework, library, dan tools open source. Prioritas utama penerapan open source adalah
          pada aspek pembelajaran, efisiensi pengembangan, serta dukungan komunitas.
        </p>
        <p>
          Dengan memanfaatkan teknologi open source, pengembangan sistem menjadi lebih fleksibel,
          adaptif, dan mudah dikembangkan di masa depan.
        </p>
      </div>

      <div className="content-section highlight-box">
        <strong>Ringkasan:</strong> Filosofi open source mendorong keterbukaan, kolaborasi, dan
        pembelajaran berkelanjutan dalam pengembangan sistem berbasis teknologi informasi.
      </div>
    </div>
  )
},
{
  id: 8,
  title: "Analisis SWOT",
  category: "Tugas",
  preview: "Evaluasi kekuatan, kelemahan, peluang, dan ancaman pada skripsi dan kerja praktik berbasis sistem informasi.",
  content: (
    <div>
      <div className="content-section">
        <h3>Pengantar Analisis</h3>
        <p>
          Analisis SWOT digunakan untuk mengevaluasi kondisi internal dan eksternal dari sistem
          yang dikembangkan pada skripsi dan kerja praktik. Analisis ini membantu memahami kesiapan
          sistem, potensi pengembangan, serta risiko yang mungkin dihadapi dalam proses implementasi.
        </p>
      </div>

      <div className="content-section">
        <h3>Analisis SWOT Skripsi</h3>
        <p><strong>Objek:</strong> Pengembangan Frontend Website Sistem Informasi Manajemen Produksi pada Peternakan Raman</p>
        <ul className="detail-list">
          <li>
            <strong>Strengths (Kekuatan)</strong><br/>
            Antarmuka frontend dirancang sederhana dan mudah digunakan oleh peternak, sehingga
            memudahkan pencatatan dan pemantauan data produksi.
          </li>
          <li>
            <strong>Weaknesses (Kelemahan)</strong><br/>
            Sistem sangat bergantung pada kesiapan backend dan koneksi internet untuk menampilkan data
            secara real-time.
          </li>
          <li>
            <strong>Opportunities (Peluang)</strong><br/>
            Tren digitalisasi sektor agraris membuka peluang penerapan sistem informasi untuk
            meningkatkan efisiensi manajemen peternakan.
          </li>
          <li>
            <strong>Threats (Ancaman)</strong><br/>
            Rendahnya literasi teknologi pada sebagian peternak serta potensi munculnya sistem
            agritech serupa.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Analisis SWOT Kerja Praktik (KP)</h3>
        <p><strong>Objek:</strong> Perancangan User Interface Website BASIS untuk Manajemen Peminjaman Barang di PT Semen Baturaja</p>
        <ul className="detail-list">
          <li>
            <strong>Strengths (Kekuatan)</strong><br/>
            Desain UI dibuat sesuai kebutuhan pengguna internal perusahaan sehingga meningkatkan
            efisiensi proses peminjaman barang.
          </li>
          <li>
            <strong>Weaknesses (Kelemahan)</strong><br/>
            Keterbatasan ruang lingkup pada sisi antarmuka tanpa keterlibatan langsung pada logika
            backend sistem.
          </li>
          <li>
            <strong>Opportunities (Peluang)</strong><br/>
            Kebutuhan perusahaan terhadap sistem digital internal yang terstruktur dan mudah
            digunakan.
          </li>
          <li>
            <strong>Threats (Ancaman)</strong><br/>
            Ketergantungan desain terhadap kebijakan internal perusahaan serta perubahan kebutuhan
            pengguna.
          </li>
        </ul>
      </div>

      <div className="content-section highlight-box">
        <strong>Ringkasan:</strong> Analisis SWOT menunjukkan bahwa baik skripsi maupun kerja praktik
        memiliki peluang besar untuk diterapkan, dengan tantangan utama pada kesiapan pengguna dan
        ketergantungan sistem pendukung.
      </div>
    </div>
  )
},
{
  id: 9,
  title: "Analisis Porter Five Forces",
  category: "Tugas",
  preview: "Analisis lingkungan persaingan pada sistem informasi peternakan dan sistem internal perusahaan.",
  content: (
    <div>
      <div className="content-section">
        <h3>Pengantar Analisis</h3>
        <p>
          Porter Five Forces digunakan untuk menganalisis lingkungan persaingan dan daya tarik
          industri dari sistem informasi yang dikembangkan pada skripsi dan kerja praktik.
        </p>
      </div>

      <div className="content-section">
        <h3>Porter Five Forces – Skripsi</h3>
        <p><strong>Objek:</strong> Sistem Informasi Manajemen Produksi Peternakan Raman</p>
        <ul className="detail-list">
          <li>
            <strong>Threat of New Entrants</strong><br/>
            Tinggi, karena pengembangan website relatif mudah dan banyak sistem agritech bermunculan.
          </li>
          <li>
            <strong>Bargaining Power of Suppliers</strong><br/>
            Rendah, karena banyak penyedia hosting dan layanan cloud yang tersedia.
          </li>
          <li>
            <strong>Bargaining Power of Buyers</strong><br/>
            Tinggi, karena peternak dapat memilih metode manual seperti pencatatan buku atau Excel.
          </li>
          <li>
            <strong>Threat of Substitutes</strong><br/>
            Tinggi, karena sistem dapat digantikan oleh aplikasi spreadsheet atau aplikasi agritech lain.
          </li>
          <li>
            <strong>Industry Rivalry</strong><br/>
            Sedang, karena masih sedikit sistem yang fokus pada manajemen produksi peternakan skala lokal.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Porter Five Forces – Kerja Praktik (KP)</h3>
        <p><strong>Objek:</strong> Website BASIS PT Semen Baturaja</p>
        <ul className="detail-list">
          <li>
            <strong>Threat of New Entrants</strong><br/>
            Rendah, karena sistem bersifat internal perusahaan.
          </li>
          <li>
            <strong>Bargaining Power of Suppliers</strong><br/>
            Rendah, karena banyak vendor teknologi dan tools pengembangan UI.
          </li>
          <li>
            <strong>Bargaining Power of Buyers</strong><br/>
            Sedang, karena pengguna internal memiliki kebutuhan spesifik namun terbatas pada sistem perusahaan.
          </li>
          <li>
            <strong>Threat of Substitutes</strong><br/>
            Sedang, karena proses manual masih dapat digunakan sebagai alternatif sementara.
          </li>
          <li>
            <strong>Industry Rivalry</strong><br/>
            Rendah, karena sistem tidak bersaing di pasar terbuka.
          </li>
        </ul>
      </div>

      <div className="content-section highlight-box">
        <strong>Ringkasan:</strong> Analisis Porter menunjukkan bahwa skripsi menghadapi persaingan
        eksternal yang lebih tinggi, sedangkan kerja praktik berada pada lingkungan internal dengan
        tingkat persaingan yang relatif rendah.
      </div>
    </div>
  )
}

  ];

  return (
    <div className="App">
      
      {/* --- HEADER --- */}
      <header className="main-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Safitri Mutiara Putri</h1>
            <p>NPM: 2215061028 | Kapita Selekta B</p>
            <p className="prodi">Prodi Teknik Informatika - Universitas Lampung</p>
          </div>
          {/* Foto Profil */}
          <img src="/profile.jpg.png" alt="Safitri Mutiara Putri" className="profile-pic" />
        </div>
      </header>

      {/* --- CONTENT --- */}
      <div className="container">
        <div className="materi-grid">
          {materials.map((item) => (
            <div key={item.id} className="card" onClick={() => setSelectedMaterial(item)}>
              <div className="card-top">
                <span className={`tag ${item.category === 'Tugas' ? 'tag-tugas' : 'tag-materi'}`}>
                  {item.category}
                </span>
                <h3>{item.title}</h3>
                <p className="card-preview">{item.preview}</p>
              </div>
              <div className="card-bottom">
                <div className="read-more">Baca Selengkapnya &rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedMaterial && (
        <div className="modal-overlay" onClick={() => setSelectedMaterial(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMaterial(null)}>&times;</button>
            <div className="modal-body">
              <span className={`tag ${selectedMaterial.category === 'Tugas' ? 'tag-tugas' : 'tag-materi'}`}>
                  {selectedMaterial.category}
              </span>
              <h2>{selectedMaterial.title}</h2>
              {selectedMaterial.content}
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer style={{textAlign: 'center', padding: '30px', color: '#94a3b8', fontSize: '0.9rem', marginTop: '50px', borderTop: '1px solid #e2e8f0'}}>
        <p>&copy; 2025 Safitri Mutiara Putri.</p>
      </footer>
    </div>
  );
}

export default App;