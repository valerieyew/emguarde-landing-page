const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center p-3 font-heading  ">
      <p>© Copyright {currentYear} Kangen Wiz Global </p>
    </footer>
  );
};
export default Footer;
