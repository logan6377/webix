import React, { Component } from "react";
import ReactDOM from 'react-dom'
import * as webix from 'webix/webix.js';

class Home extends Component {
    state = {
        user: [["A", "B", "C", "D", "E"], ["a", "b", "c", "d", "e"]],
        cols: ["AA", "BB", "CC", "DD", "EE"]
    }
    test(data) {
        let clm = [];
        for (let i = 0; i < data.length; i++) {
            let cl = {}
            cl["id"] = i;
            cl["header"] = data[i]
            clm.push(cl)
        }
        console.log(clm)
    }
    mainUI() {
        return webix.ui({
            view: "datatable",
            autoConfig: true,
            autoheight: true,
            autowidth: true,
            columns: this.state.cols, //this.test(this.state.cols),
            data: this.state.user
        });
    }



    async componentDidMount() {
        console.log(this.state.user)
        //this.test(this.state.cols)
        //this.state.cols.map(item => console.log(item))
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                // this.setState({ user: json })
            })

        this.ui = webix.ui(this.mainUI(), ReactDOM.findDOMNode(this))
    }
    render() {
        return <div className="app-container"></div>
    }
}

export default Home;