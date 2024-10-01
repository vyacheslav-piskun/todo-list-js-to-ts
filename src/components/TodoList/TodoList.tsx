import { FC } from 'react';

import styles from './TodoList.module.css';

interface TodoListProps<T extends { id: number }> {
  todos: T[];
  UIItem: FC<{ todo: T }>;
}

const TodoList = <T extends { id: number }>({
  todos,
  UIItem,
}: TodoListProps<T>) => {
  return (
    <ul className={styles.wrapper}>
      {todos.map((item) => (
        <UIItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default TodoList;
