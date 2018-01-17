html:
<div id ="root"></div>
css:
.partha
{
  color:red;
}


react js:
function Person(props)
{
  return (
    <div className="partha">
      <h1>{props.name}</h1>
      <h2>{props.id}</h2>
    </div>
         );
}
let  a=(
  <div>
  <Person name="powerstar" id="116593" />
    <Person name="gordff" id="116" />
      </div>
);


ReactDOM.render(
  a,
  document.getElementById('root')
);
