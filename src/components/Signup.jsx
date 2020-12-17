import React from "react";


export default function Signup(){
  let [name, setName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [gender, setGender] = React.useState("Male");
  let [phoneNumber, setPhonenumber] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [error, setError] = React.useState("");
  let [welcome, setWelcome] = React.useState("");

  function handleName(event){
    name = event.target.value;
    setName(name);
    error="";
    setError(error);
    //return false;
  }
  function handleEmail(event){
    email = event.target.value;
    setEmail(email);
    error="";
    setError(error);
    //return false;
  }
  function handleGender(event){
    gender = event.target.value;
    setGender(gender);
    error="";
    setError(error);
    //return false;
  }
  function handlePhoneNumber(event){
    phoneNumber = event.target.value;
    setPhonenumber(phoneNumber);
    error="";
    setError(error);
    //return false;
  }
  function handlePassword(event){
    password = event.target.value;
    setPassword(password);
    error="";
    setError(error);
    
  }

  function validateInputs(){
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    
    if(name === "" || email === "" || gender === "" || phoneNumber === "" || password === "" ){
      error = "All fields are mandatory";
      setError(error);
      return false;
    }
    if(!(name.match(alphanumeric))){
      error = "Name is not alphanumeric";
      setError(error);
      return false;
    }
    if(! email.includes("@")){
      
      error = "Email must contain @";
      setError(error);
      return false;
    }
    if(! (gender==="Male"|| gender === "Female" || gender === "Other")){
      error = "Please identify as male, female or others";
      setError(error);
      
      return false;
    }
    if(!phoneNumber.match(numbers)){
      error = "Phone Number must contain only numbers";
      setError(error);
      return false;

    }
    if(password.length < 6){
      error = "Password must contain atleast 6 letters";
      setError(error);
      return false;

    }
    setError("");
    return true;
    
    // let i = email.indexOf("@");
    // let userName = email.slice(0,i);
    // welcome = `Hello ${userName}`;
    // console.log(userName);
    // setWelcome(welcome);
    // console.log(`Hello ${userName}`);
  }

  const sayHello = () => {
    let userName = "";
    for (let i = 0; email[i] !== "@"; i++) {
      userName += email[i];
    }
    setWelcome("Hello " + userName);
    return;
  };
  const handleSubmit = () => {
    //setWelcome("");
    if (!validateInputs()) {
      return;
    }
    sayHello();
  };

  return(
    <>
    <h1>{welcome}</h1>
    <input name="name" data-testId="name" placeholder="Name" value={name} type="text" onChange={handleName}/>
    <input name="email" data-testId="email" placeholder="Email Address" value={email} type="text" onChange={handleEmail}/>
    <input name="gender" data-testId="gender" placeholder="Gender" type="text" value={gender} onChange={handleGender}/>
    <input name="phoneNumber" data-testId="phoneNumber" placeholder="Phone Number" value={phoneNumber} type="text" onChange={handlePhoneNumber}/>
    <input name="password" data-testId="password" placeholder="Password" value={password} type="password" onChange={handlePassword}/>
    <button data-testId="submit" onClick={handleSubmit}>Submit</button>
    {error}
    {welcome}
    </>
  )
}