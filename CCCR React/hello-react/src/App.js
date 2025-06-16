/* import { Component } from "react";
import "./App.css";

// 함수형 컴포넌트
// 훅 기능 사용 가능(상태 관리, 라이프사이클)
// this 사용 불필요
// 상대적으로 간결

// 클래스형 컴포넌트
// 훅 기능 사용 불가(상태 관리, 라이프사이클 관리가 함수형보다 복잡함)
// this 사용 필수
// 가독성이 떨어질 수 있음

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
*/

/*
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name={3} favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
*/
/*
import { Component } from "react";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return <ValidationSample />;
  }
}
export default App;
*/
/*
import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
*/
/*
import Info from "./Info";

const App = () => {
  return <info />;
};

export default App;
*.
/*
import { useState } from "react";
import Info from './Info';

const App = () => {
  const [visible setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  )
}

export default App;
*/
/*
import Average from "./Average";

const App = () => {
  return <Average />;
};

export default App;
*/

/*

import { Component } from "react";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;

*/

/*
import { Component } from "react";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
*/

import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./Todoinsert";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
