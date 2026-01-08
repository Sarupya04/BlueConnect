const Header = () => {
  return (
    <header className="w-full md:w-[70%] h-[18%] md:h-full bg-gradient-to-br from-purple-800 to-purple-300 rounded-t-[10px] md:rounded-l-[10px] md:rounded-tr-none p-5 flex flex-col justify-start items-start text-white ">
      <h1 className="text-2xl md:text-4xl font-bold pt-8">LINK FLOW</h1>
      <p className="text-xs md:text-base mt-1">Enter your data to share via Bluetooth</p>
    </header>
  );
};

export default Header;
