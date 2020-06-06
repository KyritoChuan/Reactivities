import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

function App() {
  const [values, setValues] = useState([]);

  //ComponentDidMount
  useEffect(() => {
    axios.get("http://localhost:5000/api/values").then((response) => {
      setValues(response.data);
    });
  }, []);

  /*   useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/api/values");
      const data = await response.json();
      setValues(data);
    })();
  }, []); */

  console.log(values);

  return (
    <>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      {values ? (
        <List>
          {values.map((value) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      ) : (
        <b />
      )}
    </>
  );
}

export default App;
