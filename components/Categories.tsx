export default function Categories() {
    return (
      <>
        <div className="hidden md:flex justify-between px-5 mb-3 mt-3 text-center text-gray-500 font-semibold max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8">
            <p className="text-black">Home</p>
            <p>Climate</p>
            <p>Video</p>
            <p>World</p>
            <p>USA</p>
            <p>Business</p>
            <p>Sport</p>
            <p>Politics</p>
            <p>Tech</p>
            <p>Stories</p>
            <p>Entertainment & Arts</p>
            <p>Health</p>
            <p>Science</p>
            <p>Environement</p>
          </div>
        </div>
        <div className="hidden md:grid">
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto mt-2 border mb-2" />
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto border" />
        </div>
      </>
    );
  };