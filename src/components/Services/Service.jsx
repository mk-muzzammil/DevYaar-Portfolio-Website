const Service = ({ path, title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 w-[370px] h-[400px]  p-4 rounded-br-[6rem] rounded-xl hover:bg-primary/90 hover:text-white transition-colors duration-300">
        <div className="w-[100px] p-4 bg-black/10 rounded-sm rounded-br-[3rem] ">
          <img src={path} alt={title} />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold text-xl  ">{title}</h1>
          <p className="text-center text-xl tracking-tight">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
