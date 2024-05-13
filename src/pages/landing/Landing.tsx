import { useEffect, useState } from "react";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primeicons/primeicons.css";

const client = generateClient<Schema>();

function Landing() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <main>
      <Button label="Check" icon="pi pi-check" />
    </main>
  );
}

export default Landing;
