import React, { useState } from "react";

function App() {
  const [fullname, Setfullname] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    Setfullname((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {" "}
        Hello {fullname.fname} {fullname.lname}{" "}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// normal state code
// import React, { useState } from "react";

// function App() {
// const [first,SetFirst]=useState("")
// const [second,SetSecond]=useState("")
// function handleonChangeF(event){
//   SetFirst(event.target.value)
// }
// function handleonChangeS(event){
//   SetSecond(event.target.value)
// }

//   return (
//     <div className="container">
//       <h1> Hello {first} {second}</h1>
//       <form>
//         <input
//         onChange={handleonChangeF}
//         name="fName" placeholder="First Name" value={first}
//         />
//         <input
//         onChange={handleonChangeS}
//         name="lName" placeholder="Last Name" value={second}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
