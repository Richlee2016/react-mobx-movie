import React from "react";
import { inject, observer } from "mobx-react";
import less from "./Home.less";
import { BlockOne, BlockTwo } from "@/components/Movieblock";
import { home as rxiosHome } from "@/servers/server";

@inject("home")
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.home;
  }

  componentDidMount() {
    this.store.getData();
  }

  render() {
    let { newest, movie, teleplay, cartoon } = this.store.data;
    const newdata = (myArr, n) => {
      let arr = myArr ? myArr : [];
      return {
        one: arr.slice(0, n),
        two: arr.slice(n, arr.length)
      };
    };

    const sendData = {
      newest: newdata(newest, 4),
      movie: newdata(movie, 8),
      teleplay: newdata(teleplay, 5),
      cartoon: newdata(cartoon, 2)
    };
    return (
          <div className="indexBox">
            <BlockOne data={sendData.newest || {}} />
            <BlockTwo data={sendData.movie || {}} />
          </div>
        );
  }
}

