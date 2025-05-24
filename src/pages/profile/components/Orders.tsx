import Button from "@/components/common/Button";
import LikedButton from "@/components/common/LikedButton";
import Spinner from "@/components/common/spinner";
import { useFetchReserveBookings } from "@/hooks/ReactQuery/useBookins";
import { useAuth } from "@/providers/AuthProvider";
import { convertDollarToToman } from "@/utils/Commonconvert";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";

export default function Orders() {
  const { user } = useAuth();
  const { data, isLoading } = useFetchReserveBookings(user?.id as string);
  return (
    <main className=" min-h-screen bg-neutral-white border border-neutral-400 rounded-lg p-4 lg:p-8">
      <h3 className=" text-neutral-text-900 text-titleSm mb-6">
        تورهای رزرو شده
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((item) => (
          <div key={item.id}>
            {/* for bigger than md */}
            <div className="  hidden md:flex p-3 lg:p-4  items-center justify-between">
              <div className=" flex  items-center  lg:justify-between gap-5">
                <img
                  src={item.tours.image}
                  alt="image"
                  className=" object-cover object-center w-16 h-16 xl:w-20 xl:h-20 rounded-lg"
                />

                <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-between  gap-2 lg:gap-6  xl:gap-10">
                  <p className=" text-neutral-text-900 font-semibold text-bodySm xl:text-bodyMd truncate max-w-24">
                    {item.tours.title}
                  </p>

                  <div className=" flex items-center justify-between gap-3">
                    <p className="flex items-center gap-1">
                      <span className=" text-primary text-bodySm xl:text-bodyMd">
                        {convertDollarToToman(item.tours.price)}
                      </span>
                      <span className=" text-labelSm text-neutral-text-400">
                        تومان
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex items-center justify-between gap-3">
                <p className=" text-primary text-labelSm border border-primary rounded-[16px] px-2 py-1">
                  {item.status === "pending" && "در حال بررسی"}
                </p>
                <Link to={`/tour/${item.tours.name_slug}`}>
                  <div className="flex items-center justify-between gap-1">
                    <p className=" text-primary text-labelSm cursor-pointer hover:opacity-70 transition duration-300">
                      مشاهده جزییات
                    </p>
                    <IoIosArrowBack className="text-primary " size={20} />
                  </div>
                </Link>
              </div>
            </div>
            {/* for smaller than md */}

            <div className=" p-3 grid md:hidden grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-x-4 gap-y-8 ">
              <div className="border border-neutral-400 rounded-lg bg-neutral-white h-[380px]">
                <section className=" relative p-[2px] h-2/3">
                  <img
                    src={item.tours.image}
                    alt="photoTour"
                    className=" rounded-md object-cover h-full w-full"
                  />
                  <LikedButton tour={item.tours} />
                </section>

                <section className=" flex flex-col justify-between  px-3 py-4 h-1/3 cursor-pointer">
                  <div className=" flex justify-around items-center gap-2">
                    <p className="text-neutral-black text-labelMd font-medium">
                      {item.tours.title}
                    </p>
                    <div className="flex gap-2 items-center   ">
                      <p className="text-primary text-labelLg">
                        {convertDollarToToman(item.tours.price)}
                      </p>
                      <p className="text-labelSm text-neutral-text-400">
                        تومان
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/tour/${item.tours.name_slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className=" px-3 py-2 w-full text-labelSm text-neutral-white ">
                      مشاهده جزییات تور
                    </Button>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
