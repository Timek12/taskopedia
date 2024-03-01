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

  const whatWeWillLearn = "React JS";
  const totalLectures = 3;
  return (
    <div>
      <p className="text-primary">In this course, we will learn {whatWeWillLearn} by building Taskopedia</p>
      <p>Total Lecture - {totalLectures}</p>
      <ul>
        <li style={{color: "green"}}>Basic Foundation</li>
        <li>Functional and class components</li>
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
