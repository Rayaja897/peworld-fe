import React from "react";

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="bg-primary py-[50px]">
        <div className="container mx-auto">
          <img
            src="/images/logo-white.svg"
            alt="logo"
            width="178px"
            height="50px"
            className="mb-[10px]"
          />
          <p className="text-[#fff] mb-[50px]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In
            euismod ipsum et dui <br /> rhoncus auctor.
          </p>

          <hr />

          <div className="flex justify-between mt-[20px]">
            <p className="text-[#fff]">2020 Pewworld. All right reserved</p>

            <div className="flex gap-[50px]">
              <p className="text-[#fff]">Telepon</p>
              <p className="text-[#fff]">Email</p>
            </div>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </>
  );
}

export default Footer;
