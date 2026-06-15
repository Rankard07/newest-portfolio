import type { SVGProps } from "react";

// Menggunakan SVGProps agar ikon ini bisa menerima className Tailwind dari luar
export default function CustomArrowIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      // Menggunakan viewBox yang sesuai dengan koordinat editor (bisa disesuaikan jika terlalu besar/kecil)
      viewBox="0 0 12 12" 
      fill="currentColor" // Agar warna mengikuti class text-*** dari Tailwind
      className={`w-5 h-5 ${className}`} // Ukuran default w-5 h-5 (20px)
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        // Masukkan data perintah 'COMMANDS' dari editor kamu di sini
        d="M 4 3 L 5 4 L 4 5 L 5 5 L 6 4 L 5 3 Z" 
      />
    </svg>
  );
}