import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-slate-800 grid h-screen place-items-center">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-5xl sm:text-3xl md:text-8xl lg:text-6xl xl:text-9xl text-center text-gray-50 dark:text-white font-black leading-7 md:leading-10">
              Formly-js
            </h1>
            <span className=" text-indigo-700 block mt-10 md:mt-20 lg:mt-20 xl:mt-10 text-center text-2xl md:text-4xl lg:text-5xl xl:text-5xl">
              Create easily reusable forms with a simple API and make it more
              reactive!
            </span>
          </div>
          <div className="flex justify-center items-center gap-10">
            <a
              href="https://solid.formly-js.com/"
              title="Solid Formly"
              className="shadow-lg shadow-sky-700/50 w-40 h-40 xs:w-32 xs:h-32 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-solid-700 bg-solid transition duration-150 ease-in-out hover:bg-sky-600 rounded-full text-white px-4 sm:px-10 border border-sky-700 py-2 sm:py-4"
            >
              <img
                className="w-full h-auto xs:h-16 md:h-auto z-10"
                alt="SolidJS"
                src="https://www.solidjs.com/assets/logo.123b04bc.svg"
              />
              <span className="block mt-2 w-full text-center lg:font-bold text-sm">
                Solid Formly
              </span>
            </a>
            <a
              href="https://svelte.formly-js.com/"
              title="Svelte Formly"
              className="shadow-lg shadow-orange-700/50 w-40 h-40 xs:w-32 xs:h-32 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 bg-orange-700 transition duration-150 ease-in-out hover:bg-orange-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-10 border border-orange-700 py-2 sm:py-4 text-sm"
            >
              <img
                className="w-full h-auto xs:h-16 md:h-auto z-10"
                alt="SolidJS"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fsveltejs%2Fsvelte%2F29052aba7d0b78316d3a52aef1d7ddd54fe6ca84%2Fsite%2Fstatic%2Fimages%2Fsvelte-android-chrome-512.png&f=1&nofb=1"
              />
              <span className="block mt-2 w-full text-center lg:font-bold text-sm">
                Svelte Formly
              </span>
            </a>
          </div>

          <footer className="mt-20 text-slate-500 font-semibold">
            Copyright 2022 with ♥ by{" "}
            <a
              href="https://github.com/kamalkech"
              title="Creator Kamal Sahmoud"
            >
              Kamal Sahmoud
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
