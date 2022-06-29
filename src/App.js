import { useState ,useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import {get_todos} from "./server";

//let data=[];

function App() {
  let [selected , setSelected]=useState("all");
  let [data,setData ]=useState([]);
  useEffect(()=>{
      get_todos().then((result)=>{
          setData(result);
      });
  },[]);
  //   filter list completed
  function filter_list(list) {
    let filter_complet = list.filter(function (item) {
      return item.completed;
    });

    return filter_complet;
  }
 
  //  declare variable todos /main list (render list items) 
  let list1= selected === "completed" ? filter_list(data):data;
  let todos=list1.map((item)=>{
    return <p>
      <input type="checkbox" checked={item.completed} ></input>
      {item.todo}</p> ;
  })


  return (
    <div className="todo-list" >
      {/*   Page Header  */}
        <div className="header">
              <h2>ToDoList</h2>
              <div>
                  <span  className="filter filter-completed"  onClick={()=>{
                    setSelected("completed");
                  }}>
                    Completed
                  </span>
                 
                  <span  className="filter filter-all" onClick={()=>{
                   setSelected("all");
                  }}>
                    ALL
                  </span>
              </div>

        </div>
     {/*   render list with variable todos */}
        <div className="list">
           < div>
           {todos}
            </div>

        </div>
    </div>
    
  );
}

export default App;
