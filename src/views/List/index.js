import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx"
import { BlockOne } from "@/components/MovieBlock"
import { Pagination } from 'antd';
import { qs } from "@/assets/utils";
import 'antd/dist/antd.css'
@inject("list")
@observer
class List extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.list;
  }

  componentDidMount() {
    const query = qs(this.props.location.search);
    this.store.getListData(query);
  }

  onChange = page => {
    const query = qs(this.props.location.search);
    const myqs = Object.assign(query,{page});
    this.store.getListData(myqs);
  }

  render() {
    const { list } = this.store;
    const toList = toJS(list);
    console.log(toList);
    return (
      <div className="list-box">
        <BlockOne data={toList.list || []} />
        <Pagination showQuickJumper defaultCurrent={1} total={Math.floor(toList.count/21)*10} onChange={this.onChange} />
      </div>
    )
  }
}

export default List;
