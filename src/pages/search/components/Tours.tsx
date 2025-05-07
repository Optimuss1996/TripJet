import { useState } from "react";
import CollapsibleMultiSelect from "./CollapsibleSelect";
import HorizontalCard from "./HorizontalCard";

const options = [
  { label: "Tehran", value: 1 },
  { label: "Shiraz", value: 2 },
  { label: "Tabriz", value: 3 },
];

export default function Tours() {
  const [selected, setSelected] = useState<typeof options>([]);
  return (
    <main className=" flex justify-between items-center gap-6 px-4 md:px-6 lg:px-20 mt-5 mb-16">
      <section className=" hidden md:block md:w-60 lg:w-64 xl:w-72  h-[1000px]  ">
        <CollapsibleMultiSelect
          options={options}
          selected={selected}
          onChange={setSelected}
          placeholder="Select cities"
        />
      </section>
      <section className=" flex-1 grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col  gap-6">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </section>
    </main>
  );
}
