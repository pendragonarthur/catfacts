import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  const handleOpenGit = () => {
    window.open(`https://github.com/pendragonarthur`);
  };

  const handleOpenLink = () => {
    window.open(`https://www.linkedin.com/in/arthur-quaresma-670873214/`);
  };

  return (
    <>
      <header>
        <div className="inside-container">
          <div onClick={handleOpenGit}>
            <BsGithub className="icon" />
          </div>
          <div onClick={handleOpenLink}>
            <BsLinkedin className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
