import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";

function Detail(props) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Top Talent | Peworld</title>
      </Head>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>
      <main className="min-h-[50vh] bg-[#F6F7F8] py-[40px]">
        <div className="container mx-auto">
          <div className="bg-[#FFFFFF] drop-shadow-lg rounded-lg">
            <div className="bg-[#5E50A1] h-[200px] rounded-t-lg" />
            <div className="flex justify-center mt-[-80px] mb-[30px]">
              <img
                src={data?.photo}
                alt="avatar"
                className="w-[150px] h-[150px] rounded-full"
              />
            </div>
            <h1 className="text-center text-[22px]">{data?.fullname}</h1>
            <p className="text-center text-[15px]">{data?.job}</p>

            <div className="flex justify-center gap-[10px] mt-[2px] mb-[30px]">
              <img src="/images/icon-location.svg" alt="location" />
              <p className="text-[#9EA0A5]">{data?.location}</p>
            </div>
            <div className="flex justify-center mb-[30px]">
              <div className="w-[600px]">
                <p className="text-center text-[#9EA0A5] text-[15px]">
                  {data?.desc}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn-primary btn-lg rounded w-[300px] mb-[50px]">
                Hire
              </button>
            </div>
            <h2 className="text-center text-[22px] mb-[20px]">Skill</h2>
            <div className="flex justify-center pb-[50px]">
              <div className="w-[300px] flex justify-center flex-wrap gap-[10px]">
                {data?.skills?.map((item, key) => (
                  <div
                    className="bg-[#FBB01799] border-2 border-[#FBB017] py-1 px-5 rounded"
                    key={key}
                  >
                    <p className="text-[#fff] text-[12px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// change to ssr page
export async function getServerSideProps(props) {
  const { id } = props.params;

  const request = await axios.get(
    `http://localhost:3000/api/list-talent?id=${id}`
  );

  return {
    props: request.data,
  };
}

export default Detail;
