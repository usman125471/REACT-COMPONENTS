import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71VZGrjyqCL._AC_UL302_SR302,200_.jpg"
        alt=""
      />
      <h1>Title: The Bad Guys</h1>
      <h4>Arthure: Aaron Blabey </h4>
    </article>
  );
};

///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const Title = () => {
//   return (
//     <section>
//       <h1>Title: The Bad Guys</h1>
//     </section>
//   );
// };
// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/71VZGrjyqCL._AC_UL302_SR302,200_.jpg"
//     alt=""
//   />
// );

// const Author = () => {
//   return <h4>Arthure: Aaron Blabey </h4>;
// };

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

ReactDom.render(<BookList />, document.getElementById("root"));
