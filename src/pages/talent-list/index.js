import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";

function TalentList(props) {
  const router = useRouter();
  const [listData, setListData] = React.useState(props?.data?.slice(0, 4));
  const [currentPage, setCurrentPage] = React.useState(
    parseInt(router?.query?.page ?? 1)
  );
  const countData = Math.round(props?.data?.length / 4);

  const handlePagination = (nextPage) => {
    setCurrentPage(nextPage);

    router.push(`/talent-list?page=${nextPage}`);

    if (nextPage > 1) {
      setListData(props?.data?.slice(4 * (nextPage - 1), 4 * nextPage));
    } else {
      setListData(props?.data?.slice(0, 4));
    }
  };

  return (
    <>
      <Head>
        <title>Top Talent | Peworld</title>
      </Head>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>
      {/* sub header */}
      <section className="bg-primary">
        <div className="container mx-auto py-[15px]">
          <h1 className="text-[28px] text-[#fff]">Top Talents</h1>
        </div>
      </section>
      {/* end of sub header */}

      {/* main content */}
      <main className="min-h-[50vh] bg-[#F6F7F8] py-[40px]">
        <div className="container mx-auto">
          {/* search bar */}
          <div className="flex justify-between p-[15px] bg-[#fff] drop-shadow-xl gap-[20px] rounded-lg">
            <input
              placeholder="Search for any Skills"
              className="w-full focus:ring-0"
            />
            <button className="btn-primary btn-lg rounded">Search</button>
          </div>
          {/* end off search bar */}

          {/* content */}
          <div className="p-[15px] bg-[#fff] drop-shadow-xl rounded-lg mt-[50px]">
            {/* list */}
            {listData.map((item, key) => (
              <div
                className={`grid grid-cols-6 gap-[50px] items-center ${
                  key === listData.length - 1
                    ? ""
                    : "border-b-2 pb-[30px] mb-[30px] "
                }`}
                key={key}
              >
                <div className="col-span-5 flex gap-[30px]">
                  <img
                    src={item?.photo}
                    alt="profile"
                    width="100px"
                    className="rounded-full h-[100px]"
                  />
                  <div>
                    <h4>{item?.fullname}</h4>
                    <p className="text-[#9EA0A5] text-[14px] mt-[5px]">
                      {item?.job}
                    </p>
                    <div className="flex gap-[10px] mt-[2px]">
                      <img src="/images/icon-location.svg" />
                      <p className="text-[#9EA0A5] text-[14px]">
                        {item?.location}
                      </p>
                    </div>
                    <div className="flex gap-[10px] mt-[10px]">
                      {item?.skills.map((item, key) => (
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
                <div>
                  <button
                    className="btn-primary btn-lg rounded mr-[30px]"
                    onClick={() =>
                      router.push(`/talent-list/detail/${item?.id}`)
                    }
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            ))}
            {/* end of list */}
          </div>
          {/* end of content */}

          {/* pagination */}
          <div className="flex justify-center gap-[10px] mt-[40px]">
            {/* prev */}
            <button className="bg-[#fff] border-2 border-[#E2E5ED] w-[48px] h-[48px] rounded flex justify-center items-center">
              <img src="/images/icon-chevron-left.svg" alt="icon" />
            </button>
            {/* list */}
            {[...new Array(countData)].map((item, key) => {
              const increment = ++key;

              return (
                <button
                  className={`w-[48px] h-[48px] rounded flex justify-center items-center ${
                    increment === currentPage
                      ? "bg-[#5E50A1]"
                      : "bg-[#fff] border-2 border-[#E2E5ED] text-[#9EA0A5] text-[18px]"
                  }`}
                  key={increment}
                  onClick={() => handlePagination(increment)}
                >
                  <p>{increment}</p>
                </button>
              );
            })}
            {/* next */}
            <button className="bg-[#fff] border-2 border-[#E2E5ED] w-[48px] h-[48px] rounded flex justify-center items-center">
              <img src="/images/icon-chevron-right.svg" alt="icon" />
            </button>
          </div>
          {/* end of pagination */}
        </div>
      </main>
      {/* end of main content */}

      <Footer />
    </>
  );
}

// change to ssr page
export async function getServerSideProps() {
  const request = await axios.get("http://localhost:3000/api/list-talent");

  return {
    props: request.data,
  };
}

export default TalentList;
