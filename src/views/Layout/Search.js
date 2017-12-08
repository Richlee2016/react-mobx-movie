import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./layout.less";

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchValue: ""
    };
  }
  // 获取 搜索值
  setSearchValue = e => {
    this.setState({
      ...this.state,
      searchValue: e.target.value
    });
  };
  // 进行搜索
  letSearch = () => {
    if (this.state.searchValue) {
      this.props.search(this.state.searchValue)();
    }
  };

  render() {
    return (
      <div className="search">
        <div className="serachBox">
          <input placeholder="影片名/明星/导演" onChange={this.setSearchValue} />
          <i className={"iconfont icon-sousuo"} onClick={this.letSearch} />
        </div>
        <div className="rank" onClick={this.props.rankJump}>
          <i className={"iconfont icon-paixing"} />
          <span>排行榜</span>
        </div>
      </div>
    );
  }
}

Search.PropTypes = {
  rankJump: PropTypes.func,
  search: PropTypes.func
};

export default Search;
