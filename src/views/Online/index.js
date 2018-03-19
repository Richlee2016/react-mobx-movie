import React from "react";
import { inject, observer } from "mobx-react";
import {Link} from "react-router-dom"
import {toJS} from "mobx"
import OlTag from './components/OlTag'
import Slider from 'react-slick';
import {Reg} from "@/assets/utils"
import "./online.less"

@inject("rootStore")
@observer
class Online extends React.Component {
  constructor(props){
    super(props);
    this.store = this.props.rootStore.online;
    this.state={
      settings:{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1
      }
    }
  }

  componentDidMount() {
    this.store.get_online_home();
  }

  

  render() {
    const {settings} = this.state;
    const home = toJS(this.store.home);
    const {header,hot,movie,topic,tvplay,tvshow} = home;
    if(Object.keys(home).length <=0){
      return(<div></div>)
    };
    console.log(header.tag);
    const mapTag = header.tag.map(o => {
      return (<li key={o.href}>
                  <Link to={`/online/classify/${Reg.clearUrl(o.href)}`}>{o.name}</Link>
              </li>)
    })
    return (
      <div className="ol-home">
        <div className="ol-header">
          <div className="oh-banner">
            <Slider {...settings}>
            <div><h3>1wseffdffsdfss</h3></div>
            <div><h3>2dfsdfsfdsfsdf</h3></div>
            <div><h3>3sdffsdfsddssdfsfd</h3></div>
            <div><h3>4sdfdsffsdfsdfsdf</h3></div>
            <div><h3>5fdsfdssdfsd</h3></div>
            <div><h3>fsdfdsfsd6fsdfsdfsdfds</h3></div>
            </Slider>
          </div>
          <ul className ="oh-menu">
            {mapTag}
          </ul>
        </div>
      </div>
    );
  }
}

export default Online