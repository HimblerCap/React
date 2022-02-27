import React  from "react";
import { TodoContext } from "../TodoContext" 
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);


    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Ingrese sus TODOS</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder="Escriba una nueva tarea"
            />
            <div className="TodoForm-buttonContainer ">
                <button
                    type="button"
                    className="TodoForm-button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button"
                    type="submit"
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export { TodoForm }