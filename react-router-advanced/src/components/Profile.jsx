import React from "react";
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profil utilisateur</h2>
      <nav>
        <Link to="details">Détails</Link> | <Link to="settings">Paramètres</Link>
      </nav>
      <Outlet /> {/* Nested routes */}
    </div>
  );
}

export default Profile;
