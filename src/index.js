import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

root.render(
<div>
  <MainBody/>
</div>);
