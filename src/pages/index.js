import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home_page">
      <Head>
      <title>Home | Peworld</title>
      </Head>

      <header className="container mx-auto">
        <Navbar />
        {/* section page 1*/}
        <section className="grid grid-cols-1 md:grid-cols-3 items-center mt-[80px]">
          <div className="col-span-2">
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
        {/* end of section 1*/}
      </header>

      {/* section page 2 */}
      <section className="container mx-auto">
        <div className="grid grid-cols-2 mt-[150px]">
          <img src="/images/home-banner-2.png" alt="banner" />
          <div className="mt-[20px]">
            <h2 className="mb-[35px]">
              Kenapa harus mencari tallent <br />
              di peworld
            </h2>

            {[
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
            ]?.map((item, key) => (
              <div className="flex align-center gap-[10px] mb-[20px]" key={key}>
                <img src="/images/rounded-check-primary.svg" alt="icon" />
                <p className="text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end of section 2 */}

      {/* section page 3 */}
      <section className="container mx-auto">
        <div className="grid grid-cols-2 mt-[150px]">
          <div className="mt-[20px]">
            <h2 className="mb-[10px]">Skill Tallent</h2>
            <p className="mb-[35px]">
              di sini, terdapat banyak sekali skill yang di kuasai para talent,{" "}
              <br /> dan cocok untuk perusahaan anda
            </p>

            <div className="grid grid-cols-2 mt-[50px]">
              <div>
                {["Java", "Kotlin", "PHP", "JavaScript"]?.map((item, key) => (
                  <div
                    className="flex align-center gap-[10px] mb-[20px]"
                    key={key}
                  >
                    <img src="/images/rounded-check-warning.svg" alt="icon" />
                    <p className="text-muted">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"]?.map(
                  (item, key) => (
                    <div
                      className="flex align-center gap-[10px] mb-[20px]"
                      key={key}
                    >
                      <img src="/images/rounded-check-warning.svg" alt="icon" />
                      <p className="text-muted">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <img src="/images/home-banner-3.png" alt="banner" />
        </div>
      </section>
      {/* end of section 3 */}

      {/* CTA */}
      <section className="container mx-auto flex justify-center my-[150px]">
        <div className="cta-rounded flex justify-between items-center bg-primary w-[80%] h-[220px] px-[40px]">
          <h2 className="text-[#fff]">
            Tingkatkan kinerja perusahaan <br /> dengan talent unggulan
          </h2>
          <button className="btn-white btn-lg rounded">
            Mulai Dari Sekarang
          </button>
        </div>
      </section>
      {/* end of CTA */}

      <Footer />
    </main>
  );
}
