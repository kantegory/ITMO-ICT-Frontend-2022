const TodoItem = ({empty, item, callTodoForm}) => {

    if (empty) {
        return (
            <div className="my-2 fs-4 text-break text-center">{item.title}</div>
        )
    }

    return (
        <>
            <div className="d-flex justify-content-start fs-5">{item.id}</div>
            <div className="my-2 fs-4 text-break text-center"> {item.title}</div>
            <p className="mb-4 fs-6 text-break">{item.body}</p>
            <div className='mt-4 d-flex justify-content-between'>
                <button
                    type='button'
                    className='btn btn-outline-primary'
                    onClick={() => callTodoForm(item, 2)}
                >
                    Редактировать
                </button>
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => callTodoForm(item, 3)}
                >
                    Сделано
                </button>
            </div>
        </>
    );
};

export default TodoItem;