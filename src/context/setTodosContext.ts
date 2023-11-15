import { createContext } from 'react';
import { Todo } from '../types';

const SetTodosContext = createContext<React.Dispatch<React.SetStateAction<Todo[]>> | null>(null);

export default SetTodosContext;