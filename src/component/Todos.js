import React,{Fragment, useState} from "react";
import TodoItem from "./TodoItem";

const Todos = () =>{
    // const viec1 = "Good morning";
    // const viec2 = "Good afternoon";
    // const viec3 = "Good evening";
    const  [todoSite, setTodos] = useState(['viec1', 'viec2', 'viec3'])
    return <Fragment>
            {
                todoSite.map(todos =>{
                    return <TodoItem todoProps = {todos}/>
                })
            }
        </Fragment>
}

export default Todos;