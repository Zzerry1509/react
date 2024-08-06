import { useRef, useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  /* 리스트 담을 배열 선언 */
  const [todoList, setToDoList] = useState('');
  const todoInput = useRef();

  function addHandle(){
    setToDoList(todoInput.current.value);
  }

  console.log(todoList)
  
  return (
    <>
      <div>
          <span>📃할 일📃</span>
          {/* 할일 추가 */}
          <div className='add_container'>
            <input type='text' id='todo_text'placeholder='할 일을 입력하세용' ref={todoInput}></input>
            <button onClick={addHandle}>추가</button>
          </div>
          
          
          <div className='todolist'>
            <span>
              {todoList}
            </span>
          </div> 
      </div>
    </>
  )
}



export default App