import React, { Component } from "react";
import PropTypes from "prop-types";
import less from "./movieblock.less";
import BlockBoxOne from './components/BlockBoxOne'
import BlockVideo from './components/BlockVideo'
import BlockHeader from './components/BlockHeader'
class BlockTwo extends React.Component{

    constructor(props){
      super();
      this.state = {
        active:0
      }
    }

    navChange(i){
      this.setState({
        ...this.state,
        active:i
      })
    }

    render(){
      let {data:{one,two}} = this.props;
      let {active} = this.state;
      const oneGroups = one.map((o,i) => {
        return (
          <div key={i} style={{display:active === i?"block":"none"}}>
            <BlockBoxOne data={o} />
          </div>
        )
      });

      return (
        <div className="blockTwo">
          <div className="boxOne">
            <BlockHeader moveHandle={i => {this.navChange(i)}}/>
            {oneGroups}
          </div>
          <div className="boxTwo">
            <BlockHeader />
            <BlockVideo />
          </div>
        </div>
      )
    }
}

BlockTwo.propTypes = {

};

export default BlockTwo;
