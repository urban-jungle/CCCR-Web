import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  // 에러를 잡기 위한 컴포넌트
  // 매개변수로 받는 error는 state의 error와는 다른 error
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    // 에러가 발생했다면 "에러가 발생했습니다!" 출력
    // this.props.children의 의미는 LifeCycleSample 컴포넌트를 의미
    if (this.state.error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
