import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";

class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const totalLectures = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p className="text-primary">
          In this course, we will learn {whatWeWillLearn} by building Taskopedia
        </p>
        <p>Total Lecture - {totalLectures}</p>
        <ul>
          <li style={{ color: "green" }}>Basic Foundation</li>
          <li>Functional and class components</li>
        </ul>

        <div className="container row">
          <Student
            className="Agata Kowalska"
            codingExperience={4}
            headshot="https://api.lorem.space/image/face?w=150&h=150"
          >
            <StudentReview />
          </Student>
          <Student
            className="Agnieszka Wlodarczyk"
            codingExperience={5}
            headshot="https://api.lorem.space/image/face?w=150&h=151"
          >
            <StudentReview />
          </Student>
          <Student
            className="Kamila Bakala"
            codingExperience={2}
            headshot="https://api.lorem.space/image/face?w=150&h=153"
          />
        </div>

        {/* <div>
          Enter Task: <input maxLength={5} readOnly={false} placeholder="Timothy"></input>
        </div> */}
      </div>
    );
  }
}

export default MainBody;
