import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Todolist from "../components/Todolist";

export default function Lab07() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    { title: "Play Game", complete: true },
    { title: "Read Book", complete: false },
  ]);
  {
    /*const [selTheme, setSeltheme] = useState(themes.dark);*/
  }

  //--------------------------------------------------------------------- การโหลดการเชฟ
  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (todoStr === null)
      //fix for null only
      //undefine,null,0,""
      setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodo();
  }, [todos]);

  const saveTodo = (idx) => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };
  //----------------------------------------------------------------------------

  const onKeyHandler = (e) => {
    if (e.key !== "Enter") return;

    const newTodos = [{ title: todoInput, complete: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].complete = !todos[idx].complete;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const titleA = todos[idx].title;
    const completeA = todos[idx].complete;
    todos[idx].title = todos[idx - 1].title;
    todos[idx].complete = todos[idx - 1].complete;
    todos[idx - 1].title = titleA;
    todos[idx - 1].complete = completeA;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const titleB = todos[idx + 1].title;
    const completeB = todos[idx + 1].complete;
    todos[idx + 1].title = todos[idx].title;
    todos[idx + 1].complete = todos[idx].complete;
    todos[idx].title = titleB;
    todos[idx].complete = completeB;
    setTodos([...todos]);
  };

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };

  const toggleTheme = () => {
    if (selTheme.name === "light") setSeltheme(themes.dark);
    else setSeltheme(themes.light);
  };
  return (
    <div>
      <Navbar>
        <p class="text-center h2 font-monospace">Todolist </p>
        <div>
          {/* Input */}
          <input
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
            onChange={(event) => {
              setTodoInput(event.target.value);
            }}
            value={todoInput}
            onKeyUp={onKeyHandler}
          />
          {/*  <button className="btn btn-dark" onClick={toggleTheme}>
        {themes.name === "light" && <IconSunHigh />}
        {themes.name === "dark" && <IconMoon />}
      </button>
*/}
          <>
            {todos.map((todo, i) => (
              <Todolist
                title={todo.title}
                complete={todo.complete}
                key={i}
                onDelete={() => deleteTodo(i)}
                onMark={() => markTodo(i)}
                onMoveUp={() => moveUp(i)}
                onMoveDown={() => moveDown(i)}
              />
            ))}
          </>

          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((Count) => Count.complete == false).length}
              ){" "}
            </span>
            <span className="text-success">
              Completed (
              {todos.filter((Count) => Count.complete == true).length})
            </span>
          </p>
        </div>
        <p class="text-center mt-5 mb-5">
          Copyright © 2021 630610766 Setsiri Matewin
        </p>
      </Navbar>
    </div>
  );
}
