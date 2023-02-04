import { useState } from "react"


export default function todo(){
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        isEditing: false,
        index: -1,
    })

    // const todoChange = (e) =>{
    //     setTodo({
    //         ...todo,
    //         [e.target.name]: e.target.value
    //     })
    // }
    const titleChange = (e) => {
        setTodo({...todo, title: e.target.value})
    }
    const descriptionChange = (e) => {
        setTodo({...todo, description: e.target.value})
    }

    const buttonClicked = () => {
        // let newTodo = [...todos]
        // newTodo.push(todo);
        // setTodos(newTodo);
        setTodos([...todos, todo])
        setTodo({title: '', description: ''})
    }
    
    function deleteClicked(index){
        let modifedTodos = todos.filter((data, todoIndex) => {
            if(index !== todoIndex)
                return data;
        })
        setTodos(modifedTodos)
    }

    function editClicked(index, todoItem){
        setTodo({title: todoItem.title, description: todoItem.description, isEditing: true, index: index})
    }

    function updateClicked(){
        let newTodos = todos.map((data, index) => {
            if(index === todo.index){
                return {title: todo.title, description: todo.description}
            }
            return data;
        })
        setTodos(newTodos)
        setTodo({...todo, title: '', description: '', isEditing: false})
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold">Todos</div>
                    Title: <input name="title" value={todo.title} onChange={titleChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    Description: <input name="description" value={todo.description} onChange={descriptionChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    {todo.isEditing ? (
                        <button onClick={updateClicked} className="mt-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Update
                        </button>
                    ): (
                        <button onClick={buttonClicked} className="mt-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Add todo
                        </button>
                    )}
                </div>
                <ul>
                    {todos.map((todo, index) => {
                        return(
                            <li className="text-lg pt-5 flex" key={index}>
                                <div className="grow">
                                    <div className="font-bold">{index+1}: {todo.title}</div>
                                    <div>{todo.description}</div>
                                </div>
                                <div>
                                    <button onClick={() => editClicked(index, todo)} className="mt-3 mr-4 shadow bg-indigo-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteClicked(index)} className="mt-3 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}