var awal_cerita = [];
awal_cerita[0] = [0, "GAME EDUKASI TEKNOLOGI LAYANAN JARINGAN", "next"];
awal_cerita[1] = [
  0,
  "1.	Jaringan Kabel(wired Netword)",
  "next",
];
awal_cerita[2] = [
  0,
  "ADA APA INI!.",
  "next",
];
awal_cerita[2] = [0, "Lebih baik, aku berkeliling untuk mencari tahu", "close"];

var talk_1 = [];
talk_1[0] = [0, "Permisi pak... Apa Jaringan Kabel(wired Netword)?", "next"];
talk_1[1] = [5, "Jaringan Berkabel(wired network) adalah sebuah jaringan yang berfungsi untuk satu komputer dengan komputer lain, diperlukan penguhubung  berupa kabel jaringan. Kabel jaringan berfungsi dalam mengirim informasi dalam bentuk sinyal listrik atau komputer jaringan.", "next"];
talk_1[2] = [0, "Kelebihannya dan kelemahannya", "next"];
talk_1[3] = [5, "1. Relatif murah, 2. Tingkat keamanan relatif tinggi, 3. Performa / Stabilitas jaringan dan bandwith yang lebih tinggi dan lancer mudah dalam instalasi, 4. Biaya yang murah dalam investasi jaringan", "next"];
talk_1[4] = [5,"dan Kelemahan nya", "next",];
talk_1[5] = [5,"1. Kerapian yang kurang(nilai estetika) karena kabel yg berantakan /sembraut, 2. Jangkauan dan akses client yang terbatas, 3. Susah jika ada perluasan jaringan, 4.	Wired LAN harus di tempatkan di tempat yang aman, 5.	Security pada wired LAN akan hilang pada saat kabel jaringan di potong", "next",];
talk_1[6] = [0, "Baik pak, terimakasih Pelajarannya", "close"];

var talk_2 = []; //services NPC inn
talk_2[0] = [
  2,
  "Selamat datang di pemebelajaran Jaringan Nirkabel.",
  "next",
];
talk_2[1] = [2, "Apa anda Mau Belajar", "trade", 0];
talk_2[2] = [2, "Terimakasih, selamat datang kembali", "close"];
talk_2[3] = [2, "Maaf, anda tidak memiliki cukup pengetahuan", "trade"];
talk_2[4] = [2, "Selamat pagi, selamat beraktivitas kembali", "close"];

var item_0 = [];
item_0[0] = [
  2,
  2,
  "Istirahat",
  1,
  30,
  "sleep",
  10,
  0,
  "Memulihkan energimu 100% sehingga siap belajar kembali esok hari",
];
item_0[1] = [0, 3, "Tidak jadi menginap", 0, 0, "close", 0, ""];

var talk_3 = [];
talk_3[0] = [7, "Belajar disini akan mendapatkan pengetahuan", "next"];
talk_3[1] = [
  7,
  "Hal itu bermanfaat jika kamu ingin menjawab soal",
  "next",
];
talk_3[2] = [0, "Apakah anda habis belajar?", "next"];
talk_3[3] = [
  7,
  "Iya, saya bertempur di hutan untuk menaikkan pengetahuan saya.",
  "close",
];

var talk_4 = []; //services NPC bar
talk_4[0] = [4, "Selamat datang di pemebalajaran nirkabel..", "next"];
talk_4[1] = [4, "Apa yang anda butuhkan", "trade", 1];
talk_4[2] = [4, "Terimakasih, selamat datang kembali", "close"];
talk_4[3] = [4, "Maaf, anda tidak memiliki cukup pengetahuan", "trade"];
talk_4[4] = [4, "Maaf, level anda belum cukup", "trade"];
talk_4[5] = [4, "Kamu sudah punya", "trade"];

var item_1 = [];
item_1[0] = [
  0,
  2,
  "Kopi",
  1,
  10,
  "HP",
  5,
  0,
  "Memulihkan energimu untuk belajar sebesar 5 poin",
];
item_1[1] = [
  1,
  2,
  "Ayam Goreng",
  1,
  20,
  "HP",
  10,
  0,
  "Memulihkan energimu untuk belajar sebesar 10 poin",
];
item_1[2] = [0, 3, "Tidak jadi beli", 0, 0, "close", 0, ""];

var talk_5 = [];
talk_5[0] = [1, "Sepertinya kamu anak baru disini", "next"];
talk_5[1] = [1, "Bersiaplah, jika kamu ingin pergi ke hutan untuk melakukan pengetahuan", "next"];
talk_5[2] = [1, "belajarlah di ruangan sebelah untuk membantu mu", "close"];

var talk_6 = []; //services NPC bar
talk_6[0] = [3, "Selamat datang di pemebelajaran ..", "next"];
talk_6[1] = [3, "Apa kamu tau Jaringan Nirkabel", "trade", 2];
talk_6[2] = [3, "Tidak", "close"];
talk_6[3] = [3, "Jaringan nirkabel/wireless adalah bidang disiplin yang berkaitan dengan", "trade", 2];
talk_6[4] = [3, "komunikasi antar sistem [komputer] tanpa menggunakan kabel Jaringan nirkabel ", "trade", 2];
talk_6[5] = [3, "ini sering dipakai untuk jaringan komputer baik pada jarak yang dekat", "trade", 2];
talk_6[6] = [3, "Maaf, level kamu belum cukup", "trade", 2];
talk_6[7] = [3, "Kamu sudah punya pengetahuan ini", "trade", 2];

var item_2 = [];
item_2[0] = [
  0,
  0,
  "Jenis-Jenis Jaringan Nirkabel",
  1,
  40,
  "	WLAN ",
  5,
  1,
  "Berdasarkan jangkauannya, jaringan nirkabel memiliki empat jenis yang di antaranya sebagai berikut: ",];
