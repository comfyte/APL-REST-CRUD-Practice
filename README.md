**Penugasan implementasi REST HTTP API sederhana untuk mata kuliah Arsitektur Perangkat Lunak DTETI FT UGM.**

# Anggota kelompok
- Muhammad Farrel Rafirizqy (19/444062/TK/49258)
- Sagara Aldavy Muhammad Noor Syams (19/444070/TK/49266)

# Cara menjalankan

## Mode _development_
```
npm run dev
```

## Mode _production_
```
npm run build
npm start
```

Pada kedua skenario di atas, server akan berjalan secara lokal di alamat [http://localhost:3000](http://localhost:3000).

# Penggunaan (_Usage_)

## Antarmuka web
Setelah proses berjalan, buka tautan [http://localhost:3000](http://localhost:3000) di _browser_.

## API endpoints

### Create
```
POST /api/employees
```

### Read
Get all data:
```
GET /api/employees
```

Get specific employee data:
```
GET /api/employees/[id_karyawan]
```

### Update
```
PUT /api/employees/[id_karyawan]
```

### Delete
```
DELETE /api/employees/[id_karyawan]
```

# Spesifikasi teknis

## Struktur direktori

- _Endpoint_ utama API terletak di dalam folder [`/pages/api/employees`](pages/api/employees) dengan dua buah file yang bertindak untuk menangani _request_ yang masuk. File [`index.js`](pages/api/employees/index.js) digunakan untuk _request_ tanpa argumen dan file [`[empId].js`](pages/api/employees/[empId].js) digunakan untuk _request_ berargumen (`empId`).

- Antarmuka web utama terletak pada file [`/pages/index.js`](pages/index.js).

- _Database_ berbentuk _flat file_ terletak pada file [`data.csv`](data.csv). File ini telah terisi (_prepopulated_) dengan sejumlah data karyawan.

- File-file pembantu lainnya, seperti [fungsi _read/write_ data](data-helpers.js) dan [model data](data-model.js), terletak di direktori teratas (_root directory_). File-file tersebut diimpor dengan sistem **ES modules** untuk dapat dimanfaatkan di file yang membutuhkan.

## Teknologi yang digunakan

### _Framework_ utama

Proyek ini menggunakan _framework_ Next.js yang mengabstraksi proses pembuatan API dan _endpoint_-nya sehingga menjadi lebih mudah. Selain itu, keunggulan utamanya yaitu Next.js memberikan kemudahan untuk membangun _front-end_ dan _back-end_ dalam satu tempat.

Next.js adalah _framework_ yang berbasiskan React dan menggunakan bahasa JavaScript. Proses pengembangan (_development_) difasilitasi melalui Node (Node.js).

### Penyimpanan data

Data karyawan disimpan dalam bentuk _flat file_ sederhana dengan format CSV. Aktivitas _read_ dan _write_ terhadap file tersebut dilakukan dengan menggunakan modul `fs` pada Node.