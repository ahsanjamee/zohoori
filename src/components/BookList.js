import React from "react";
import Book from "./Book";
const BookList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.data.map((book) => {
          return (
            <div className="col-md-4" key={book.id}>
              <Book data={book} />
            </div>  
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
