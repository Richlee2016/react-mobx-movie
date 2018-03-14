import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter,Route,Switch,HashRouter} from "react-router-dom";
import Index from "@/views/Index";
import * as stores from '@/stores';
ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <Switch>
        <Index/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
