import React from "react";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";
import axios from "axios";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email,
        password,
      })
      .then((result) => {
        setCookie("token", result?.data?.data?.token, { maxAge: 60 * 6 * 24 });
        setCookie(
          "user",
          JSON.stringify(result?.data?.data?.user, { maxAge: 60 * 6 * 24 })
        );

        window.location.href = "/";
      })
      .catch((err) => {
        const { email, password } = err?.response?.data?.messages ?? {};

        setErrMsg(
          email?.message ??
            password?.message ??
            err?.response?.data?.messages ??
            "Something wrong in our app, try again later."
        );
      })
      .finally(() => setIsLoading(false));
  };

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
      <div className="col-span-2 p-[10%] bg-[#F6F7F8] h-[100vh] flex items-center relative">
        <div>
          <h2 className="text-[32px] mb-[10px]">Halo, Pewpeople</h2>
          <p className="text-[18px] text-[#46505C] font-normal mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>

          {errMsg ? (
            <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg w-[95%] mb-[30px]">
              {errMsg}
            </div>
          ) : null}

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
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="kata-sandi"
            className="block text-[#9EA0A5] text-[16px] mb-[5px]"
          >
            Kata Sandi
          </label>
          <input
            id="kata-sandi"
            className="w-[95%] p-3 rounded-lg border border-2 border-solid border-[#E2E5ED]"
            placeholder="Masukkan kata sandi"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link href="#">
            <p className="text-right block mr-[5%] mt-[20px]">
              Lupa kata sandi?
            </p>
          </Link>

          <button
            className="w-[95%] p-3 rounded-lg bg-[#FBB017] text-[#fff] font-medium mt-[20px]"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>

          <p className="text-center mt-[20px]">
            Anda belum punya akun?{" "}
            <Link href="/register">
              <span className="text-[#FBB017]">Daftar disini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// ini untuk mengubah halaman menjadi static html
export async function getServerSideProps({ req, res }) {
  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  if (user && token) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
