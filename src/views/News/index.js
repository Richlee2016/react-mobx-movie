import React from "react";
import { connect } from "dva";
// import less from "./Home.less";
function News() {
 
  return (
    <div>
        news
    </div>
  );
}

News.propTypes = {};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(News);