item_2[1] = [
  1,
  0,
  "WLAN",
  2,
  250,
  "WLAN",
  12,
  2,
  "Wireless Local Area Network memungkinkan dapat menghubungkan dua atau lebih perangkat untuk saling bertukar data dan informasi. WLAN menyediakan koneksi melalui access point untuk jaringan internet yang lebih luas.Biasanya, WLAN dipakai pada tempat-tempat yang wilayahnya kecil, seperti perkantoran, sekolahan, bandara, perpustakaan, dan sebagainya", 

];
item_2[2] = [
  2,
  0,
  "WMAN", 
  4,
  500,
  "WMAN",
  18,
  3,
  "Wireless Metropolitan Area Network dapat saling menghubungkan di beberapa titik pada wilayah metropolitan. Contohnya adalah gedung perkantoran A dengan gedung perkantoran B, atau bisa juga jaringan ini dapat menjangkau satu kota sekaligus.", 
];
item_2[3] = [
  3,
  0,
  "WWAN",
  1,
  40,
  "WMAN",
  4,
  4,
  "Wireless Wide Area Network dapat digunakan oleh pengguna terkoneksi ke jaringan pribadi atau publik dari arak jauh.Jangkauannya sangat luas hingga satu negara, karena menggunakan sistem satelit. Contohnya adalah 2G , 3G dan sebagainya.",];
item_2[4] = [
  0,
  1,
  "WPAN",
  2,
  150,
  "WPAN",
  9,
  5,
  "Sedangkan Wireless Personal Area Network adalah jaringan nirkabel yang jangkauannya paling kecil karena bersifat mendadak.Adapaun jarak yang dapat diangkau dengan WPAN adalah sepuluh meter. Contoh jaringan WPAN adalah bluetooth yang tersemat di smartphone, laptop, tablet, dan yang lainnya.",
];
item_2[5] = [
  1,
  1,
  "A. Kompetensi Awal",
  3,
  350,
  "Kompetensi Awal",
  12,
  6,
  "1. Memahami fungsi dari kabel UTP Straight dan Cross. 2.  Menguasai cara instalasi kabel UTP Straight dan Cross yang baik dan benar",
];
item_2[6] = [
  2,
  1,
  "cara menginstalasi jaringan nirkabel : ",
  1,
  30,
  "Persiapan Alat dan Bahan",
  10,
  7,
  "Router Nirkabel : Perangkat utama untuk menghubungkan jaringan ke internet. Access Point : Untuk memperluas jangkauan sinyal Wi-Fi. Modem Internet : Untuk koneksi internet.  Kabel Ethernet : Untuk menghubungkan modem ke router dan router ke access point. Perangkat Klien : Laptop, komputer atau perangkat lain yang akan terhubung ke jaringan.",
];
item_2[7] = [
  3,
  1,
  "Alat dan Bahan",
  1,
  50,
  "Alat dan Bahan",
  25,
  0,
  "1. Kabel UTP dan konnektor RJ-45, 2. Crimping, 3.  Lan Tester", 
];
item_2[8] = [
  0,
  0,
  "Langkah-Langkah Instalasi",
  1,
  40,
  " Sambungan Perangkat ",
  5,
  1,
  "Modem ke Router : Sambungkan kabel Ethernet dari modem ke port WAN pada router. Router ke Access Point : Sambungkan kabel Ethernet dari salah satu port LAN di router ke port Ethernet pada access point. Colokkan Daya : Nyalakan modem, router, dan access point."];
item_2[9] = [
  1,
  0,
  "Konfigurasi Router",
  2,
  250,
  "Konfigurasi Router",
  12,
  2,
  "Akses Halaman Konfigurasi : Gunakan komputer yang terhubung ke router, buka browser, dan masukkan. alamat IP default router (misalnya, 192.168.1.1). Login : Masukkan nama pengguna dan kata sandi default (biasanya admin untuk keduanya). Atur SSID dan Kata Sandi : Ubah nama jaringan (SSID) dan kata sandi Wi-Fi untuk keamanan.",
];
item_2[10] = [
  2,
  0,
  "Konfigurasi Access Point", 
  4,
  500,
  "Akses Halaman Konfigurasi Access Point : ",
  18,
  3,
  "Masukkan alamat IP default access point di browser (misalnya, 192.168.1.1). Login : Masukkan username dan password default (biasanya admin). Ubah Pengaturan IP : Atur alamat IP access point agar berada dalam rentang yang sama dengan router. tetapi tidak sama (contoh: 192.168.1.2)",
];
item_2[11] = [
  3,
  0,
  "Kompetensi Awal",
  1,
  40,
  "Kompetensi Awal",
  4,
  4,
  "1. Memahami fungsi dari kabel UTP Straight dan Cross. 2. Menguasai cara instalasi kabel UTP Straight dan Cross yang baik dan benar",
];
item_2[12] = [
  0,
  1,
  "Sambungkan Perangkat Klien",
  2,
  150,
  "Cari Jaringan Wi-Fi :",
  9,
  5,
  "Pada perangkat yang ingin terhubung, cari SSID yang telah Anda buat. Masukkan Kata Sandi : Sambungkan dengan memasukkan kata sandi yang telah diatur.h", 
];
item_2[13] = [
  1,
  1,
  "Uji Koneksi",
  3,
  350,
  "Tes Koneksi :",
  12,
  6,
  "Buka browser di perangkat klien untuk memastikan koneksi internet berfungsi dengan baik.", 
];
item_2[14] = [0, 3, "Tidak jadi belajar", 0, 0, "close", 0, ""];
