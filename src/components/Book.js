import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <div className="book">
      <Link to={`/books/${ props.data.id }`}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{props.data.bookName}</Card.Title>
            <div className="overlay">
              <div className="view">View</div>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Book;
