import cx from 'classnames';
import { FC } from 'react';

import { ITodo } from '../../types/types';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={cx(styles.wrapper, { [styles.completed]: todo.completed })}>
      <h2 className={styles.title}>{todo.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut
        deserunt dicta illo quae qui. Accusamus cum dolorem excepturi nostrum
        odio officiis porro repellendus soluta!
      </p>

      {todo.completed && <p className={styles.tip}>completed</p>}
    </li>
  );
};

export default TodoItem;
