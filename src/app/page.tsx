/**
 * Halaman Beranda (Home Page)
 * 
 * Contoh implementasi dengan Header component dan struktur dashboard utama
 */

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section / Welcome Card */}
      <section className="bg-white rounded-lg shadow-card p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Selamat Datang
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Dashboard ini menyajikan informasi transparansi anggaran desa secara real-time.
          Lihat bagaimana dana publik digunakan untuk pembangunan dan pelayanan masyarakat.
        </p>
      </section>

      {/* Summary Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Total Anggaran */}
        <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-l-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Total Anggaran
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                Rp 2.5M
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Realisasi Anggaran */}
        <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-l-green-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Realisasi
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                72%
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3: Proyek Berjalan */}
        <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-l-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Proyek Aktif
              </p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                12
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Proyek Terbaru
        </h3>
        <div className="space-y-4">
          {/* Project Item 1 */}
          <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pembangunan Jalan Aspal Dusun A
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Proyek pembangunan jalan aspal untuk akses menuju dusun A. Panjang
                  jalan 2 km dengan anggaran Rp 500 juta.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600">
                        Progress
                      </span>
                      <span className="text-xs font-bold text-gray-900">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                    Berjalan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Item 2 */}
          <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Renovasi Kantor Desa
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Renovasi total bangunan kantor desa untuk meningkatkan kenyamanan
                  pelayanan publik.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-600">
                        Progress
                      </span>
                      <span className="text-xs font-bold text-gray-900">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lihat Semua Proyek
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-blue-50 rounded-lg p-6 sm:p-8 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          💡 Informasi Penting
        </h3>
        <p className="text-blue-800 text-sm leading-relaxed">
          Data yang ditampilkan diperbarui secara berkala. Untuk pertanyaan atau
          masukan mengenai transparansi anggaran desa, silakan hubungi kantor desa
          setempat atau gunakan fitur laporan di aplikasi ini.
        </p>
      </section>
    </div>
  );
}
