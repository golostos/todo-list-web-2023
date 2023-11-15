import { Box, Button, Container, TextField, Typography } from '@mui/material'
import useSetTodos from '../hooks/useSetTodos'
import { useRef } from 'react'

export default function AddTodo() {
  const setTodos = useSetTodos()
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Container maxWidth={'sm'}>
      <Typography
        variant='h5'
        component={'h3'}
        sx={{ mt: 2 }}>
        Add todo
      </Typography>
      <Box component={'form'}
        onSubmit={e => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const title = formData.get('title') as string
          if (title) {
            if (inputRef.current) inputRef.current.value = ''
            setTodos?.((prevTodos) => {
              return [...prevTodos, {
                userId: 1,
                id: prevTodos.length + 1,
                title,
                completed: false
              }]
            })
          }
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          my: 2
        }}
      >
        <TextField
          variant='outlined'
          name='title'
          placeholder='Todo title'
          inputRef={inputRef} />
        <Button type='submit'>Add todo</Button>
      </Box>
    </Container>
  )
}