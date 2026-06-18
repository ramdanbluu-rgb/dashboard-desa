import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Transparansi Desa",
  description:
    "Platform transparansi anggaran desa untuk kepercayaan publik dan tata kelola keuangan yang lebih baik",
  keywords: [
    "desa",
    "transparansi",
    "anggaran",
    "APBDes",
    "dashboard",
    "pemerintahan lokal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header Component */}
        <Header villageName="Dashboard Desa" showSubtitle={true} />

        {/* Main Content Area */}
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Peta Proyek
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Laporan
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tentang</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Profil Desa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Kontak
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Syarat Penggunaan
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Koneksi</h3>
                <p className="text-sm text-gray-400">
                  Hubungi kami untuk pertanyaan dan masukan
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} Dashboard Transparansi Desa. Semua
                hak dilindungi.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
