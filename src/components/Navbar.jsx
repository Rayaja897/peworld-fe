import React from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "cookies-next";

function Navbar() {
  const router = useRouter();
  const [user, setUser] = React.useState(null);

  const handleLogout = () => {
    deleteCookie("user", {
      path: "",
    });
    deleteCookie("token", {
      path: "",
    });
  };

  React.useEffect(() => {
    if (getCookie("user")) {
      setUser(JSON.parse(getCookie("user")));
    }
  }, []);

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
          <div className="flex gap-[20px]">
            <button className="btn-primary rounded" onClick={handleLogout}>
              Log Out
            </button>
            <img src={user?.photo} width="50px" className="rounded-full" />
          </div>
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
