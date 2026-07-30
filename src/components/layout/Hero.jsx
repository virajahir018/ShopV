export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-100 to-orange-100">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-12 md:flex-row md:justify-between md:px-10 lg:px-20">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 sm:text-base">
            New Collection
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Fashion For Everyone
          </h1>

          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            Discover trending styles from top brands with exciting offers.
          </p>

          <button className="mt-8 rounded-md bg-pink-600 px-8 py-3 text-white transition hover:bg-pink-700">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUNIO_y03vzgKYHdWVbH0enPtEKdyHR6kVIPMNCZlkQ&s=10"
            alt="Fashion"
            className="w-100% max-w-xs rounded-xl shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}