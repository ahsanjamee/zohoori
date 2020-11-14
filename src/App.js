import React, { useState } from "react";
import "./App.css";
import MainBody from "./components/MainBody";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import "./styles/main.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const [dummyData, useDummyData] = useState([
    {
      id: 1,
      bookName: "Book 1",
      bookDesc: "AbcdEfgh",
      code: "1234",
      time: "04-12-2020",
    },

    {
      id: 2,
      bookName: "Book 2",
      bookDesc: "AbcdEfgh",
      code: "1234",
      time: "04-12-2020",
    },

    {
      id: 3,
      bookName: "Book 3",
      bookDesc: "AbcdEfgh",
      code: "1234",
      time: "04-12-2020",
    },

    {
      id: 4,
      bookName: "Book 4",
      bookDesc: "AbcdEfgh",
      code: "1234",
      time: "04-12-2020",
    },

    {
      id: 5,
      bookName: "Book 5",
      bookDesc: "AbcdEfgh",
      code: "1234",
      time: "04-12-2020",
    },
  ]);
  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            path="/dashboard"
            render={(props) => <MainBody {...props} data={dummyData} />}
            exact
          />
          <Route path="/" component={Login} exact />
          <Route path="/books/:id" component={BookDetails} />
          {/* <Route
            path="/books/:id"
            render={(props) => {
              const id = props.match.params.id;
              const data = dummyData.find((item) => item.id === id);
              if (data) {
                return <BookDetails {...props} {...data} />;
              }
            }}
          /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;

