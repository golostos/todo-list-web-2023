import { Container, List, Typography } from '@mui/material'
import { Todo } from '../types'
import TodoComponent from './TodoComponent'

type Props = {
  todos: Todo[]
}

export default function TodoList({ todos }: Props) {
  return (
    <Container maxWidth={'sm'}>
      <Typography variant='h5' component={'h3'}>Todolist</Typography>
      <List>
        {todos.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </List>
    </Container>
  )
}