import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import Index from "@/views/Index";
import * as stores from '@/stores';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
