import logo from "../images/react.png"
const MainHeader = () => {
  return(
    <div className="pt-3 py-1 pl-2" style={{backgroundColor: "black"}}>
      <img alt= "" src={logo} style = {{ height: "35px", verticalAlign: "top"}}>
      </img>
      <span className="h2 pt-4 text-white-50">React Course - Taskopedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
}

const SubHeader = () => {
  return <p style={subHeaderStyle}>This is an exciting course!</p>;
}

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;

