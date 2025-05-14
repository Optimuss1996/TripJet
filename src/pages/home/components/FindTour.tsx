/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCitiesByIsInternational } from "@/hooks/ReactQuery/useCities";
import { useState } from "react";
import Button from "@/components/common/Button";
import CitySelector from "./Combobox";
import { Link } from "react-router";
import { useGetCityId } from "@/store/useGetCityId";

export default function FindTour() {
  const [is_international, setIsInternational] = useState<boolean>(true);
  const selectedCityId = useGetCityId();

  const { data } = useCitiesByIsInternational(is_international);
  return (
    <main className=" w-11/12 min-h-44 mx-auto relative top-1/2 -translate-y-1/2 bg-neutral-white rounded-lg shadow-lg p-6 shadow-drop">
      <section className="flex w-full justify-start items-center gap-6 text-neutral-text-500 text-labelMd sm:text-labelLg ">
        <p
          onClick={() => setIsInternational(true)}
          className={`cursor-pointer  ${
            is_international
              ? "text-primary border-b-2 border-b-primary mb-1"
              : ""
          }`}
        >
          تور های خارجی
        </p>

        <p
          onClick={() => setIsInternational(false)}
          className={`cursor-pointer  ${
            !is_international
              ? "text-primary border-b-2 border-b-primary mb-1"
              : ""
          }`}
        >
          تور های داخلی
        </p>
      </section>
      <section className="flex md:flex-row flex-col justify-between items-stretch gap-y-4 gap-x-4 w-full mt-6 text-neutral-600">
        <div className=" flex-1 relative border border-blue-500 rounded-lg px-5 py-3">
          <label className="absolute right-4 -top-3 bg-white px-3 text-blue-600 text-sm font-medium bg-neutral-white">
            مبدا
          </label>
          <p className="w-full text-neutral-black">تهران</p>
        </div>
        <div className=" flex-1 relative w-full">
          <label className="absolute right-4 -top-3 bg-white px-3 text-blue-600 text-sm font-medium bg-neutral-white z-10">
            مقصد
          </label>
          <CitySelector cities={data ? data : []} />
        </div>
        <Button disabled={!selectedCityId.cityId} className=" px-4 py-2">
          <Link
            to={`/search?city_id=${selectedCityId.cityId}`}
            className=" outline-none border-none focus:border-none "
          >
            جستجو
          </Link>
        </Button>
      </section>
    </main>
  );
}
