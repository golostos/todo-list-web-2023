import { useEffect, useState } from 'react'
import MainAppBar from './components/MainAppBar'
import { Todo } from './types'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import SetTodosContext from './context/setTodosContext'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('Request failed.')
      })
      .then((json) => setTodos(json))
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <SetTodosContext.Provider value={setTodos}>
      <MainAppBar />
      <AddTodo />
      <TodoList todos={todos} />
    </SetTodosContext.Provider>
  )
}

export default App
