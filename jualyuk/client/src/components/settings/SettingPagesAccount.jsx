import React from "react";

const SettingPagesAccount = () => {
    return (
        <div className="w-full justify-center items-center">
            <div className="relative grid gap-5 justify-center items-center mt-32">
            <h1 className="text-center font-serif text-3xl">Biodata</h1>
                <input className="flex h-10 w-96 border-gray-200 rounded-xl" placeholder="  Username" disabled></input>
                <input className="flex h-10 w-96 border-gray-200 rounded-xl" placeholder="  Email" disabled></input>
                <input className="flex h-10 w-96 border-gray-200 rounded-xl" placeholder="  Nomor Handphone" disabled></input>
                <input className="flex h-10 w-96 border-gray-200 rounded-xl" placeholder="  Nomor Telepon" disabled></input>
                <input className="flex h-10 w-96 border-gray-200 rounded-xl" placeholder="  Alamat" disabled></input>
                <input className="flex h-40 w-96 border-gray-200 rounded-xl" placeholder="  Deskripsi" disabled></input>
                <div className="flex justify-between">
                    <button className="border p-2 w-32 h-10 rounded-lg bg-white hover:bg-gray-200 hover:scale-110 transition-transform duration-300">Edit</button>
                    <button className="border p-2 w-32 h-10 rounded-lg bg-white hover:bg-gray-200 hover:scale-110 transition-transform duration-300">Simpan</button>
                </div>
            </div>

        </div>
    );
};

export default SettingPagesAccount;
