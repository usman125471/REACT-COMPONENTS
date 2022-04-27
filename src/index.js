import React from "react";
import CreateRoot from "react-dom";

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\

function Greetings() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Usman!</h1>;
const Message = () => (
  <h2>
    <p>learning react. </p>
  </h2>
);

/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\

// function Greetings() {
//   return (
//     <div>
//       <h3>Usman! here and that's my first component.</h3>
//       <ul>
//         <li>
//           <a href='#'>About</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

////////////////////////\\\\\\\\\\\\\\\\\\\\\
// function Greetings() {
//   return <div>
//     <h1>Usman!</h1>
//   </div>
// }

//////////////////////\\\\\\\\\\\\\\\\\\\\

// const Greetings = () => {
//   return React.createElement('h1', {},'Myself Usman! Learning React.')
//  }

////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\
// const Greetings = () => {
//   return React.createElement("div", {}, React.createElement('h1',{},'Web Devolper!' ));
//  }

CreateRoot.render(<Greetings />, document.getElementById("root"));
