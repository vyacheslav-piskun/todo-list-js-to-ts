import { useEffect, useState } from 'react';

import Header from '~components/Header';
import TodoItem from '~components/TodoItem';
import TodoList from '~components/TodoList';

import { ITodo } from '../../types/types.ts';

import styles from './App.module.css';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((data: ITodo[]) => setTodos(data.slice(0, 20)))
      .catch((err) => {
        setTodos([]);
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      {todos.length ? (
        <TodoList<ITodo> todos={todos} UIItem={TodoItem} />
      ) : (
        <h2>No Items</h2>
      )}
    </div>
  );
};

export default App;
