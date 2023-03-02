import React, {useEffect} from 'react'
import hero from '../assets/hero.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id='hero' className="w-full h-screen relative">
           <img className="h-full w-full object-cover" 
           src={hero}/>
        <div className="absolute w-full h-full top-0 left-0 bg-blue-900/20"></div>
        <div className=" text-5xl md:text-6xl lg:text-7xl font-bold absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4" data-aos="fade-up" data-aos-duration="3000">
        <h1 className=" drop-shadow-xl text-white p-4 text-center justify-center"> <a className="text-blue-400">One</a> of <a className="text-blue-400">One</a> Foundation</h1>
        <h2>Bettering Communities <br/> Day By Day</h2>
        </div>
        </div>
    )
}

export default Hero
