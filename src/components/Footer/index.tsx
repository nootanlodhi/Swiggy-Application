import SwiggyIcon from '../../assets/images/footer-swiggy-icon.png';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black-dark text-gray-dark p-10 mt-auto">
      <img className="w-40" src={SwiggyIcon} alt="Swiggy Icon" />
      <h2 className="text-gray-dark">@2023 Bardi Technologies Pvt Ltd</h2>
    </footer>
  );
};

export default Footer;