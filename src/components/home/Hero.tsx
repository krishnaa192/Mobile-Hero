
const HeroBanner = () => {
  return (
    <section className="bg-[#f8f8f8] overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#00a63e]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#386641]/10 blur-[140px] rounded-full"></div>

      <div className="w-full px-6 lg:px-16 xl:px-24 pt-2 lg:pt-16 relative z-10">
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[48%_52%]
          gap-10
          items-center
          min-h-screen
        ">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-white
              border
              border-[#d9f5e3]
              shadow-md
              shadow-green-100/40
              text-[#386641]
              font-semibold
              tracking-[2px]
              uppercase
              text-sm
              mb-8
            ">

              <div className="w-2.5 h-2.5 rounded-full bg-[#00a63e] animate-pulse"></div>

              One Platform. Every Service.

            </div>

            {/* Heading */}
            <h1 className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-black
              leading-[0.95]
              text-[#0b132b]
              mb-8
            ">

              Whatever service
              <br />

              you need,

              <br />

              <span className="relative inline-block text-[#00a63e]">

                we’ve got you.

                <div className="
                  absolute
                  left-0
                  bottom-2
                  w-full
                  h-4
                  bg-[#00a63e]/10
                  -z-10
                  rounded-full
                "></div>

              </span>

            </h1>

            {/* Subtitle */}
            <p className="
              text-gray-500
              text-lg
              lg:text-xl
              leading-relaxed
              max-w-2xl
              mb-10
            ">

              From everyday tasks to specialized professionals,
              discover trusted services near you with a seamless,
              modern experience built for speed and reliability.

            </p>

            {/* Search Box */}
            <div className="
              bg-white
              rounded-[32px]
              p-5
              shadow-2xl
              shadow-black/5
              border
              border-white
              mb-8
            ">

              <div className="flex flex-col lg:flex-row gap-4">

                {/* Input */}
                <div className="
                  flex-1
                  flex
                  items-center
                  gap-4
                  px-5
                  h-16
                  rounded-2xl
                  bg-[#f6f6f6]
                ">

                  <svg
                    className="w-6 h-6 text-{#000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="What service are you looking for?"
                    className="
                      w-full
                      bg-transparent
                      outline-none
                      text-lg
                      text-[#0b132b]
                      placeholder:text-gray-400
                    "
                  />

                </div>

                {/* Button */}
                <button className="
                  h-16
                  px-10
                  rounded-2xl
                  bg-[#00a63e]
                  text-white
                  font-semibold
                  text-lg
                  hover:bg-[#009135]
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-green-500/20
                ">

                  Find My Service

                </button>

              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-5 mt-6">

                {[
                  "Any service. Anywhere.",
                  "Trusted professionals",
                  "Fast & reliable",
                  "Secure payments",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >

                    <div className="
                      w-5
                      h-5
                      rounded-full
                      border
                      border-[#00a63e]
                      flex
                      items-center
                      justify-center
                    ">

                      <div className="w-2 h-2 rounded-full bg-[#00a63e]"></div>

                    </div>

                    <span className="text-sm text-gray-500">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Reviews */}
            <div className="flex flex-wrap items-center gap-8">

              {/* Users */}
              <div className="flex -space-x-4">

                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src={`https://placehold.co/60x60/e5e7eb/111827?text=${index + 1}`}
                    alt="user"
                    className="
                      w-14
                      h-14
                      rounded-full
                      border-4
                      border-white
                      object-cover
                    "
                  />
                ))}

              </div>

              {/* Rating */}
              <div>

                <div className="flex items-center gap-2 text-[#ffb703] text-xl mb-1">

                  ★ ★ ★ ★ ★

                  <span className="text-[#0b132b] text-lg font-semibold ml-2">
                    4.9 / 5
                  </span>

                </div>

                <p className="text-gray-500">
                  From 20,000+ happy customers
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT HERO */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[760px]">

            {/* Main Soft Circle */}
            <div className="
              absolute
              w-[680px]
              h-[680px]
              rounded-full
              bg-[#eef8f1]
              z-0
            "></div>

            {/* Dashed Circle */}
            <div className="
              absolute
              w-[580px]
              h-[580px]
              rounded-full
              border
              border-dashed
              border-[#b9dec5]
              z-0
            "></div>

            {/* Dashed Paths */}
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 800 800"
              fill="none"
            >

              <path
                d="M180 250C250 180 340 180 400 300"
                stroke="#bfdcc8"
                strokeWidth="2"
                strokeDasharray="10 10"
              />

              <path
                d="M230 540C300 470 370 460 430 520"
                stroke="#bfdcc8"
                strokeWidth="2"
                strokeDasharray="10 10"
              />

              <path
                d="M500 260C570 220 650 260 680 340"
                stroke="#bfdcc8"
                strokeWidth="2"
                strokeDasharray="10 10"
              />

            </svg>

            {/* Main Hero Image */}
            <div className="relative z-20">

              <img
                src="https://placehold.co/700x850/e7f7ec/111827?text=Professional"
                alt="hero"
                className="
                  w-[520px]
                  object-contain
                  drop-shadow-2xl
                "
              />

            </div>

            {/* Top Badge */}
            <div className="
              absolute
              top-16
              left-1/2
              -translate-x-1/2
              bg-white
              rounded-full
              shadow-xl
              px-5
              py-3
              flex
              items-center
              gap-3
              z-30
            ">

              <div className="
                w-10
                h-10
                rounded-full
                bg-[#edf8f0]
                flex
                items-center
                justify-center
                text-[#00a63e]
                font-bold
              ">
                ✓
              </div>

              <p className="text-[#0b132b] font-bold text-sm">
                120+ Services
              </p>

            </div>

            {/* Floating Card 1 */}
            <div className="
              absolute
              top-32
              left-0
              bg-white
              rounded-[28px]
              shadow-2xl
              p-5
              w-56
              z-30
            ">

              <img
                src="https://placehold.co/300x180/f3f4f6/111827?text=Plumbing"
                alt="plumbing"
                className="rounded-2xl mb-4"
              />

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-[#0b132b]">
                    Plumbing
                  </h3>
                  <div className="flex flex-row items-center gap-2">
                    <div className="
                  w-5
                  h-5
                  rounded-full
                  bg-[#00a63e]
                  text-white
                  flex
                  items-center
                  justify-center
                ">
                      ✓
                    </div>
                    <p className="text-sm text-gray-500">
                      Available now
                    </p>
                  </div>

                </div>



              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="
              absolute
              bottom-28
              left-8
              bg-white
              rounded-[28px]
              shadow-2xl
              p-4
              w-56
              z-30
            ">

              <img
                src="https://placehold.co/300x180/f3f4f6/111827?text=Electrical"
                alt="electrical"
                className="rounded-2xl mb-4"
              />

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-[#0b132b]">
                    Electrical
                  </h3>


                  <div className="flex flex-row items-center gap-2">
                    <div className="
                  w-5
                  h-5
                  rounded-full
                  bg-[#00a63e]
                  text-white
                  flex
                  items-center
                  justify-center
                ">
                      ✓
                    </div>
                    <p className="text-sm text-gray-500">
                      Available now
                    </p>
                  </div>
                </div>



              </div>

            </div>

            {/* Floating Card 3 */}
            <div className="
              absolute
              top-24
              !right-0
              bg-white
              rounded-[28px]
              shadow-2xl
              p-4
              w-52
              z-30
            ">

              <img
                src="https://placehold.co/300x180/f3f4f6/111827?text=Cleaning"
                alt="cleaning"
                className="rounded-2xl mb-4"
              />

              <h3 className="font-bold text-[#0b132b]">
                Cleaning
              </h3>

              <div className="flex items-center justify-between mt-1">

                <p className="text-sm text-gray-500">
                  Available now
                </p>

                <div className="flex items-center gap-1 text-[#00a63e] text-sm">

                  <div className="w-2 h-2 rounded-full bg-[#00a63e]"></div>

                  Live

                </div>

              </div>

            </div>

            {/* Highly Rated */}
            <div className="
              absolute
              right-0
              bottom-44
              bg-white
              rounded-2xl
              shadow-2xl
              px-5
              py-4
              z-30
            ">

              <div className="flex items-center gap-3">

                <div className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#edf8f0]
                  flex
                  items-center
                  justify-center
                ">
                  ⭐
                </div>

                <div>

                  <p className="font-bold text-[#0b132b] text-sm">
                    Highly rated
                  </p>

                  <p className="text-xs text-gray-500">
                    4.9/5 reviews
                  </p>

                </div>

              </div>

            </div>

            {/* Background Checked */}
            <div className="
              absolute
              right-10
              bottom-12
              bg-white
              rounded-full
              shadow-2xl
              px-6
              py-4
              flex
              items-center
              gap-4
              z-30
            ">

              <div className="
                w-12
                h-12
                rounded-full
                bg-[#edf8f0]
                flex
                items-center
                justify-center
                text-[#00a63e]
                text-lg
                font-bold
              ">
                ✔
              </div>

              <div>

                <p className="font-bold text-[#0b132b] text-sm">
                  Background checked
                </p>

                <p className="text-xs text-gray-500">
                  Verified & insured
                </p>

              </div>

            </div>

          </div>

        </div>
        {/* Feature Blocks */}
        <div className="
  mt-0
  mb-6
  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-4
  gap-6
">

          {[
            {
              title: "All Services, One Place",
              desc: "From home repairs to personal tasks, we do it all.",
              icon: "⌂",
            },
            {
              title: "Verified & Trusted Pros",
              desc: "Every professional is vetted and background-checked.",
              icon: "✓",
            },
            {
              title: "Quick & Easy",
              desc: "Post your request and get matched in minutes.",
              icon: "⚡",
            },
            {
              title: "24/7 Support",
              desc: "We’re here whenever you need us.",
              icon: "◉",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
        bg-white
        rounded-[30px]
        p-7
        border
        border-[#edf1ee]
        shadow-lg
        shadow-black/[0.02]
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
            >

              {/* Icon */}
              <div className="
        w-14
        h-14
        rounded-2xl
        bg-[#edf8f0]
        text-[#00a63e]
        flex
        items-center
        justify-center
        text-2xl
        mb-5
      ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="
        text-[#0b132b]
        font-bold
        text-xl
        mb-3
      ">
                {item.title}
              </h3>

              {/* Description */}
              <p className="
        text-gray-500
        leading-relaxed
        text-[15px]
      ">
                {item.desc}
              </p>

            </div>

          ))}

        </div>
      </div>

    </section>
  );
};

export default HeroBanner;