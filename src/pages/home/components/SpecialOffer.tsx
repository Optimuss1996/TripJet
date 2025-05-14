import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useFetchToursByTopDiscount } from "@/hooks/ReactQuery/useTours";
import VerticalSkeleton from "@/components/common/VerticalSkeleton";
import SliderTopDiscountTours from "@/pages/home/components/SliderToursItems";

export default function SpecialOffer() {
  const { data, isLoading } = useFetchToursByTopDiscount();

  return (
    <main className="text-neutral-300 px-5 lg:px-24 my-16">
      <div>
        <section className="flex justify-between px-2 mb-6">
          <h4 className="text-neutral-black font-semibold">پیشنهادات ویژه</h4>
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
            <SliderTopDiscountTours tours={data} />
          )}
        </section>
      </div>
    </main>
  );
}
