import React, { useState } from "react";
import BookList from './BookList';  

const Body = (props) => {
  const [author, setAuthor] = useState("Author");

  return (
    <div className="welcome-wrap">
      <div className="w-title">Welcome, {author}</div>
      <div className="w-desc">Your Book List</div>
      <BookList data={props.data}/>
      
    </div>
  );
};

export default Body;
