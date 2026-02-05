export default function WorkHero() {
  return (
    <header className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 md:mb-16 md:grid-cols-[auto_1fr] md:items-end md:gap-6 lg:gap-8">
      <div className="min-w-0">
        <h1 className="font-dm-sans text-3xl font-medium leading-[0.97] tracking-[-0.03em] text-[#181717] sm:text-4xl md:text-4xl lg:text-5xl xl:text-[60px]">
          My Projects
        </h1>
        <img
          src="/arrow-down.svg"
          alt=""
          className="mt-4 h-8 w-7 shrink-0 sm:mt-6 sm:h-10 sm:w-8"
          aria-hidden
        />
      </div>
    </header>
  );
}
