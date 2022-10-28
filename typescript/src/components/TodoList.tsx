import React from "react";
import "../Styles/TodoList.css";

interface TodoListProps {
	items: {
		// items is the name of the props that I define in the parent (App component)
		id: string;
		text: string;
	}[];
	onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={props.onDelete.bind(null, todo.id)}>
						DELETE THIS TASK
					</button>
				</li>
			))}
		</ul>
	);
};
