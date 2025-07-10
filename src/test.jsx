
function Test(){

    return(
        <>
        <br /><br /><br />
        <section className="py-16 bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-white">
        Request a Demo
      </h2>
      <p className="text-lg mb-8">
        Want to see how our platform works? Fill out the form below to schedule a personalized demo.
      </p>
    </div>

    <div className="max-w-3xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
      <form action="#" method="POST">
        <div className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john.doe@example.com"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="ABC Corp"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Preferred Date for Demo */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Preferred Date for Demo</label>
            <input
              type="date"
              name="demoDate"
              id="demoDate"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Brief Message */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Message (Optional)</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us about your specific requirements or any questions you have."
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              Request Demo
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

        </>
    )
}

export default Test