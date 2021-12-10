import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next js</span> Project
      </h1>
      <p className={headerStyles.description}>static website + site builder</p>
    </div>
  );
};

export default Header;
