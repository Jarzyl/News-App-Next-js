const navigationItems = [
  { id: 1, label: "Climate" },
  { id: 2, label: "Video" },
  { id: 3, label: "World" },
  { id: 4, label: "USA" },
  { id: 5, label: "Business" },
  { id: 6, label: "Sport" },
  { id: 7, label: "Politics" },
  { id: 8, label: "Tech" },
  { id: 9, label: "Stories" },
  { id: 10, label: "Entertainment & Arts" },
  { id: 11, label: "Health" },
  { id: 12, label: "Science" },
  { id: 13, label: "Environment" },
];

export default function Categories() {
  return (
    <>
      <div className="hidden md:flex justify-between px-5 mb-3 mt-3 text-center font-semibold md:max-w-2xl lg:max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8">
          <p className="text-black cursor-pointer">Home</p>
          {navigationItems.map((item) => (
            <p className="text-gray-500 cursor-pointer" key={item.id}>
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden md:grid">
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto mt-2 border mb-1" />
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1250px] mx-auto border" />
      </div>
    </>
  );
}