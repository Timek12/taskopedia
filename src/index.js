import ReactDOM from "react-dom/client";
import "./CSS/style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgrey",
};

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
      <p className="text-primary">
        In this course, we will learn {whatWeWillLearn} by building Taskopedia
      </p>
      <p>Total Lecture - {totalLectures}</p>
      <ul>
        <li style={{ color: "green" }}>Basic Foundation</li>
        <li>Functional and class components</li>
      </ul>
      {/* <div>
        Enter Task: <input maxLength={5} readOnly={false} placeholder="Timothy"></input>
      </div> */}
    </div>
  );
}

function Students() {
  const fullName = "Kris Walley";
  const programmingExperience = 2;
  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            className="w-100"
          ></img>
        </div>
        <div className="col-10">
          {fullName} <br />
          Coding Experience {programmingExperience} years
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "grey", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
