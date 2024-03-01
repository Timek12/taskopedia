import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1>REACT COURSE</h1>;
}

function SubHeader() {
  return <p>This is an exciting course!</p>;
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
      <p>In this course, we will learn reasct js by building Taskopedia</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to lidl</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p>Happy Coding!</p>;
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
