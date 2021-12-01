import { useState, useEffect } from "react";
import todoApi from "./api/todoApi";
import Routers from "./router";
function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilter] = useState(1);
  const [idTodo, setIdTodo] = useState()
  const [pagination, setPagination] = useState({
    page: 1,
    totalCount: 10
  })

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data: { items, page, totalCount } } = await todoApi.getPages(filters);
        setTodos(items);
        setPagination({ page, totalCount });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos()
  }, [filters])
  const handlePageChange = (newPage) => {
    console.log("new page", newPage);
    setFilter(newPage);
  }
  const removeTodo = async (id) => {
    try {
      await todoApi.remove(id)
      const newTodo = todos.filter(item => item.id != id)
      setTodos(newTodo);
    } catch (error) {
      console.log(error);
    }
  }
  const updateTodo = async (todo, id) => {
    console.log(todo);
    try {
      await todoApi.update(todo, id);
      const newTodoUpdate = todos.map(item => item.id === id ? todo : item)
      setTodos(newTodoUpdate);
    } catch (error) {
      console.log(error);
    }
  }
  const addTodo = async (todo) => {
    console.log(todo);
    try {
      await todoApi.add(todo).then(todo => setIdTodo(todo.data.id))
      setTodos([todo, ...todos]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <main>
        <div>
          <Routers todos={todos}
            pagination={pagination}
            onPageChange={handlePageChange}
            onRemove={removeTodo}
            onUpdate={updateTodo}
            onAdd={addTodo}
            id={idTodo}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
