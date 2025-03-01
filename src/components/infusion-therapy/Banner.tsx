
const Banner = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80"
          alt="Infusion Therapy Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Infusion Therapy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Complete range of infusion systems, IV cannulas, and administration sets designed for safe and accurate fluid delivery
        </p>
      </div>
    </section>
  );
};

export default Banner;
