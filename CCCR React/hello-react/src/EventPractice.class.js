import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    // name이 가리키는 곳은 input 태그 내부의 name
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.StaticRange.username + ": " + this.state.message);
    this.setState({ username: "", message: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handlerClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
