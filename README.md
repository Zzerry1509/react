# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



// [리액트로 to do list CRUD만들기]
// 기간: 20240806 ~ 20240812

1) 추가, 수정, 삭제가 되는
투두 리스트를 만든다.
2. 디자인 은 상관없고 기능 구현이 중요
3. 쓰인 기능, 원리를 코드리뷰 해야 된다.
4. 기한은 일주일

// 만들면서 신경쓸것
// 1. 최대한 최신 문법 사용
// 2. 대리님이 알려주신거 최대한 적용
// 3. 리액트의 부트스트랩 템플릿도 적용해보기
// 4. 컴포넌트는 꼭 두개이상이어야 합니다.

1. 처음 불러올 조회 데이터를 배열을 선언 및 초기화한다.
 ==> 처음엔 배열에 담아서 조회하는걸로 생각했는데,
 ==> 대리님한테 힌트를 듣고 데이터가 없는 상태에서 등록 시 조회하는걸로 바꿨더니
 ==> 배열에 할 필요가 없고 useState로 상태값 변환하는걸로 보여줄 수 있다고 생각함.
2. 해당 데이터를 반복문(map, key)을 이용하여 데이터를 출력한다.
 ==> 왜 for문을 안쓰는지와
 ==> key를 사용하는 이유 정리하고 가기
3. input의 value를 setTodoList 값에 담아서
 ==> input의  value는 어떻게 얻어오나? > useRef()사용 
       - 참고 : https://velog.io/@roses16-dev/React-Input%EC%9D%98-value%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0




