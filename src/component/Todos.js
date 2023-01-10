import React,{Fragment, useState} from "react";
import TodoItem from "./TodoItem";

const Todos = () =>{
    // const viec1 = "Good morning";
    // const viec2 = "Good afternoon";
    // const viec3 = "Good evening";
    const  [todoSite, setTodos] = useState([
        {
            id:1,
            title : 'Viec 1',
            completed : false,
        },
        {
            id:2,
            title : 'Viec 2',
            completed : false
        },
        {
            id:3,
            title : 'Viec 3',
            completed : false
        },
    ])

    const markComplete = id => {
        const newTodos = todoSite.map(todo => {
            if(todo.id === id){
                todo.completed =!todo.completed;
            }
            return todo;
        })
        setTodos(newTodos);
    }
    return <Fragment>
            {
                todoSite.map(todos =>{
                    return <TodoItem todoProps = {todos} markCompleteFunc = {markComplete}/>
                })
            }
        </Fragment>
}

export default Todos;