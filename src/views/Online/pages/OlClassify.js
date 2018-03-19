import React from "react";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx"
import OlSwiper from "../components/OlSwiper"
import OlList from "../components/OlList"
import "./less/classify.less"
@inject("rootStore")
@observer
class Classify extends React.Component {
  constructor(props) {
    super(props);
    this.root = this.props.rootStore;
    this.store = this.props.rootStore.online;
  }

  componentDidMount() {
    const {params: {
        type
      }} = this.props.match;
    this
      .store
      .get_online_classify(type);
  }

  render() {
    const classify = toJS(this.store.classify);
    const {list} = classify;
    const mapOlList = list?list.map((o,i) => {
      return <OlList list={o} key={i} />
    }):null

    if (Object.keys(classify).length<=0){
      return (
        <div></div>
      )
    }
    return (
      <div className="ol-classify">
        <div className="olcl-slid">
          <OlSwiper/>
        </div>
        {mapOlList}
      </div>
    );
  }
}

export default Classify