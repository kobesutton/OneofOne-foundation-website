import React, {useEffect} from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import kids1 from '../assets/kids1.jpg'
import kids2 from '../assets/kids2.jpg'
import donationimg from '../assets/donationimg.jpg'
import dorian from '../assets/dorian.jpg'
import notrash from '../assets/notrash.jpg'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { useState } from 'react'
import { BiCircle } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const slides = [
        {url: service1},
        {url: service2},
        {url: service3},
        {url: kids1},
        {url: kids2},
        {url: donationimg},
        {url: dorian},
        {url: notrash}
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const slideLength = slides.length


    const prevSlide= () => {
        setCurrentIndex(currentIndex === 0 ? slideLength - 1 : currentIndex - 1 )
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <>
        <div data-aos="fade-up" data-aos-duration="3000">
        <h1 className='text-center text-4xl font-bold text-blue-500 underline underline-offset-8 decoration-yellow-200'>Community Service</h1>
        <div className='max-w-[1400px] h-[580px] w-full m-auto py-14 px-2 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
                <div className='flex h-full justify-center items-center'>
                <p className="font-bold text-lg md:text-2xl opacity-60"> <a className="text-blue-500">One</a> of <a className="text-blue-500">One</a>  Foundation</p>
                </div>
            </div>

            <div className='group-hover:bg-blue-500  duration-500 hover:animate-pulse absolute -translate-x-0 top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer shadow-xl'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hover:animate-pulse duration-500 group-hover:bg-blue-500 -translate-x-0 absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer shadow-2xl'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='flex top-4 space-x-2 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div className='text-xl cursor-pointer ' key={slideIndex}>
                        <BiCircle onClick={(() => goToSlide(slideIndex))} size={10} />
                    </div>
                ))}
            </div>

        </div>
        </div>
        </>
    )
}

export default ImageSlider
