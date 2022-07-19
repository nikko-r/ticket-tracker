import "./TeamTiles.scss";

const TeamTiles = ({ teamArr }) => {
  console.log(teamArr);
  const teamListJSX = teamArr.map((object) => (
    <div className="team-tile">
      <p className="team-key">{object.id}</p>
      <p className="team-name">{object.name}</p>
      <p className="team-role">{object.role}</p>
      <div className="team-counter">
        <button className="team-counter__button">-</button>
        <p className="team-counter__counter">0</p>
        <button className="team-counter__button">+</button>
      </div>
    </div>
    //needs a key or it errors ask tutor about it
  ));

  return (
    <>
      <div className="team-tiles">{teamListJSX}</div>
    </>
  );
};

export default TeamTiles;
