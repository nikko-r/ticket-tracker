import "./App.scss";
import teamArrData from "./data/team.js";
import TeamTile from "./components/TeamTile/TeamTile";
import logo from "./logo.svg";

const teamTiles = teamArrData.map((object) => {
  return (
    <TeamTile
      key={object.id}
      name={object.name}
      role={object.role}
      id={object.id}
    />
  );
});

// const teamJSX = teamArrData.map(object => (
//    //console.log (`${object.id} ${object.name} ${object.role}`)
//    <p>`${object.id} ${object.name} ${object.role}`</p>
//  ))

//teamJSX()

console.log(teamArrData[1]);

function App() {
  return (
    <div className="App">
      <section className="team-container">{teamTiles}</section>
    </div>
  );
}

export default App;
