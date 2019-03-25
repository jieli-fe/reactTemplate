import React, { Component } from "react";
// import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../components/scrolltotop/"
import Index from "../page/index"
import NoMatch from "../page/404"

//国际化
import intl from 'react-intl-universal';
const locales = {
    "en_US": require('../locales/en_US'),
    "zh_CN": require('../locales/zh_CN'),
};


export default class LoongShip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        }
    }

    loadLocales = () => {

        let currentLocale = intl.determineLocale({
            urlLocaleKey: "lang",
            cookieLocaleKey: "lang"
        });

        if (window.location.search) {
            currentLocale = window.location.search.split('=')[1]
        } else {
            currentLocale = 'zh_CN'
        }

        intl.init({
            currentLocale,
            locales,
        }).then(() => {
            this.setState({ initDone: true });
        });
    }

    componentDidMount() {
        this.loadLocales();
    }

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/index" component={Index} />
                        <Route component={NoMatch} />
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}
