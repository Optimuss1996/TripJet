export default function Home() {
  return (
    <main className=" w-full">
      <div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/public/banner/BannerDesktop.avif"
          />
          <img
            src="/public/banner/BannerMobile.avif"
            alt="Responsive Banner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </picture>
      </div>
    </main>
  );
}
