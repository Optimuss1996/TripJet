import { useFetchTourBySlugName } from "@/hooks/useTours";
import InfoTour from "./components/InfoTour";
import TourGallery from "./components/TourGallery";
import TourReserve from "./components/TourReserve";
import { useParams } from "react-router";
import TourEquipments from "./components/TourEquipments";
import TourServices from "./components/TourServices";
import RulesTour from "./components/RulesTour";
import TourReserveMobile from "./components/TourReserveMobile";

export default function Tour() {
  const { slug } = useParams();
  const { data } = useFetchTourBySlugName(slug as string);
  if (!data) return;
  return (
    <main className="w-full bg-neutral-50 ">
      <TourGallery tourImages={data.images} />
      <section className=" flex justify-center items-start md:gap-5 w-full bg-neutral-50 mt-6 px-5 md:px-14 lg:px-[108px]">
        <InfoTour tour={data} />
        <TourReserve tour={data} />
        <TourReserveMobile tour={data} />
      </section>

      <section className="py-14">
        <div className="flex flex-col gap-14 w-full bg-neutral-50 mt-6 px-5 md:px-14 lg:px-[108px]">
          <TourEquipments />
          <TourServices />
          <RulesTour />
        </div>
      </section>
    </main>
  );
}
