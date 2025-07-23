import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import venkatesh from "./venkatesh.jpg"
import sadeesh from "./sadeesh.png"
import kandhan from "./kandhan.jpg"
import viswanathan from "./viswanathan.jpg"

function About_us(){
    const [showPopup, setShowPopup] = useState(false);
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      
        useEffect(() => {
          AOS.init({
                duration: 1000,
                once: true,
              });
        }, []);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({
            ...prev,
            [name]: value
          }));
        };
      
        const handleSubmit = () => {
          if (formData.name && formData.email) {
            alert("Demo booked successfully!");
            setShowPopup(false);
            setFormData({ name: '', email: '', company: '', message: '' });
          } else {
            alert("Please fill in required fields (Name and Email)");
          }
        };
      
        const closePopup = () => {
          setShowPopup(false);
        };
      

    return(
        <>


        <section className="py-16 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Team Member 1 */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src={venkatesh} alt="Team Member 1" className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
        <h3 className="text-xl font-semibold mb-2">Venkatesh A</h3>
        <p className="text-lg text-gray-400">Generative AI Expert</p>
      </div>

      {/* Team Member 2 */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src={kandhan} alt="Team Member 2" className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
        <h3 className="text-xl font-semibold mb-2">Kanthanathan S</h3>
        <p className="text-lg text-gray-400">Technology Strategist & Transformation Leader</p>
      </div>

      {/* Team Member 3 */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src={sadeesh} alt="Team Member 3" className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
        <h3 className="text-xl font-semibold mb-2">Sadeeshkumar G</h3>
        <p className="text-lg text-gray-400">HManager, Service and Delivery</p>
      </div>

      {/* Team Member 4 */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src={viswanathan} alt="Team Member 4" className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
        <h3 className="text-xl font-semibold mb-2">Viswanathan N</h3>
        <p className="text-lg text-gray-400">Head of Service and Delivery</p>
      </div>
    </div>
  </div>
</section>


        
        </>
    )
}


export default About_us
