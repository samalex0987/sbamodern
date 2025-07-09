import watson_assistant from "./watson_assistant.gif"
import watson_discovery from "./watson_discovery.gif"


function Dataandai(){

    return(
        <>
         
    <section class="min-h-screen flex items-center justify-center text-center pt-20 px-4">
        <div>
            <h1 class="text-6xl font-extrabold tracking-tight mb-4 text-white">Empower Your Business</h1>
            <p class="text-lg mb-6 max-w-xl mx-auto text-white">With Trusted AI Solutions</p>
            <a href="#" class="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition">Request a Demo</a>
        </div>
    </section>
    

      
<div class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-100 sm:text-4xl">
        Everything You Need to Power IT & Automation<br class="hidden md:block" />
        in One Platform
      </h2>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      <div class="p-6 rounded-xl shadow hover:shadow-md transition">
        <div class="mb-4 w-12 h-12 mx-auto text-gray-100 text-3xl text-center">
          <i class="fas fa-shield-alt"></i> 
        </div>
        <h3 class="text-lg font-semibold text-gray-100 text-center mb-2">Augment Human Expertise with AI</h3>
        <p class="text-sm text-gray-100 text-center">
          Enhance decision-making by pairing human intelligence with real-time insights from AI. Empower your workforce to focus on high-value tasks, not manual analysis.
        </p>
      </div>

      <div class="p-6 rounded-xl shadow hover:shadow-md transition">
        <div class="mb-4 w-12 h-12 mx-auto text-gray-100 text-3xl text-center">
          <i class="fas fa-network-wired"></i> 
        </div>
        <h3 class="text-lg font-semibold text-gray-100 text-center mb-2">Operationalize AI at Scale</h3>
        <p class="text-sm text-gray-100 text-center">
          Deploy machine learning models faster and with confidence. Automate workflows, monitor performance, and drive outcomes with responsible, explainable AI tailored to your business needs.
        </p>
      </div>

      <div class="p-6 rounded-xl shadow hover:shadow-md transition">
        <div class="mb-4 w-12 h-12 mx-auto text-gray-100 text-3xl text-center">
          <i class="far fa-clock"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-100 text-center mb-2">Accelerate Time to Value</h3>
        <p class="text-sm text-gray-100 text-center">
          Leverage pre-built data pipelines, model templates, and intelligent automations to move from idea to impact in weeks — not months.
        </p>
      </div>

    </div>
  </div>
</div>


<div class="text-center mb-12">
  <h2 class="text-3xl font-bold text-gray-100 sm:text-4xl">
    Intelligent Solutions by watsonX
  </h2>
</div>

<div class="py-16 text-white ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1F1D1A]">

      <div class="order-1 lg:order-1">
        <img src={watson_assistant} alt="Illustration" class="w-full rounded-lg shadow-lg" />
      </div>

      <div class="order-2 lg:order-2" >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">watson Assistant</h2>
        <p class="text-lg mb-6">
         IBM Watson Assistant is a conversation AI platform that helps you provide customers fast, straightforward, and accurate answers to their questions, across any application, device, or channel.
        </p>
        <a href="#" class="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-300 rounded text-black font-medium transition">
          Learn More
        </a>
      </div>

    </div>
  </div>
</div>

<div class="py-16 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  bg-[#1F1D1A]">

      <div class="order-2 lg:order-1">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">watson Discovery</h2>
        <p class="text-lg mb-6">
         IBM Watson Discovery is an award-winning enterprise search and AI search technology that breaks open data silos and retrieves specific answers to your questions while analyzing trends and relationships buried in enterprise data.
        </p>
        <a href="#" class="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-300 rounded text-black font-medium transition">
          Learn More
        </a>
      </div>

      <div class="order-1 lg:order-2">
        <img src={watson_discovery} alt="Illustration" class="w-full rounded-lg shadow-lg" />
      </div>

    </div>
  </div>
</div>

    <section class="bg-[#D5D1DB] py-24 text-center">
    <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
        Your data holds the power.<br />
        Now let AI unlock its potential.
        </h2>
        <a href="#"
        class="inline-block bg-white text-black font-medium px-6 py-3 rounded-md shadow-sm hover:bg-gray-100 transition">
        Explore the Platform
        </a>
    </div>
    </section>


        </>
    )
}

export default Dataandai