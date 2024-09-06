// src/components/DisplayUnit.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Jeans from '../assets/jeans.png';
import Kacamata from '../assets/kacamata.png';
import Kaos from '../assets/kaos.png';
import KaosKaki from '../assets/kaoskaki.png';
import Kemeja from '../assets/kemeja.png';
import Sepatu from '../assets/sepatu.png';
import { BsCartPlusFill } from 'react-icons/bs';
import { CiViewList } from "react-icons/ci";


const images = [
    { src: Jeans, alt: 'Jeans', name: 'Jeans', price: 50 },
    { src: Kacamata, alt: 'Kacamata', name: 'Kacamata', price: 30 },
    { src: Kaos, alt: 'Kaos', name: 'Kaos', price: 20 },
    { src: KaosKaki, alt: 'KaosKaki', name: 'KaosKaki', price: 10 },
    { src: Kemeja, alt: 'Kemeja', name: 'Kemeja', price: 40 },
    { src: Sepatu, alt: 'Sepatu', name: 'Sepatu', price: 60 },
];

const DisplayUnit = () => {
    const navigate = useNavigate();

    const handleOpenProductPage = (image, name, price) => {
        navigate('/product', {
            state: { image, name, price }
        });
    };

    return (
        <div>
            <div className="pt-5 gap-5 grid grid-cols-6 grid-rows-4 justify-items-center">
                {images.map((image, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex">
                        <div className="flex w-56 h-64">
                            <div className="w-full h-32">
                                <div className="h-full flex justify-center mt-10">
                                    <img className="" src={image.src} alt={image.alt} />
                                </div>
                                <div className="flex h-full items-center justify-center">
                                    <BsCartPlusFill size={30} onClick={() => handleOpenProductPage(image.src, image.name, image.price)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayUnit;
