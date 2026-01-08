export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-[#E3CDBE] to-white p-6 mt-12">
        <div className="container mx-auto text-center text-gray-800">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Almagia. All rights reserved.
          </p>
          <p className="text-xs md:text-sm mt-1">
            en plats för själen
          </p>
        </div>
      </footer>
    );
  }