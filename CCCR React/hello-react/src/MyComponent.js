// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// 내보내기 기능을 탑재
// export default: import 하는 주체가 이름을 바꿀 수 있음
// import x from '...';
// 모듈당(파일당) 하나만 선언 가능

// export: import 하는 주체가 이름을 바꿀 수 없음
// import { x } from '...';
// 모듈당(파일당) 여러개 선언 가능

// export default MyComponent;

import React from "react";
import propTypes from "prop-types";
// 변수 이름이 무조건 props 여야 하는지? -> X
// 자식 컴포넌트의 매개변수의 이름은 무조건 props일 필요는 없음
// 매개변수의 어떠한 이름도 전부 부포 컴포넌트에서 값을 불러오겠다는 의미

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};

export default MyComponent;
