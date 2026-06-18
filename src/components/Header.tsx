'use client';

import React from 'react';

interface HeaderProps {
  villageName?: string;
  showSubtitle?: boolean;
}

/**
 * Header Component
 * 
 * Komponen header utama untuk dashboard transparansi anggaran desa.
 * Menampilkan judul dashboard dan informasi desa dengan desain mobile-first.
 * 
 * @param {HeaderProps} props - Props untuk Header component
 * @param {string} [props.villageName] - Nama desa (default: "Dashboard Desa")
 * @param {boolean} [props.showSubtitle] - Tampilkan subtitle (default: true)
 */
export default function Header({
  villageName = 'Dashboard Desa',
  showSubtitle = true,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      {/* Main Header Container */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo / Title Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo Icon / Badge */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white bg-opacity-20">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title Content */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {villageName}
                </h1>
              </div>
            </div>

            {/* Optional: Info Badge */}
            <div className="hidden sm:block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-white">
                <span className="flex h-2 w-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
          </div>

          {/* Subtitle / Tagline */}
          {showSubtitle && (
            <div className="mt-3">
              <p className="text-blue-100 text-sm sm:text-base font-medium">
                Transparansi Anggaran untuk Kepercayaan Publik
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Secondary Header - Info Bar */}
      <div className="bg-gray-50 px-4 py-3 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Year Info */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tahun Anggaran
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-900 mt-1">
                2024
              </span>
            </div>

            {/* Status Info */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status Update
              </span>
              <span className="text-lg sm:text-xl font-bold text-green-600 mt-1">
                Terkini
              </span>
            </div>

            {/* Last Updated */}
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Pembaruan Terakhir
              </span>
              <span className="text-sm sm:text-base text-gray-700 mt-1">
                Hari ini
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
