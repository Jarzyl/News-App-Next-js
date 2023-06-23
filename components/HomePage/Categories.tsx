export default function Categories() {
    return (
      <>
        <div className="hidden md:flex justify-between px-5 mb-3 mt-3 text-center text-gray-500 font-semibold md:max-w-2xl lg:max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8">
            <p className="text-black cursor-pointer">Home</p>
            <p className="cursor-pointer">Climate</p>
            <p className="cursor-pointer">Video</p>
            <p className="cursor-pointer">World</p>
            <p className="cursor-pointer">USA</p>
            <p className="cursor-pointer">Business</p>
            <p className="cursor-pointer">Sport</p>
            <p className="cursor-pointer">Politics</p>
            <p className="cursor-pointer">Tech</p>
            <p className="cursor-pointer">Stories</p>
            <p className="cursor-pointer">Entertainment & Arts</p>
            <p className="cursor-pointer">Health</p>
            <p className="cursor-pointer">Science</p>
            <p className="cursor-pointer">Environement</p>
          </div>
        </div>
        <div className="hidden md:grid">
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto mt-2 border mb-1" />
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto border" />
        </div>
      </>
    );
  };