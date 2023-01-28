import React, {useEffect, useState} from 'react';
import cl from './TodoForm.module.css';

const TodoForm = ({ newItemForm }) => {

    const [inputValue, setInputValue] = useState("")
    const [textValue, setTextValue] = useState("")

    useEffect(() => {
        setInputValue(newItemForm.newItem.title)
        setTextValue(newItemForm.newItem.body)
    }, [newItemForm.modal])

    const doCRUD = () => {
        if (newItemForm.modal === 1) newItemForm.createItem(newItemForm.newItem)
        else newItemForm.updateItem(newItemForm.newItem)
        setInputValue("")
        setTextValue("")
        newItemForm.setNewItem(newItemForm.emptyItem)
    }

    return (
        <div className={"input-group d-flex flex-column " + cl.todoForm}>
            <div className='text-center mb-4 h2'>{inputValue && textValue
                ? "Изменить задачу"
                : "Создать задачу"
            }
            </div>
            <br/>
            <div className="mb-3">
                <label className="form-label">Заголовок</label>
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value)
                        newItemForm.setNewItem({
                            id: newItemForm.newItem.id,
                            title: e.target.value,
                            body: newItemForm.newItem.body
                        })
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Описание</label>
                <textarea
                    className="form-control"
                    rows="6"
                    value={textValue}
                    onChange={e => {
                        setTextValue(e.target.value)
                        newItemForm.setNewItem({
                            id: newItemForm.newItem.id,
                            title: newItemForm.newItem.title,
                            body: e.target.value
                        })
                    }}
                ></textarea>
            </div>
            <button
                className="btn btn-primary mb-1 rounded rounded-3"
                type="button"
                onClick={doCRUD}
            >
                {inputValue && textValue
                    ? "Изменить"
                    : "Добавить"
                }
            </button>
        </div>
    );
};

export default TodoForm;