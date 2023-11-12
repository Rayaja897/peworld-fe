import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function TalentList() {
  return (
    <>
      <header className="container mx-auto pb-5">
        <Navbar />
      </header>
      {/* sub header */}
      <section className="bg-primary">
        <div className="container mx-auto py-[15px]">
          <h1 className="text-[28px] text-[#fff]">Top Jobs</h1>
        </div>
      </section>
      {/* end of sub header */}

      {/* main content */}
      <main className="min-h-[50vh] bg-[#F6F7F8] py-[40px]">
        <div className="container mx-auto">
          {/* search bar */}
          <div className="flex justify-between p-[15px] bg-[#fff] drop-shadow-xl gap-[20px] rounded-lg">
            <input
              placeholder="Search for any skill"
              className="w-full focus:ring-0"
            />
            <button className="btn-primary btn-lg rounded">Search</button>
          </div>
          {/* end off search bar */}

          {/* content */}
          <div className="p-[15px] bg-[#fff] drop-shadow-xl rounded-lg mt-[50px]">
            {/* list */}
            {[...new Array(4)].map((item, key) => (
              <div
                className={`grid grid-cols-6 gap-[50px] items-center ${
                  key === 3 ? "" : "border-b-2 pb-[30px] mb-[30px] "
                }`}
                key={key}
              >
                <div className="col-span-5 flex gap-[30px]">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt="profile"
                    width="100px"
                    className="rounded-full h-[100px]"
                  />
                  <div>
                    <h4>Louis Tomlinson</h4>
                    <p className="text-[#9EA0A5] text-[14px] mt-[5px]">
                      Web developer
                    </p>
                    <div className="flex gap-[10px] mt-[2px]">
                      <img src="/images/icon-location.svg" />
                      <p className="text-[#9EA0A5] text-[14px]">
                        Louis Tomlinson
                      </p>
                    </div>
                    <div className="flex gap-[10px] mt-[10px]">
                      {["PHP", "JavaScript", "HTML"].map((item, key) => (
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
                  <button className="btn-primary btn-lg rounded mr-[30px]">
                    Lihat Profile
                  </button>
                </div>
              </div>
            ))}
            {/* end of list */}
          </div>
          {/* end of content */}
        </div>
      </main>
      {/* end of main content */}
      <Footer />
    </>
  );
}

export default TalentList;
