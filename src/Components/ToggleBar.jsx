const ToggleBar = () => {
  return (
    <section className="w-[200px]  bg-transparent absolute top-[80px] right-3 rounded-md py-2 lg:hidden">
      <div className="flex flex-col justify-start items-start gap-2 max-md:items-end">
        <a href="/" className="font-serif text-lg text-slate-800 ">
          Home
        </a>
        <a href="/" className="font-serif text-lg text-slate-800">
          About us
        </a>
        <a href="/" className="font-serif text-lg text-slate-800">
          Products
        </a>
        <a href="/" className="font-serif text-lg text-slate-800">
          Contact us
        </a>
        <button className="mt-2 p-2 rounded-md text-white hover:bg-blue-300 hover:cursor-pointer font-montserrat text-lg bg-blue-600">
          Sign in/Expore now
        </button>
      </div>
    </section>
  );
};

export default ToggleBar;
