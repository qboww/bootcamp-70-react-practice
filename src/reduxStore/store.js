import { createStore } from 'redux';
import { todosReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const enhancer = devToolsEnhancer();

export const store = createStore(todosReducer, enhancer);
