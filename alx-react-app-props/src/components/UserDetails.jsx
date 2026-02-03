// src/components/UserDetails.jsx
import { useContext } from 'react';
import UserContext from '../UserContext'; // importer le contexte

function UserDetails() {
  const userData = useContext(UserContext); // ✅ récupérer les données du contexte

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
