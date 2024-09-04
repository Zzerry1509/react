import { useRef, useState, useEffect } from 'react' 
import './App.css'

function ButtonList() {
  
  /* 수정 */
  const onClickEditButton = (id, spanRef) => {
    // span을 input으로 변경
    const span = spanRef.current; // input으로 바꿀 span 태그 가져와서 선언
    const input = document.createElement("input"); // 갈아끼울 input 만들기
    
    input.value = span.innerText; // 끼울 input에 span의 text 넣기
    input.onChange = {onChangeInput}; // onChange 이벤트 넣기
    
    if (span.parentNode !== null) span.parentNode.replaceChild(input, span);  // span의 부모요소에서 span 대신 input으로 교체
    
    input.addEventListener("change", function() { setNewTodo({id: id, todo: input.value});})
    
    const editBtn = document.querySelector(`button[name="${id}"][id="editBtn"]`);
    const removeBtn = document.querySelector(`button[name="${id}"][id="removeBtn"]`);
    const completeBtn = document.querySelector(`button[name="${id}"][id="completeBtn"]`);
    const cancelBtn = document.querySelector(`button[name="${id}"][id="cancelBtn"]`);
    
    editBtn.style.display = "none";
    removeBtn.style.display = "none";
    completeBtn.removeAttribute("style");
    cancelBtn.removeAttribute("style");
  };
  
  /* 수정 완료 */
  const onClickCompleteButton = (id, spanRef) => {
    if (newTodo !== null && id == newTodo.id){
      setToDoList( todoList.map(item => item.id === newTodo.id ? { ...item, todo: newTodo.todo} : item) );
      alert('수정 되었습니다 ㅠ');
      setNewTodo(null);
      
    } else{
      alert('수정 내용이 없습니다.')
    }
    
    const editBtn = document.querySelector(`button[name="${id}"][id="editBtn"]`);
    const removeBtn = document.querySelector(`button[name="${id}"][id="removeBtn"]`);
    const completeBtn = document.querySelector(`button[name="${id}"][id="completeBtn"]`);
    const cancelBtn = document.querySelector(`button[name="${id}"][id="cancelBtn"]`);
    
    completeBtn.style.display = "none";
    cancelBtn.style.display = "none";
    editBtn.removeAttribute("style");
    removeBtn.removeAttribute("style");
    
    // input을 span 변경
    const input = document.getElementById(id).querySelector('input'); 
    
    if (input.parentNode !== null) input.parentNode.replaceChild(spanRef.current, input);
  }
  
  /* 수정 취소 */
  const onClickCancelButton = (id, spanRef) => {
    const editBtn = document.querySelector(`button[name="${id}"][id="editBtn"]`);
    const removeBtn = document.querySelector(`button[name="${id}"][id="removeBtn"]`);
    const completeBtn = document.querySelector(`button[name="${id}"][id="completeBtn"]`);
    const cancelBtn = document.querySelector(`button[name="${id}"][id="cancelBtn"]`);
    
    completeBtn.style.display = "none";
    cancelBtn.style.display = "none";
    editBtn.removeAttribute("style");
    removeBtn.removeAttribute("style");
    
    // input을 span 변경
    const input = document.getElementById(id).querySelector('input'); 
    
    if (input.parentNode !== null){
      input.parentNode.replaceChild(spanRef.current, input);
    }
  }
  
  /* 수정버튼 */
  function EditButton ({items, editFunction, spanRef}){
    return (
      <button className='customBtn' id='editBtn' name={items.id} onClick={() => editFunction(items.id, spanRef)}>
      ✏️
    </button>
    );
  }

  /* 제거버튼 */
  function RemoveButton ({items, removeFunction}){
    return (
      <button className='customBtn' id="removeBtn" name={items.id} onClick={() => removeFunction(items.id)}>
        ❌
      </button>
    );
  }

  /* 수정완료 버튼 */
  function CompleteButton ({items, completeFunction, spanRef}){
    return (
      <button className='customBtn' id='completeBtn' name={items.id} onClick={() => completeFunction(items.id, spanRef)} style={{display: 'none'}}>
        ✔️
      </button>
    );
  }

  /* 수정취소 버튼 */
  function CancelButton ({items, cancelFunction, spanRef}){
    return (
      <button className='customBtn' id='cancelBtn' name={items.id} onClick={() => cancelFunction(items.id, spanRef)} style={{display: 'none'}}>
        ✖
      </button>
    );
  }
  

}
export default ButtonList