import { combineReducers } from 'redux';
import { todosReducers } from './todos';

export const reducers = combineReducers({
  todos: todosReducers,
});
