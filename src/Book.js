

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 type="button" onClick={() => console.log(title)}>
        {title}
      </h1>
      <h4>{author} </h4>
      <button className="btn-ex" type="button" onClick={clickHandler}>
        {" "}
        Ref Exp{" "}
      </button>
      <button
        className="btn-ex"
        type="button"
        onClick={() => complexExample(author)}
      >
        Exp
      </button>
    </article>
  );
};


export default Book