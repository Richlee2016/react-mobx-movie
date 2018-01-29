import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import {toJS} from "mobx"
import {Bili} from "@/components/MovieBlock"
import "./Detail.less";
@inject("movie")
@observer
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.movie;
  }

  componentDidMount() {
    const { match } = this.props;
    const {movie} = this.store;
    this.store.getMovieData(Number(match.params.id));
  }

  render() {
    const { movie,bili } = this.store;
    const toJSbili = toJS(bili);
    const mapData = data => data ? data.map(o => <span key={o}>{o}</span>) : null;
    const mapUrl = urls => {
      return urls?urls.map((o,i) => {
        return (
          <div key={i}>
            {o.map((p,l) => (<span key={l}><label>{p.title}</label><label>{p.url}</label></span>))}
          </div>
        )
      }):null;
    }
    return (
      <div className="detail-box">
        <div className="movie-main">
          <div className="box-left">
            <img src={movie.img} />
          </div>
          <ul className="box-right">
            <li className="name">{movie.name}</li>
            <li className="year">
              <label>上映时间：</label>
              <span>{movie.year}</span>
            </li>
            <li className="year">
              <label>地区：</label>
              <span>{movie.area}</span>
            </li>
            <li className="classify">
              <label>类型：</label>
              {mapData(movie.classify)}
            </li>
            <li className="director">
              <label>导演：</label>
              {mapData(movie.director)}
            </li>
            <li className="actor">
              <label>演员：</label>
              {mapData(movie.actor)}
            </li>
            <li className="actor">
              <label>剧情：</label>
              <span>
                {movie.intro ? movie.intro.substr(0, 70) : ""}......<a className="look-detail">查看详情</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="msg-text vivify animationObject">
          <h3 className="line-title">精彩剧情</h3>
          <p>{movie.intro}</p>
        </div>
        <div className="bili-box">
          <h3 className="line-title">B站锦集</h3>
          <Bili data={toJSbili}/>
        </div>
        <div className="down-url">
          <h3 className="line-title">下载地址</h3>
          {mapUrl(movie.url)}
        </div>
      </div>
    );
  }
}
