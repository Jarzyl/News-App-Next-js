import food from "../../public/Images/food.jpg";
import stock from "../../public/Images/stock.jpg";
import benzema from "../../public/Images/benzema.webp";
import SmallCart from "./NewsCarts/SmallCart";

export default function Popular() {
  return (
    <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-4 md:mb-24">
      <div className="grid md:flex text-black px-3 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold">
          {" "}
          <span className="relative inline-block">
            <span className="absolute bottom-0.5 left-0 w-full h-2 md:h-3 bg-sky-600"></span>
            <span className="relative z-10">Popular</span>
          </span>
        </h1>
        <hr className="w-[270px] md:w-[650px] lg:w-[900px] xl:w-[1095px] mx-auto mt-4 md:ml-3 border" />
      </div>
      <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-8 mb-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-4 md:mt-10 px-4">
          <SmallCart
            photo={benzema}
            name={"Ava Wilson"}
            autor={"CNN Sport"}
            date={"23 June 2023"}
            description={
              "Summer transfer window: The biggest moves so far as Saudi Arabia becomes major factor"
            }
          />
          <SmallCart
            photo={food}
            name={"William Mitchell"}
            autor={"Scientific Jurnalist"}
            date={"23 June 2023"}
            description={
              "Lab-grown meat is coming. Here`s everything you need to know"
            }
          />
          <SmallCart
            photo={stock}
            name={"James Roberts"}
            autor={"Stock exchange journalist"}
            date={"23 June 2023"}
            description={
              "Global markets slide as recession fears grip investors"
            }
          />
        </div>
      </div>
    </div>
  );
}