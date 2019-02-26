import React, {Component} from 'react';
import Footer from "../../components/footer/index"
import Header from "@components/header/"
import "animate.css"

import { Button} from 'antd';

//国际化
import intl from 'react-intl-universal';

class Index extends Component {
    constructor(props){
        super(props)
        this.wow = null
    }
    componentDidMount() {
        window._MEIQIA('init');
    }

    componentWillUnmount(){
        
    }

    showPanel = ()=>{
        window._MEIQIA('showPanel');
    }

    render() {
        return (
            <div>
                <Header />
                    
                    <div>this is body </div>
                <Footer />
            </div>
        );
    }
}

export default Index;
