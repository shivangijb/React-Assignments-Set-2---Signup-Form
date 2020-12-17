import React from "react";


export default function Signup(){


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const [welcomeMsg, setWelcomeMsg] = React.useState("Hello ");
  const validateInputs = () => {
    if (name === "" || email === "" || phoneNumber === "" || password === "") {
      setError("All fields are mandatory");
      return false;
    }
    if (!name.match(/^[0-9a-zA-Z\s]+$/)) {
      setError("Name is not alphanumeric");
      return false;
    }
    if (!email.includes("@")) {
      setError("Email must contain @");
      return false;
    }
    if (gender !== "male" && gender !== "female" && gender !== "others") {
      setError("Please identify as male, female or others");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]+$/)) {
      setError("Phone Number must contain only numbers");
      return false;
    }
    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return false;
    }
    setError("");
    return true;
  };
  const sayHello = () => {
    let userName = "";
    for (let i = 0; email[i] !== "@"; i++) {
      userName += email[i];
    }
    setWelcomeMsg("Hello " + userName);
    return;
  };
  const handleSubmit = () => {
    setWelcomeMsg("");
    if (!validateInputs()) {
      return;
    }
    sayHello();
  };
  return(
    <div id="main">
      <h1>{welcomeMsg}</h1>
      <h3>Registration Form </h3>
      Enter Your Name:{" "}
      <input
        data-testid="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      Enter E-mail address:{" "}
      <input
        data-testid="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      Gender:{" "}
      <input
        data-testid="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <br />
      <br />
      Enter Phone-no:{" "}
      <input
        data-testid="phoneNumber"
        type="text"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />
      <br />
      Enter Password:{" "}
      <input
        data-testid="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      {error !== "" && (
        <div className="error">
          {error}
          <br />
        </div>
      )}
      <button data-testid="submit" onClick={handleSubmit}>
        Submit
      </button>
      </div>
  )
}