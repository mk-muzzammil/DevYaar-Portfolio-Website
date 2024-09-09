const Service = ({ path, title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 w-[370px] h-[450px] p-4 rounded-br-[6rem] rounded-xl bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-gradient-to-br hover:from-primary/60 hover:to-primary/90 hover:text-white transition-all duration-300">
        <div className="w-[150px] p-4 bg-transparent rounded-sm rounded-br-[3rem] ">
          <img src={path} alt={title} />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold text-xl text-gray-800 hover:text-white">
            {title}
          </h1>
          <p className=" text-xl tracking-tight text-gray-600 hover:text-white self-start">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
