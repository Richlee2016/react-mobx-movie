import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function Ranks() {
 
  return (
    <div>
        Ranks
    </div>
  );
}

Ranks.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Ranks);
