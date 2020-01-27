import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import * as webix from 'webix/webix.js';

import 'webix/webix.css';
import './App.css';
import Home from './components/Home';
import Report from './components/Report';

webix.protoUI({
  name: "react",
  defaults: {
    borderless: true
  },
  $init: function (config) {
    this.$ready.push(function () {
      ReactDOM.render(
        this.config.app,
        this.$view
      );
    });
  }
}, webix.ui.view)


class App extends Component {
  mainUI() {
    return webix.ui({
      padding: 20,
      rows: [
        {
          view: "segmented", id: 'tabbar', value: 'View1', multiview: true, options: [
            { value: 'Form', id: 'View1' },
            { value: 'Info', id: 'View2' }
          ]
        },
        {
          id: "mymultiview",
          animate: false,
          autoheight: true,
          cells: [
            { id: "View1", view: "react", app: <Home /> },
            { id: "View2", view: "react", app: <Report /> }
          ]
        }
      ]
    });
  }

  componentDidMount() {
    this.ui = webix.ui(this.mainUI(), ReactDOM.findDOMNode(this))
  }

  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;
