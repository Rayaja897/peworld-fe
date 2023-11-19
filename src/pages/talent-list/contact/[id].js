import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

function contactPage() {
  return (
    <>
      <Head>
        <title>Top Talent | Peworld</title>
      </Head>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>

      <main className="min-h-[60vh] bg-[#F6F7F8] pb-[40px] pt-[60px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <div className="w-[90%] h-[600px] p-[30px] bg-[#FFFFFF] rounded-lg drop-shadow-md">
              <div className="flex justify-center mt-[25px] mb-[35px]">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>

              <h1 className="text-[22px]">Louis Tomlinson</h1>
              <p className="text-[14px]">Job Name</p>

              <div className="flex gap-[10px] mb-[20px] mt-[10px]">
                <img src="/images/icon-location.svg" alt="icon" />
                <p className="text-[#9EA0A5] text-[14px]">
                  Purwokerto, Jawa Tengah
                </p>
              </div>

              <p className="text-[#9EA0A5] text-[14px] mb-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>

              <h2 className="text-[22px] mb-[20px]">Skills</h2>

              <div className="w-[300px] flex flex-wrap gap-[10px]">
                {["Phyton", "Laravel", "GO", "C++"].map((item, key) => (
                  <div
                    className="bg-[#FBB01799] border-2 border-[#FBB017] py-1 px-5 rounded"
                    key={key}
                  >
                    <p className="text-[#fff] text-[12px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[100%] col-span-2 pr-[100px] pl-[50px]">
              <h2 className="text-[32px] mb-[10px]">Hubungi Lous Tomlinson</h2>
              <p className="text-[18px] text-[#46505C] font-normal mb-[40px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <label
                htmlFor="tujuan"
                className="block text-[#9EA0A5] text-[16px] mb-[5px]"
              >
                Tujuan tentang pesan ini
              </label>
              <input
                id="tujuan"
                className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
                placeholder="Masukan tujuan tentang pesan ini"
                type="text"
              />

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
                htmlFor="deskripsi"
                className="block text-[#9EA0A5] text-[16px] mb-[5px]"
              >
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED] mb-[30px]"
                placeholder="Deskripsikan/jelaskan lebih detail "
                rows={5}
              />

              <button className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[20px]">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default contactPage;
