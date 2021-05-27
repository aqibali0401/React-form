import Reack, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      }
       
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });

  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <p> {fullName.msg} </p>
            <input
              type="text"
              placeholder="Enter your first name "
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />

            <input type="text"
              placeholder="Enter your Laste name "
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />

            <input type="email"
              placeholder="Enter your email "
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />

            <input type="number"
              placeholder="Enter  your phone no.  "
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />

            <input type="text"
              placeholder="Enter message  "
              name="msg"
              onChange={inputEvent}
              value={fullName.msg}
            />

            <button type="submit"  >Submit 👍</button>
          </div>
        </form>
      </div>



    </>
  );
}


export default App;