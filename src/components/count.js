import React from "react";
import { inject, observer } from "mobx-react";

@inject("count")
@observer

export default class Count extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.count;
	}

  render() {
    const {add,mine,mycount} = this.store;
    return (
      <div className="count">
        <button onClick={mine}>-</button>
        <span>{mycount}</span>
        <button onClick={add}>+</button>
      </div>
    );
  }
}
