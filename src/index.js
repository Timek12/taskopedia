import ReactDOM from "react-dom/client";
import "./CSS/style.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey"
}

function SubHeader() {
  return <p style={subHeaderStyle}>This is an exciting course!</p>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function MainBody() {
  return (
    <div>
      <p className="text-primary">In this course, we will learn reasct js by building Taskopedia</p>
      <ul>
        <li style={{color: "green"}}>Call Ben</li>
        <li>Go to lidl</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p style={{color:"grey", backgroundColor:"black"}} >Happy Coding!</p>;
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
