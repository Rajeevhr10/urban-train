import "./Navbar.css";

const navItems = ["Home", "Contact", "Profile"];

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100vw",
        height: "50px",
        fontSize: "2rem",
        backgroundColor: "aliceblue",
        color: "black",
        display: "flex",
        justifyContent: "flex-start",
        gap: "10px",
      }}
    >
      {navItems.map((item) => {
        return (
          <div key={item} className="nav-item">
            {item}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
