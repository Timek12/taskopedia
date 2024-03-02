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

export default function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}
