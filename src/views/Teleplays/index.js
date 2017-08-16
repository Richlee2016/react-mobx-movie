import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function Teleplays() {
 
  return (
    <div>
        teleplays
    </div>
  );
}

Teleplays.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Teleplays);
