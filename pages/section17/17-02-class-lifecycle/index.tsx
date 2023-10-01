import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("사라지기 전에 실행!");
    // 예) 채팅방 나가기 API
  }

  onClickCountup = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = () => {
    void Router.push("/");
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountup}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
