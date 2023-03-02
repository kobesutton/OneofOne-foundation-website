import React, {useEffect, useState} from 'react'
import jamil from './../assets/jamil.jpg'
import tmc from './../assets/tmc.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import qr from '../assets/QR.jpg'
import axios from 'axios'

const Mission = () => {

  const [events, setEvents] = useState([])
      const url = 'http://localhost:3001/api/events'
      useEffect(() => {
         const getEvents = async () => {
             const { data: res } = await axios.get(url)
             setEvents(res)
         };
         getEvents()
      }, [])

  useEffect(() => {
    AOS.init();
  }, [])
    return (
       <div className="flex flex-col justify-center text-center py-24">
           <div id='mission' data-aos="fade-up" data-aos-duration="3000">
               <h1 className = "text-4xl text-blue-500 py-3 font-black underline underline-offset-8 decoration-yellow-200">The Mission</h1>
               <p className = "font-sans text-lg font-semibold pl-10 pr-10 py-8">
               The One of One Foundation is a non-profit organization that plans to hold events where we give back to those in need. We will look to donate food, health products, and other items to those who are struggling in low-income communities. 1of1 will also look to create opportunities in order to help individuals get back on their feet.
                <br/>
                <br/>
              We are striving to become one of the top community outreach organizations in the area. We will provide help to people of all ages who come from many backgrounds.
               We want to give back to communities by hosting community service events to help nourish declining communities that don't recieve much help. 
               </p>
           </div>

          {/* Founders  */}  
          <div data-aos="fade-up" data-aos-duration="3000" >
           <h1 id='founders' className="py-10 font-black text-4xl text-blue-500 underline decoration-yellow-200 underline-offset-8">The Founders</h1>

        <div className="w-full lg:grid-cols-2 grid pt-10">
          <div className='max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-center lg:col-span-2 gap-14 '>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[350px] justify-center">
              <img src={jamil} alt="Jamil the founder" />
              <div className='p-6'>
                <p className="font-bold">Hello, my name is Jamil👋</p>
                <p className="text-gray-900 pt-2">Hello everyone, a fun fact about my self is that im a member of Phi Beta Sigma Fraternity Inc. 🤘</p>
              </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[350px] mx-auto">
              <img src={tmc} alt="Tyson the founder" />
              <div className='p-6'>
                <p className="font-bold">Hello, my name is Tyson👋</p>
                <p className="text-gray-900 pt-2">Hello everyone, a fun fact about my self is that im from Baltimore, Maryland.</p>
              </div>
          </div>
          </div>
          </div>

          </div>


          {/* Events */}
          <h1 data-aos="fade-up" data-aos-duration="3000" id='events' className="py-10 font-black text-4xl text-blue-500 underline decoration-yellow-200 underline-offset-8">List of Events</h1>

          <div data-aos="fade-up" data-aos-duration="3000" id='events' className='relative flex items-center'>
    

            <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

            {events.length === 0 ? <h1 className="text-lg font-semibold">There are curretly no events scheduled.</h1> 
            : events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg inline-block w-[220px] mx-2">
                <img src={event.img} alt="image of event" />
                <div className='p-6'>
                <p> <a className="font-bold">Event</a>: {event.title}</p>
                <p className="text-gray-900 pt-2"> <a className="font-bold">Description</a>: {event.desc}</p>
                <p className="text-gray-900 pt-2"><a className="font-bold">Date</a>: {event.date}</p>
                </div>
            </div>
            ))}
            </div>
            </div>
  
          
        {/* Donations  */}
          <div id='donate' data-aos="fade-up" data-aos-duration="3000" className='w-full  pt-10'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className="w-[250px] rounded-lg mx-auto my-4" src={qr} alt="Cash app QR code" />
                <div className="flex flex-col justify-center">
                  <h1 className='text-4xl text-blue-500 font-bold underline decoration-yellow-200 underline-offset-8 pb-2 pt-5'>Donations</h1>
                  <p className='pb-3 font-semibold pl-10 pr-10 py-6'>Donations are forwarded to supplies, or anything that contributes to future events that we plan on hosting. For now, we are only accepting donations through cash app. Anything helps to support us. If you have any questions, please contact us on instagram @1of1foundation or fill out the form below, thank you.</p>
                </div>
            </div>
          </div>
       </div>
    )
}

export default Mission
