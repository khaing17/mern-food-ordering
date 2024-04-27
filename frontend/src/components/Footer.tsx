const Footer = () => {
  return (
    <div className="py-10 bg-orange-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold text-white tracking-tight">
          MERNEAT.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Term & services</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
