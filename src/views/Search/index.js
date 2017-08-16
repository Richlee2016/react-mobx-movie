import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function Search() {
 
  return (
    <div>
        Search
    </div>
  );
}

Search.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Search);
