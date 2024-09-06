// src/pages/ProductPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Prima from "../../assets/pembayaran/prima.png";
import AtmBersama from "../../assets/pembayaran/atmbersama.png";
import Visa from "../../assets/pembayaran/visa.png";
import Indomaret from "../../assets/pembayaran/indomaret.png";
import Alfamart from "../../assets/pembayaran/alfamart.svg";
import Cod from "../../assets/pembayaran/cod.png";


const ProductPage = () => {
  const location = useLocation();
  const { image, name, price } = location.state || {};
  const [showPembayaran, setShowPembayaran] = useState(false);

  // Hitung PPN
  const taxRate = 0.1; // 10% PPN
  const tax = price * taxRate;
  const totalPrice = price + tax;

  const handlePembayaran = () => {
    setShowPembayaran(true);
  };

  if (!image || !name || !price) {
    return <div>Item tidak ditemukan.</div>;
  }

  return (
    <div>
      <div className="absolute p-2">
        <Link to="/">
          <button className="border pl-6 pr-6 pt-2 pb-2 rounded-2xl hover:bg-gray-200">Back</button>
        </Link>
      </div>
      <div className="p-4 flex justify-center grid-cols-2 gap-2">
        <div className="w-96 justify-center mt-24 border p-4 rounded-xl shadow-xl ">
          <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>
          <div className="flex items-center justify-center">
            <img src={image} alt={name} className="w-40 max-w-lg mb-4" />
          </div>
          <div className="mb-4 flex justify-center">
            <h2 className="text-xl font-semibold">Harga: ${price.toFixed(2)}</h2>
            <h2 className="text-xl font-semibold">PPN (10%): ${tax.toFixed(2)}</h2>
            <h2 className="text-xl font-semibold">Total Harga: ${totalPrice.toFixed(2)}</h2>
          </div>
          <div className="mt-5 grid gap-4">
            <h2 className="text-xl font-semibold mb-2 justify-center flex">Opsi Pembayaran</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-300" onClick={handlePembayaran}>Bayar Sekarang</button>
          </div>
        </div>

        {showPembayaran && (
          <div className="w-80 mt-24 border rounded-xl shadow-lg">
            <div className="">
              <div className="flex justify-center font-bold border-b-2 p-2">Metode Pembayaran</div>
              <div className="mt-2 flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="pl-2 p-2 flex items-center ">Transfer Bank</div>
                <div className="flex ml-20">
                  <img src={Prima} className="w-6 h-5 rounded-sm mr-2" />
                  <img src={AtmBersama} className="w-6 h-5 rounded-sm mr-2" />
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="pl-2 p-2 flex items-center ">Virtual Account (VA)</div>
                <div className="flex">
                  <img src={Prima} className="w-6 h-5 rounded-sm mr-2" />
                  <img src={AtmBersama} className="w-6 h-5 rounded-sm mr-2" />
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="pl-2 p-2 flex items-center ">Credit Card</div>
                <div className="flex">
                  <img src={Visa} className="w-6 h-5 rounded-sm mr-2" />
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="pl-2 p-2 flex items-center">Convenience Store</div>
                <div className="flex ml-20">
                  <img src={Indomaret} className="w-6 h-5 rounded-sm mr-2" />
                  <img src={Alfamart} className="w-6 h-5 rounded-sm mr-2" />
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md">
                <div className="pl-2 p-2 flex items-center">Cash on Delivery</div>
                <div className="flex ml-20">
                  <img src={Cod} className="w-6 h-5 rounded-sm mr-2" />
                </div>
              </div>
              <div className="pl-2 p-1 flex items-center">Qris</div>
              <div className="pl-2 p-1 flex items-center">Cicilan</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
