const Footer = () => {
  return (
    <footer  className="w-full text-center border-t border-gray-300 p-4 mt-8 position-fixed bottom-0 bg-white">
      <p className="text-[14px] text-['#666'] m-0" >© {new Date().getFullYear()} Sarfaraj Shaikh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;