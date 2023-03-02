import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const showToastMessage = () => {
        toast.success('Message Sent!', {
            position: toast.POSITION.TOP_CENTER
        });
    }   

    useEffect(() => {
        AOS.init();
      }, [])

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_apl19ef', 'template_y7divj7', form.current, 'Uc5-Vn9d_XaMzZC0s')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          };

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="w-full py-16 px-4 bg-gray-200 shadow-lg" id='form'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 uppercase'>Have any <a className="text-blue-500">questions</a> or <a className="text-blue-500">concerns</a> 
                    <br />
                    send us an email</h1>
                    <p className='text-lg uppercase'>We will try to reply within a timely manner, thank you.</p>
                </div>

                <div className='my-4 flex flex-col sm:flex-r65 items-center justify-between w-full'>
                    <form  ref={form} onSubmit={sendEmail}>
                        <input className='p-2 mb-3 w-full rounded-md text-black' name="name" type="text" placeholder="Enter Name" required />
                        <input className='mb-3 p-2 w-full rounded-md text-black' name="email" type="email" placeholder="Enter Email" required />
                        <input className='mb-3 p-2 w-full rounded-md text-black' name="message"  type="text" placeholder="Message" required />
                        <button
                        type="submit"
                        onClick={showToastMessage}
                        className='hover:animate-pulse bg-blue-500 text-white rounded-md font-medium w-[200px] my-4 px-6 py-3'>Send</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form

