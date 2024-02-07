import React, { useState } from "react";
import styles from "./Login.module.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleStayLoggedInChange = () => {
    setStayLoggedIn(!stayLoggedIn);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Anmeldedaten verarbeiten
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Benutzername:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Passwort:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Eingeloggt bleiben:
        <input
          type="checkbox"
          checked={stayLoggedIn}
          onChange={handleStayLoggedInChange}
        />
      </label>
      <input type="submit" value="Anmelden" />
    </form>
  );
}

export default LoginPage;
