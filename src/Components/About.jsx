import React from 'react'
import bannerImage from '../assets/banner2.png';
import homeImage from '../assets/home.svg'
import shopImage from '../assets/shop.svg'



const About = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl w-full mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Sole Haven Shoes</h1>
                <img 
                    src={shopImage} 
                    alt="Sole Haven Shoes" 
                    className="w-full h-64 object-cover mb-6 rounded-lg shadow-md"
                />
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to Sole Haven Shoes, your ultimate destination for premium footwear. Our mission is to provide you with the best selection of stylish and comfortable shoes for every occasion. Whether you're looking for casual sneakers, formal dress shoes, or sporty trainers, we have something for everyone.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    At Sole Haven Shoes, we believe in quality and customer satisfaction. Our team is dedicated to curating a collection that meets the highest standards of craftsmanship and design. We are passionate about shoes and strive to make your shopping experience as enjoyable as possible.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Thank you for choosing Sole Haven Shoes. We hope you find the perfect pair of shoes that not only look great but also feel amazing.
                </p>
            </div>
        </div>
    </>
  )
}

export default About