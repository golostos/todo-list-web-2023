import { useContext } from 'react';
import SetTodosContext from '../context/setTodosContext';

const useSetTodos = () => useContext(SetTodosContext)

export default useSetTodos