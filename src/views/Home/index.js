import React from "react";
import less from "./Home.less";
import { BlockOne, BlockTwo } from "@/components/Movieblock";
function Home({ homeData }) {
  const { newest, movie, teleplay, cartoon } = homeData;
  const newdata = (myArr, n) => {
    let arr = myArr ? myArr : [];
    return {
      one: arr.slice(0, n),
      two: arr.slice(n, arr.length)
    };
  };

  const sendData = {
    newest: newdata(newest, 4),
    movie: newdata(movie, 8),
    teleplay: newdata(teleplay, 5),
    cartoon: newdata(cartoon, 2)
  };

  // console.log(sendData);
  return (
    <div className={less.indexBox}>
      <BlockOne data={sendData.newest || {}} />
      <BlockTwo data={sendData.movie || {}} />
    </div>
  );
}

Home.propTypes = {};

function mapStateToProps({ home }) {
  const { homeData } = home;
  return {
    homeData
  };
}

export default Home;
