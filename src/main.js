import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import Index from "@/views/Index";
import * as stores from '@/stores';
// css
import "@/assets/css/reset.css"
import "@/assets/css/iconfont.css"
const go = () => (<div>321</div>)
ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <Index/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
