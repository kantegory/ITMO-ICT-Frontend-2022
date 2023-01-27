import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem/TodoItem";
import cl from './TodoList.module.css';
import TodoForm from "./TodoForm/TodoForm";
import MyModal from "../UI/MyModal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import TodoService from "../../service/TodoService";
import Spinner from "../UI/Spinner/Spinner";

const TodoList = () => {

    const [items, setItems] = useState([]);

    const [modal, setModal] = useState(0);

    const [newItem, setNewItem] = useState({
        id: 0,
        title: "",
        body: ""
    });

    const emptyItem = {
        id: 0,
        title: "",
        body: ""
    }

    const zeroItems = [{
        id: 0,
        title: "Задач нет",
        body: ""
    }]

    const newItemForm = {
        newItem,
        setNewItem,
        createItem,
        updateItem,
        modal,
        emptyItem
    }

    const [emptyList, setEmptyList] = useState(false)

    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo()
        setItems(response.data)
        if (todoError) console.log(`This is todoError "${todoError}"`)
    })

    function createItem() {
        if(!newItem || newItem.title === "") {
            alert("Введено пустое название");
            return;
        }
        let newId = 1
        if (items[0].title === zeroItems[0].title) setItems([])
        else newId = items.length + 1
        setEmptyList(false)
        const item = {
            id: newId,
            title: newItem.title,
            body: newItem.body
        };
        setItems(oldList => [...oldList, item]);
        setNewItem(emptyItem);
        setModal(0)
    }

    function deleteItem(oldItem) {
        const newArray = items.filter(item => item !== oldItem)
        if (newArray.length === 0) {
            setEmptyList(true)
            setNewItem(emptyItem);
            setItems(zeroItems)
            return
        }
        let id = 1
        newArray.map(item => {
            item.id = id
            id += 1
            return item
        })
        setItems(newArray);
    }

    function updateItem() {
        const newList = []
        items.map(item => item.id === newItem.id ? newList.push(newItem) : newList.push(item))
        setItems(newList)
        setNewItem(emptyItem);
        setModal(0)
    }

    function callTodoForm(item, modalId) {
        if (modalId === 2) {
            setNewItem(item)
            setModal(2)
        }
        else deleteItem(item)
    }

    useEffect(() => {
        fetchTodo()
    }, [])

    return (
        <Spinner isLoading={isLoading}>
            <MyModal visible={modal} setVisible={setModal}>
                <TodoForm newItemForm={newItemForm}/>
            </MyModal>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='px-4 fs-3'>Задачи</div>
                <button
                    type='button'
                    className='btn btn-primary mb-2 mt-3'
                    onClick={() => {
                        setNewItem(emptyItem)
                        setModal(1)
                    }}
                >Создать</button>
            </div>
            <div>
                <ul className="list-group">
                    {items.map(item => {
                        return(
                            <li
                                className={`pb-2 rounded-3 mt-2 border ${cl.todoItem}`}
                                key={item.id}
                            >
                                <TodoItem
                                    callTodoForm={callTodoForm}
                                    item={item}
                                    empty={emptyList}
                                />
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        </Spinner>
    );
};

export default TodoList;