import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsChatSquareHeart } from "react-icons/bs";
import { useFetchToursByMostPopular } from "@/hooks/ReactQuery/useTours";
import VerticalSkeleton from "@/components/common/VerticalSkeleton";
import SliderPopularTours from "./SliderPopularTours";
export default function PopularTours() {
  const { data, isLoading } = useFetchToursByMostPopular();

  return (
    <main className="text-neutral-300 px-5 lg:px-24 my-16">
      <div>
        <section className="flex justify-between px-2 mb-6">
          <div className=" flex justify-start items-center gap-2">
            <BsChatSquareHeart className="text-primary " size={20} />
            <h4 className="text-neutral-black font-semibold"> تورهای محبوب</h4>
          </div>
          <div className="flex gap-x-2">
            <span className="  pl-1 py-1 pr-[2px]  bg-neutral-white shadow-drop rounded-lg cursor-pointer">
              <MdArrowForwardIos className=" text-neutral-text-500" size={20} />
            </span>
            <span className="  pl-1 py-1 pr-[2px]  bg-neutral-white shadow-drop rounded-lg cursor-pointer">
              <MdArrowBackIos className=" text-neutral-text-500" size={20} />
            </span>
          </div>
        </section>

        <section className="mb-6">
          {isLoading ? (
            <VerticalSkeleton numberOfSkeleton={4} />
          ) : (
            <SliderPopularTours tours={data} />
          )}
        </section>
      </div>
    </main>
  );
}
