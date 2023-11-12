export default function Home() {
  return (
    <main id="home_page">
      <header className="container mx-auto">
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

        <section className="grid grid-cols-2 items-center mt-[80px]">
          <div>
            <h1 className="mb-[20px]">
              Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
            </h1>
            <p className="mb-[30px]">
              Temukan talenta terbaik yang cocok dengan perusahaan anda <br />
              dari banyaknya talenta di seluruh indonesia.
            </p>
            <button className="btn-primary btn-lg rounded">
              Mulai Dari Sekarang
            </button>
          </div>

          <img
            src="/images/home-banner-1.png"
            width="600px"
            height="600px"
            alt="banner"
          />
        </section>
      </header>
    </main>
  );
}
