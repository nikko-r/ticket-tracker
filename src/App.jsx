import "./App.scss";
import teamArrData from "./data/team.js";
import TeamTiles from "./components/TeamTiles/TeamTiles";
import logo from "./logo.svg";

// const teamJSX = teamArrData.map(object => (
//    //console.log (`${object.id} ${object.name} ${object.role}`)
//    <p>`${object.id} ${object.name} ${object.role}`</p>
//  ))

//teamJSX()

console.log(teamArrData[1]);

function App() {
  return (
    <div className="App">
      <section className="team-container">
        <TeamTiles teamArr={teamArrData} />
      </section>
    </div>
  );
}

export default App;
