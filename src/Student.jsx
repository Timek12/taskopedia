export default function Student(props) {
  return (
    <div className="container p-4">
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100 py-2"></img>
        </div>
        <div className="col-10">
          {props.fullName} <br />
          Coding Experience {props.codingExperience} years
        </div>
      </div>
    </div>
  );
}
