import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\

// const name = ['ali', 'usman', 'bilal'];
// const names = name.map((name1) => {
//   return <h1>{name1}</h1>;
// });
// console.log(names);

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         img={firstBook.image}
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         {/* <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
//           asperiores? Error soluta saepe natus voluptatem, nesciunt velit
//           dolorem, quasi illo assumenda, omnis culpa! Natus sapiente culpa
//           obcaecati eligendi repellat ratione!
//         </p> */}
//       </Book>
//       <Book
//         img={secondBook.image}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//       <Book
//         img={thirdBook.image}
//         title={thirdBook.title}
//         author={thirdBook.author}
//       />
//     </section>
//   );
// }

//////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const Book = ({ img, title, author, children }) => {
//   // const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author} </h4>
//       {children}
//     </article>
//   );
// };

//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h1>{title}</h1>
//       <h4>{author} </h4>
//     </article>
//   );
// };

//////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="" />
//       <h1>{props.title}</h1>
//       <h4>{props.author} </h4>
//     </article>
//   );
// };

////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const Book = () => {
//   return (
//     <article className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/71VZGrjyqCL._AC_UL302_SR302,200_.jpg"
//         alt=""
//       />
//       <h1>Title: The Bad Guys</h1>
//       <h4>Arthure: Aaron Blabey </h4>
//     </article>
//   );
// };

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
