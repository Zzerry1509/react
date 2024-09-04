import { useRef, useState, useEffect} from 'react' 
import './App.css'

// todo list 출력(list별 수정,삭제 버튼)
function TodoItemList(props) {
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태 관리
  const spanRef = useRef(null);
  const [editStatus, setEditStatus] = useState(false); // 수정모드 플래그
  const [inputValue, setInputValue] = useState(props.todoObj.todo); // 수정 input 내용 저장
  const todoObj = props.todoObj;

  /* 수정버튼 클릭 시 editStatus(수정모드) true */
  const handleEditClick = () => {
    setEditStatus(true);
  };

  /* (수정) input 내용 수정될때마다 값 set */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /* 수정 처리 호출 */
  const handleSaveClick = () => {
    setEditStatus(false); // 저장버튼 클릭 시 editStatus(수정모드) false

    const isConfirmed = confirm('내용을 수정하시겠습니까?');
    if (isConfirmed) {
      props.editTodo(props.todoObj.id, inputValue); // 수정된 내용 App.jsx에 보내서 처리
      alert('수정되었습니다.');
    }
  };

  /* 삭제 처리 호출 */
  const handleRemoveClick = () => {
    const isConfirmed = confirm('삭제하시겠습니까?');
    if (isConfirmed) {
      props.removeTodo(props.todoObj.id, inputValue);  // 삭제된 내용 App.jsx에 보내서 처리
      alert('삭제되었습니다!!!!!!!');
    }
  };

  /* 컴포넌트가 마운트될 때 로컬 스토리지에서 체크박스 상태를 복원 */
  // 마운트(Mount): 컴포넌트가 처음으로 DOM에 추가되고 렌더링되는 시점
  useEffect(() => {
    const savedChecked = localStorage.getItem(`todo-${todoObj.id}-checked`);
    if (savedChecked !== null) {
      setIsChecked(JSON.parse(savedChecked));
    }
  }, [todoObj.id]);

  /* 체크박스 상태가 변경될 때 로컬 스토리지에 상태를 저장 */
  useEffect(() => {
    localStorage.setItem(`todo-${todoObj.id}-checked`, JSON.stringify(isChecked));
  }, [isChecked, todoObj.id]);

  /* 체크박스 상태 변경 핸들러 */
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="todoList" id={todoObj.id} >
      {/* 체크박스 */}
      <input
        type="checkbox"
        className="isChecked"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {/* editStatus(수정모드)에 따라 input or span 출력 */}
      {editStatus ? (
        <input
          className='mr_3'
          ref={spanRef}
          value={inputValue}
          onChange={handleInputChange}
        />
      ) : (
        <span 
          className='mr_3' 
          ref={spanRef}
          style={{
            textDecoration: isChecked ? 'line-through' : 'none',
            color: isChecked ? 'gray' : 'black',
          }}
        > {todoObj.todo}</span> 
      )}

      {/* editStatus(수정모드)에 따라 button 출력 */}
      {editStatus ? (
        <button onClick={handleSaveClick}>저장</button>
      ) : (
        <button onClick={handleEditClick}>수정</button>
      )}
      <button onClick={handleRemoveClick}>삭제</button>
    </div>
  );
}

export default TodoItemList