import React from "react";
import { useRef } from "react";
import "../Styles/NewTodo.css";

interface NewTodoProps {
	onAddTask: (todoText: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const SubmitHandler = (event: React.FormEvent) => {
		if (textInputRef.current!.value) {
			event.preventDefault();
			const enteredText = textInputRef.current!.value;
			props.onAddTask(enteredText);
			textInputRef.current!.value = "";
		} else {
			alert("You should type something!");
		}
	};

	return (
		<form onSubmit={SubmitHandler}>
			<div className='form-control'>
				<label htmlFor='todo-text'>
					Type a task that you want to add in your to do list
				</label>
				<input type='text' id='todo-text' ref={textInputRef} />
			</div>
			<button type='submit'>Submit the New Task</button>
		</form>
	);
};
