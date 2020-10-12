import { type } from "os";
import React from "react";
import { ITodo } from "../Interfaces";

type TodoListProps = {
    todos: ITodo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed){
                    classes.push('compleated')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};
