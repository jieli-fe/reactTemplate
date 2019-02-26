import React, {Component} from 'react';
// import '@styl/demo'
// import Footer from "../../components/footer/index"
// import Header from "@components/header/"

class Demo extends Component {
    componentDidMount() {
        window._MEIQIA('init');
    }

    showPanel = ()=>{
        window._MEIQIA('showPanel');
        console.log("showPanel")
        console.log(window._MEIQIA)
    }

    render() {
        return (
            <div>

                <button onClick={this.showPanel}>美洽</button>
            </div>
        );
    }
}

export default Demo;
