import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function Cartoons() {
 
  return (
    <div>
        Cartoons
    </div>
  );
}

Cartoons.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Cartoons);
