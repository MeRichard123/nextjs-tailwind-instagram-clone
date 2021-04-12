import Head from "next/head";
import { FiHome, FiSend, FiCompass, FiHeart } from "react-icons/fi";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const Home = ({ names }) => {
  const RandomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="h-full m-auto flex flex-col justify-center lg:max-w-6xl">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 bg-white w-full lg:max-w-6xl z-50">
        <nav className="my-5 flex items-center justify-between mx-1.5 px-2">
          <a href="" className=" font-logo m-1.5 text-3xl">
            Instagram
          </a>
          <ul className="flex">
            <li className="m-1.5">
              <FiHome size="1.5em" />
            </li>
            <li className="m-1.5">
              <FiSend size="1.5em" />
            </li>
            <li className="m-1.5">
              <FiCompass size="1.5em" />
            </li>
            <li className="m-1.5">
              <FiHeart size="1.5em" />
            </li>
            <li className="m-1.5">
              <div className="h-6 w-6 rounded-full bg-green-400"></div>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <main className="mx-auto mt-24 lg:mt-24 lg:m-auto flex flex-1 flex-col items-center w-full">
        <section
          id="stories"
          className="mb-2 inline-flex overflow-x-auto w-full scrollbar-thin scrollbar-thumb-rounded"
        >
          <div id="profile" className="flex flex-col m-4 relative">
            <div className="block bg-white rounded-full p-1">
              <div className="h-14 w-14 bg-green-400 rounded-full"></div>
            </div>

            <p className="text-center text-sm font-thin">You</p>

            <div
              id="plus"
              className="absolute m-auto text-white font-mono top-10 right-0 bg-blue-600 h-5 w-5 rounded-full flex items-center justify-center transition transform hover:scale-110 cursor-pointer"
            >
              <p>+</p>
            </div>
          </div>
          {Array.from(Array(names.length).keys()).map((person) => (
            <div
              id="profile"
              className="flex flex-col m-4 cursor-pointer"
              key={person}
            >
              <div className="transform transition hover:scale-90">
                <div className="bg-gradient-to-tr from-yellow-400 to-pink-600 rounded-full p-0.5">
                  <div className="block bg-white rounded-full p-0.5">
                    <div className="h-14 w-14 rounded-full">
                      <img
                        src={`https://source.unsplash.com/user/goodfacesclub/${
                          100 + person
                        }x${100 + person}`}
                        alt=""
                        className="h-14 w-14 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm font-thin">
                {names[person].first}
              </p>
            </div>
          ))}
        </section>
        <div id="wrapper" className="lg:flex px-2">
          <section className="mt-5 px-5 self-start">
            {Array.from(Array(RandomRange(4, names.length + 4)).keys()).map(
              (user) => (
                <Post
                  key={user}
                  sizeLg={600 + user}
                  sizeSm={400 + user}
                  image={`https://source.unsplash.com/user/goodfacesclub/${
                    100 + user
                  }x${100 + user}`}
                  name={`${names[user]?.first} ${names[user]?.last}`}
                />
              )
            )}
          </section>
          {isDesktopOrLaptop && <Sidebar />}
        </div>
      </main>
      {isTabletOrMobile && <Footer />}
    </div>
  );
};
export async function getStaticProps(context) {
  const names = [];
  for (let i = 0; i < 16; i += 1) {
    const res = await axios.get("https://randomuser.me/api/");
    names.push(res.data.results[0].name);
  }
  return {
    props: {
      names,
    },
  };
}

export default Home;
