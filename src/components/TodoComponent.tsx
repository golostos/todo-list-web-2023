import React from 'react'
import { Todo } from '../types'
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import EditIcon from '../icons/EditIcon'
import useSetTodos from '../hooks/useSetTodos'

type Props = {
  todo: Todo
}

function TodoComponentBase({ todo }: Props) {
  const setTodos = useSetTodos()  
  const labelId = `checkbox-list-label-${todo.id}`
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={e => {
          e.stopPropagation()
        }}>
          <EditIcon />
        </IconButton>
      }
      disablePadding
      onClick={() => {
        setTodos?.((prevTodos) => {
          return prevTodos.map((t) => {
            if (t.id === todo.id) {
              return {
                ...t,
                completed: !t.completed
              }
            }
            return t
          })
        })
      }}
    >
      <ListItemButton role={undefined} onClick={() => {}} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.title} />
      </ListItemButton>
    </ListItem>
  )
}

const TodoComponent = React.memo(TodoComponentBase)

export default TodoComponent