import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

function Footer() {
  return (
    <p style={{ color: "grey", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Students Enrolled</div>
    <Student fullName="Agata Kowalska" codingExperience={3}/>
    <Student fullName="Mateusz Koziol" codingExperience={1}/>
    <Student fullName="Agnieszka Wlodarczyk" codingExperience={5}/>
    <Footer />
  </div>
);
