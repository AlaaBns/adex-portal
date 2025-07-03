// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white text-center border-t py-4 mt-10 text-sm text-gray-500">
      © {new Date().getFullYear()} Adex Company. All rights reserved.
    </footer>
  );
}
