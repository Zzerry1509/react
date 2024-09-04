import { useRef, useState, useEffect } from 'react' 
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import TodoItemList from "../src/TodoItemList.jsx"

// 초기 컴포넌트(todo 입력)
function App() {
  /* 리스트 담을 배열 선언 [{"id": "85ce2f27", "todo": "test1"}, {"id": "5a81f", "todo": "test2"}, ..] */
  const [todoList, setTodoList] = useState([]);

  console.log(todoList)

  /* 컴포넌트가 마운트될 때 로컬 스토리지에서 Todo 리스트 불러오기 */
  useEffect(() => {
    const savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

   /* Todo 리스트가 변경될 때마다 로컬 스토리지에 저장 */
   useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  /* input 입력 내용 값 가져오기용 상태 선언 */
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  /* (새로등록) input 입력값 변경되었을때 event */
  const onChangeInput = (e) => { 
    setText(e.target.value);
  };

  /* 추가 */
  const onClickAddButton = () => { 
    if (text.trim() !== ''){
      const newList = {
        id: uuidv4(),
        todo: text
      }
      /* 새로 입력한 todo 내용 추가 */
      setTodoList([...todoList, newList]);

      console.log(newList)

      /* input 값 초기화 및 포커싱 */
      setText(''); 
      inputRef.current.focus();
    }
  };

  /* 수정 처리 */
  const editTodo = (id, newTodo) => {
    setTodoList(todoList.map(item => 
      item.id === id ? { ...item, todo: newTodo } : item
    ));
  };

  /* 삭제 처리 */
  const removeTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  return (
    <>
      <span>📃할 일📃</span>
      {/* 할일 추가 */}
      <div className='add_container'>
        <input className='content' type='text' id='todo_text' placeholder='내용을 입력하세요.' ref={inputRef} onChange={onChangeInput} value={text}></input>
        <button className="btn" onClick={onClickAddButton}> 추가 </button>
      </div>

      {/* 할 일 목록 */}
      {todoList.map(item => 
        <TodoItemList 
          key={item.id} 
          todoObj={item} 
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
        )}
    </>
  )
}


export default App