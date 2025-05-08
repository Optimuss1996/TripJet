export default function GalleryGrid() {
  return (
    <div className=" w-full md:h-[450px] lg:h-[500px] grid grid-cols-4 grid-rows-2 gap-4 rounded-lg">
      <div className="col-span-2 row-span-2 bg-secondary-950 rounded-lg h-full">
        <img
          src="/public/amsterdam-2.webp"
          alt="image"
          className=" object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-2 bg-success-500 rounded-lg  h-full">
        <img
          src="/public/amsterdam-2.webp"
          alt="image"
          className=" object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="col-start-3 row-start-1 bg-primary-600  rounded-lg h-full">
        <img
          src="/public/amsterdam-2.webp"
          alt="image"
          className=" object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="col-start-4 row-start-1 bg-primary-950 rounded-lg h-full">
        <img
          src="/public/amsterdam-2.webp"
          alt="image"
          className=" object-cover object-center h-full w-full rounded-lg"
        />
      </div>
    </div>
  );
}
