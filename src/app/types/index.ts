/**
 * Type Definitions untuk Components
 */

/**
 * Props untuk Header Component
 */
export interface HeaderProps {
  /**
   * Nama desa yang ditampilkan di header
   * @default "Dashboard Desa"
   */
  villageName?: string;

  /**
   * Menampilkan subtitle/tagline di header
   * @default true
   */
  showSubtitle?: boolean;

  /**
   * Tahun anggaran yang aktif
   * @default current year
   */
  year?: number;

  /**
   * Custom className untuk styling tambahan
   */
  className?: string;
}

/**
 * Tipe untuk Status Proyek
 */
export enum ProjectStatus {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in_progress',
  PLANNED = 'planned',
}

/**
 * Tipe untuk Data Anggaran
 */
export interface BudgetData {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category: string;
  status: ProjectStatus;
}

/**
 * Tipe untuk Project/Kegiatan
 */
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  budget: number;
  spent: number;
  status: ProjectStatus;
  location: {
    lat: number;
    lng: number;
  };
  images?: string[];
  startDate?: string;
  endDate?: string;
  progress?: number;
}

/**
 * Tipe untuk Village Profile
 */
export interface VillageProfile {
  id: string;
  name: string;
  region: string;
  population: number;
  email?: string;
  phone?: string;
  website?: string;
}

/**
 * Tipe untuk API Response
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
