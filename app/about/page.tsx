import { siteConfig } from '@/config/site'
import { shimmer, toBase64 } from '@/lib/image'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-20'>
      <div className="px-4 pb-10 text-center">
      <h1 className="text-4xl font-extrabold tracking-normal pb-10">
          Our Story
        </h1>
        <div className='w-full h-[400px] relative'>
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(225, 280)
            )}`}
            src={'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt={"about"}
            fill
            className="h-fit w-full object-contain"
          />
        </div>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-justify pt-10">
          At Fulltape, we believe in the power of technology to transform businesses and elevate them
          to new heights. As a leading provider of marketing technology services, we specialize in
          crafting innovative digital solutions that empower companies to thrive in today{"'"}s
          fast-paced, data-driven world. Whether through advanced marketing strategies or enhancing
          connectivity, we deliver tools that drive growth, optimize performance, and enhance customer experiences.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-justify">
          In addition to our marketing expertise, Fulltape also offers high-performance Wi-Fi extenders
          that ensure reliable and seamless connectivity for homes and businesses. We understand the
          importance of staying connected, and our Wi-Fi solutions help you maintain strong,
          uninterrupted connections, so your operations run smoothly.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-[30px] text-base text-justify">
          Our mission is simple: to help businesses unlock their full potential
          by providing the perfect combination of marketing technology and connectivity.
          With a dedicated team of experts, cutting-edge tools, and a customer-first approach,
          Fulltape is your trusted partner in achieving success in the digital age. Whether
          you need to optimize your marketing campaigns or enhance your internet access, we{"'"}re here to help you reach your goals.
        </p>
      </div>
    </div>
  )
}

export default About