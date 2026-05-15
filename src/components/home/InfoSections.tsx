import Image from "next/image"

const infoSections = () => {
  return (
    <div>
      <section className="bg-white py-24">

  <div className="max-w-[1600px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold text-[#0b132b] mb-5">
        How it works
      </h2>

      <p className="text-gray-500 text-lg">
        Getting any service you need is just a few simple steps away.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-24">

      {[
        {
          number: "1",
          title: "Tell us what you need",
          subtitle: "Search or describe the service you're looking for.",
        },
        {
          number: "2",
          title: "Get matched",
          subtitle: "We connect you with the right professional.",
        },
        {
          number: "3",
          title: "Confirm & get it done",
          subtitle: "Choose your pro and get the job done.",
        },
        {
          number: "4",
          title: "Sit back & relax",
          subtitle: "Enjoy the results. You're in good hands!",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="relative text-center"
        >

          {/* Circle */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-green-200 bg-white flex items-center justify-center text-[#386641] text-3xl font-bold shadow-sm">
            {step.number}
          </div>

          {/* Line */}
          {index !== 3 && (
            <div className="hidden lg:block absolute top-8 left-[60%] w-full border-t border-dashed border-gray-300"></div>
          )}

          <h3 className="text-2xl font-semibold text-[#0b132b] mb-4">
            {step.title}
          </h3>

          <p className="text-gray-500 leading-relaxed">
            {step.subtitle}
          </p>

        </div>
      ))}

    </div>

    {/* Bottom Banner */}
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#00a63e] to-[#7ddf9b]">

        {/* Right Image */}
     <img
  src="https://placehold.co/1400x500?text=Banner+Image"
  alt="banner"
  className="w-full rounded-[32px] object-cover"
/>

      </div>
   

  </div>
</section>
    </div>
  )
}

export default infoSections
