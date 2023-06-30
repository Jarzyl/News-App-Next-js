import MenuItem from "@/components/Weather/Left/MenuItem";
import { FaCloudSun, FaHome, FaRegMap } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const menuItems = [
  { icon: FaRegMap, text: "Map" },
  { icon: IoLocationOutline, text: "Saved Locations" },
  { icon: HiOutlineCalendarDays, text: "Calendar" },
];

export default function Panel() {
  return (
    <>
      <div className="hidden lg:grid justify-center w-[220px] h-[600px] border rounded-lg mx-auto lg:mx-0">
        <div className="flex gap-3 mt-6 px-3">
          <FaCloudSun size={25} className="text-sky-600" />
          <p className="text-center text-xl text-black font-semibold">
            Weather Cart
          </p>
        </div>
        <div>
          <div className="mt-16">
          <div className="flex gap-3 mt-5 px-3">
    <FaHome size={25} className="text-sky-600" />
    <p className="text-sky-600 text-center text-lg cursor-pointer">Dashboard</p>
  </div>
            {menuItems.map((item, index) => (
              <MenuItem key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
        <div className="h-[290px]"></div>
      </div>
    </>
  );
}