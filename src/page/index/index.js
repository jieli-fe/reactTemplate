import React, {Component} from 'react';
import Footer from "../../components/footer/index"
import Header from "@components/header/"

import { Button} from 'antd';

//国际化
import intl from 'react-intl-universal';

class Index extends Component {

    componentDidMount() {
    }

    componentWillUnmount(){
        
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
