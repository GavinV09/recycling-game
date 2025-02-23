import React from "react";
import "../App.css"; 

function TeamMembers(){
  return (
    <div className="team-members">
      <h2>Made By</h2>
      <div className="team-photos">
        <div className="team-member">
            <img src="/gavin.jpg" alt="Gavin" />
            <p>Gavin Vernier</p>
        </div>
        <div className="team-member">
            <img src="/aritro.jpg" alt="Aritro" />
            <p>Aritro Chatterjee</p>
        </div>
        <div className="team-member">
            <img src="/anya.jpg" alt="Aritro" />
            <p>Anya Shyvilka</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;