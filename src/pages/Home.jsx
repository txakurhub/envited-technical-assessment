import Landing from "../assets/Landing.svg";
const Home = () => {
  return (
    <main class="container flex flex-col h-full p-16 px-4 xl:grid xl:grid-cols-2">
      {/* image xl */}
      <div class="hidden xl:block xl:h-[90%] flex-grow mb-5 drop-shadow-2xl md:mx-4 xl:mx-24 md:mb-0 self-center home-img">
        <img alt="envited" src={Landing} />
      </div>

      <div class="text-center xl:text-right xl:self-center xl:mr-24">
        <h1 class="mb-5 text-4xl font-bold lg:mb-8 md:text-4xl lg:text-6xl xl:text-6xl text-primary1 title">
          <span class="block ">Imagine if</span>
          <span class="block text-transparent h-[100%] bg-clip-text bg-gradient-to-r from-primary3 to-primary4">
            Snapchat
          </span>
          <span class="block">had events.</span>
        </h1>

        <p class="mx-5 text-neutral1 md:mr-44 md:ml-44 md:text-xl lg:mb-12 lg:text-3xl xl:mx-0 xl:description description-sm">
          Easily host and share events with your friends across any social media.
        </p>

        <div class="flex justify-center mx-0 my-12 md:w-auto flex-grow mb-5 drop-shadow-2xl xl:hidden">
          <img alt="envited" src={Landing} class="max-w-[65%]" />
        </div>

        <div class="grid place-items-center xl:place-items-end mt-8">
          <a
            class="relative px-12 py-3 lg:px-28 xl:px-20 rounded-lg md:text-lg shadow-lg bg-gradient-to-r from-primary3 to-primary4 "
            href="/create"
          >
            <span>🎉</span>
            <span class="font-bold text-white"> Create my event</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
