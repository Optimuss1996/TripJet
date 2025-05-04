export default function Banner() {
  return (
    <main className="w-full h-60  md:h-auto">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/banner/BannerDesktop.avif"
        />
        <img
          src="/banner/BannerMobile.avif"
          alt="Responsive Banner"
          className="w-full h-auto object-cover rounded-xl"
        />
      </picture>
    </main>
  );
}
