import React, {Component} from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom';

//国际化
import intl from 'react-intl-universal';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            lang: (window.location.search && window.location.search.split('=')[1]) || 'zh_CN'
        }
    }

    changeLocale = () => {
        let lang;
        this.state.lang === "zh_CN" ? lang="en_US" : lang="zh_CN"
        this.setLocale(lang)
    }

    setLocale = (lang)=>{
        this.setState({lang: lang},()=>{
            console.log(lang)
            window.location.search = `?lang=${lang}`;
        })

    }

    showLocale = (lang) =>{

        if(!lang){
            lang = this.state.lang
        }
        let tmp
        switch (lang) {
            case 'en_US':
                tmp = '中文';
                break;
            case 'zh_CN':
                tmp = 'English';
                break;
            default:
                tmp = '中文';
        }

        return tmp
    }

    chooseLocale = (lang) =>{
        var tmpLang
        switch(lang){
            case 'en':
                tmpLang = 'en_US';
                break;
            case 'zh':
                tmpLang = 'zh_CN';
                break;
            default:
                tmpLang = 'zh_CN';
        }

        return tmpLang
    }

    render() {
        return (
            <div> this is header</div>
        );
    }
}

export default Header;
