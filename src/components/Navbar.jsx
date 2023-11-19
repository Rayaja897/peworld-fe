import React from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

function Navbar() {
  const router = useRouter();
  const user = getCookie("user") ? JSON.parse(getCookie("user")) : {};

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
        {user ? (
          <img
            src={
              user?.photo ?? "https://www.w3schools.com/w3images/avatar5.png"
            }
            width="50px"
            className="rounded-full"
          />
        ) : (
          <div className="flex gap-[10px]">
            <button
              className="btn-outline-primary rounded"
              onClick={() => router.push("/login")}
            >
              Masuk
            </button>
            <button
              className="btn-primary rounded"
              onClick={() => router.push("/register")}
            >
              Daftar
            </button>
          </div>
        )}
      </nav>
      {/* end of navbar */}
    </>
  );
}

export default Navbar;
