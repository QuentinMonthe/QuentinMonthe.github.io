import React from "react";

const Logo = () => {
  return (
    <div>
      <br />
      <div className="logo">
        {/* Les images importees dans la balise IMG sont prennent leur source dans le repertoire "public" */}
        <img src="./logo192.png" alt="Logo de l'application" />
        <h3>App World React</h3>
      </div>
    </div>
  );
};

export default Logo;
