import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//create => {type:"TODO_CREATED", payload:""}
//delete => {type: "TODO_DELETED", payload: ""}

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [ip, setIp] = useState("");
  const [up, setUp] = useState("");
  const [cut, setCut] = useState(false);



  return (
    <div>
      <input value={ip} onChange={(e) => setIp(e.target.value)} type="text" />
      <input value={up} onChange={(e) => setUp(e.target.value)} type="text" />
      
   
      <button onClick={() => dispatch({ type: "TODO_CREATED", payload:{data:ip,line:false}  },setIp(''))}>
        Submit
      </button>

      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <p  onClick={()=>{setCut(!cut)}} style={{textDecoration:(todo.line === true)?"line-through":"none"}}>{todo.data}</p>
          
         < button
            onClick={() => dispatch({ type: "TODO_UPDATED", payload:{ix:index,update:up}},setUp(''))}
          >
            Update
          </button>
          <button
            onClick={() => dispatch({ type: "TODO_DELETED", payload: index })}
          >
            Delete
          </button>
          <button
            onClick={() => dispatch({ type: "TODO_LINE", payload:{ix:index}  })}
          >
            line
          </button>
        </div>
      ))}
    </div>
  );
}

//{todos:[]}
export default App;
