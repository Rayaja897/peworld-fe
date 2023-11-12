import React from "react";

function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between mt-5">
        <img
          src="/images/logo-primary.svg"
          width="127px"
          height="35px"
          alt="image"
        />
        <div className="flex gap-[10px]">
          <button className="btn-outline-primary rounded">Masuk</button>
          <button className="btn-primary rounded">Daftar</button>
        </div>
      </nav>
      {/* end of navbar */}
    </>
  );
}

export default Navbar;
