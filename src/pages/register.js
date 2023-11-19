import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-2 relative">
        <div
          className="w-[100%] h-[100vh] bg-[#5e50a1b3] absolute"
          style={{ backdropFilter: "opacity(0.1)" }}
        />
        <img
          src="/images/auth-banner.jpg"
          className="w-[100%] h-[100vh] object-cover"
          alt="banner"
        />
        <div className="absolute top-10 px-[10%]">
          <img src="/images/logo-white.svg" alt="logo" width="120px" />
        </div>

        <div className="absolute inset-0 flex justify-center items-center px-[10%]">
          <h1 className="text-[#fff]">
            Temukan developer berbakat & terbaik di berbagai bidang <br />
            keahlian
          </h1>
        </div>
      </div>
      <div className="col-span-2 p-[10%] bg-[#F6F7F8] h-[100vh] relative overflow-y-auto">
        <div>
          <h2 className="text-[32px] mb-[10px]">Halo, Pewpeople</h2>
          <p className="text-[18px] text-[#46505C] font-normal mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>

          <label
            htmlFor="name"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Nama Lengkap
          </label>
          <input
            id="name"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Masukan nama lengkap"
            type="text"
          />

          <label
            htmlFor="Email"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Email
          </label>
          <input
            id="email"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Masukkan alamat email"
            type="email"
          />

          <label
            htmlFor="perusahaan"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Perusahaan
          </label>
          <input
            id="perusahaan"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Masukan nama perusahaan"
            type="text"
          />

          <label
            htmlFor="jabatan"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Jabatan
          </label>
          <input
            id="jabatan"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Posisi di perusahaan Anda"
            type="text"
          />

          <label
            htmlFor="no_phone"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            No Handphone
          </label>
          <input
            id="no_phone"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Masukan no handphone"
            type="text"
          />

          <label
            htmlFor="kata-sandi"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Kata Sandi
          </label>
          <input
            id="kata-sandi"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
            placeholder="Masukkan kata sandi"
            type="password"
          />

          <label
            htmlFor="kata-sandi-2"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Konfirmasi Kata Sandi
          </label>
          <input
            id="kata-sandi-2"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED]"
            placeholder="Masukkan konfirmasi kata sandi"
            type="password"
          />

          <Link href="#">
            <p className="text-right block mr-[5%] mt-[20px]">
              Lupa kata sandi?
            </p>
          </Link>

          <button className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[20px]">
            Masuk
          </button>

          <p className="text-center mt-[20px]">
            Anda sudah punya akun?{" "}
            <Link href="/login">
              <span className="text-[#FBB017]">Masuk disini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
