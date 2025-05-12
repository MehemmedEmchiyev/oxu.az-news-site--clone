import {
    FaFacebookF,
    FaTelegramPlane,
    FaInstagram,
    FaWhatsapp,
    FaApple,
    FaGooglePlay,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-100 text-sm text-gray-800 py-8 px-4 relative  bottom-0 z-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
  
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="https://oxu.az/media/img/gmg/gmg-logo-az.svg?v=1.1.1" alt="oxu.az" className="h-8" />
            </div>
            <p className="text-xs text-gray-500">*GLOBAL MEDIA GROUP-a daxildir</p>
          </div>
  
          <div className="flex-1 max-w-md space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Bütün hüquqlar qorunur © 2013-2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Oxu.Az 24 saat ərzində, Azərbaycan, türk və rus dillərində, ölkədə və dünyada baş verən ən aktual və maraqlı hadisələr barədə operativ xəbərlər, oxucuları və cəmiyyəti maraqlandıran suallara cavablar, analitik məqalələr, foto və videohesabatlar hazırlayır.
            </p>
            <div className="flex gap-3 text-lg text-gray-700">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTelegramPlane className="hover:text-blue-500 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaApple className="hover:text-black cursor-pointer" />
              <FaGooglePlay className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>
  
          <div className="min-w-[180px] space-y-2">
            <p className="font-semibold">Karyera</p>
            <a className="text-blue-800 hover:underline">info@gmail.com</a>
  
            <p className="font-semibold mt-4">Ümumi sorğular üçün</p>
            <a className="text-blue-800 hover:underline">info@gmail.com</a> <br />
            <a href="tel:0507174704" className="text-blue-800 hover:underline">+994507174704</a>
          </div>
  
          <div className="min-w-[150px] flex flex-col gap-3   space-y-2">
            <a href="#" className="hover:underline">Saytda reklam</a>
            <a href="#" className="hover:underline">Bizimlə əlaqə</a>
            <a href="#" className="hover:underline">Məxfilik siyasəti</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  