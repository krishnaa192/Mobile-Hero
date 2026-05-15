import Image from "next/image";



const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">

      <div className="max-w-[1600px] mx-auto px-6 py-16">

   <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">
          {/* Logo Section */}
          <div>

            <img
              src="https://placehold.co/160x60?text=LOGO"
              alt="logo"
              className="mb-6"
            />

            <p className="text-gray-500 leading-relaxed mb-6">
              Your one-stop platform to get any
              service, anytime, anywhere.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">

              {["F", "I", "L", "Y"].map((item, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#386641] font-semibold hover:bg-[#386641] hover:text-white transition cursor-pointer"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

       {/* Quick Links */}
<div>
  <h3 className="text-xl font-semibold text-[#0b132b] mb-6">
    Quick Links
  </h3>

  <div className="flex flex-col gap-4 text-gray-500">

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      How it works
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      For Providers
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      About Us
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Contact Us
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      FAQs
    </a>

  </div>
</div>

{/* Popular Services */}
<div>
  <h3 className="text-xl font-semibold text-[#0b132b] mb-6">
    Popular Services
  </h3>

  <div className="flex flex-col gap-4 text-gray-500">

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Plumbing
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Electrical
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Cleaning
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Delivery
    </a>

    <a
      href="#"
      className="hover:text-[#386641] transition"
    >
      Appliance Repair
    </a>

  </div>
</div>

          {/* App Section */}
          <div>

            <h3 className="text-xl font-semibold text-[#0b132b] mb-6">
              Download the App
            </h3>

            <p className="text-gray-500 mb-6">
              Coming Soon
            </p>

            <div className="flex flex-wrap gap-4">

              <img
                src="https://placehold.co/180x60?text=App+Store"
                alt="app-store"
                className="rounded-xl"
              />

              <img
                src="https://placehold.co/180x60?text=Google+Play"
                alt="google-play"
                className="rounded-xl"
              />

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-sm">
            © 2026 Mobile Hero. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-gray-400">

            <a href="#" className="hover:text-[#386641] transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-[#386641] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#386641] transition">
              Cookie Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;