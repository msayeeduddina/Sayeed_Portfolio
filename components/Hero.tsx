import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import Button from './ui/Button';


const Hero = () => {
  return (
    <div id='hero' className=" min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 ">
      <div className=''>
      <Spotlight className='top-16  left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      
      <div className="flex flex-col items-center justify-start">
      <div className='-pt-10 md:-pt-32 md:pb-10  flex items-center text-center'><Button/></div>
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-left md:px-4 md:w-1/2">
          <div className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white"
          >I&apos;m a Blockchain Developer. I implement best practices in Blockchain Technology: design, implementation, documentation, deployment, monitoring and operations. Solid knowledge of cryptography, code assessment skills, optimization techniques for creative solutions. Deliver well-architected software solutions that powers ever increasing demands of availability, reliability, security, performance. Create services that works on blockchain & implement systems that secure and safeguard digital assets. Collaborate with multiple partner teams and drive features to closure with high quality.
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <img
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
            src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
            alt="profile_pic"
          />
        </div>
      </div>

      <div>
          <TypewriterEffectSmoothDemo/>
      </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/sayeed-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero
