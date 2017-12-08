import React from "react";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import less from "./Home.less";
import {BlockOne} from "@/components/MovieBlock"

@inject("movie")
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.movie;
  }

  componentDidMount() {
    this.store.getPageData();
  }
  
  render() {
    const {location} = this.props;
    const home = toJS(this.store.index);
    const {banner,box} = home;
    return (
          <div className="index-box">
            {banner?<BlockOne data={banner} /> : null}
          </div>
        );
  }
}

