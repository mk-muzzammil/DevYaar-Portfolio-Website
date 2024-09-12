const Service = ({ path, title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 w-[370px] h-[450px] p-4 rounded-br-[6rem] rounded-xl  shadow-xl  hover:bg-primary hover:text-white text-black dark:text-white dark:bg-primary dark:hover:bg-primary/90 transition-all duration-300">
        <div className="w-[150px] p-4 bg-transparent rounded-sm rounded-br-[3rem] ">
          <img src={path} alt={title} />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold text-xl  ">{title}</h1>
          <p className=" text-xl tracking-tight   self-start">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
