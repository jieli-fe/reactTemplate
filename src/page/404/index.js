import React, {Component} from 'react';

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    notMatch = (props) => {
        setTimeout((props) => {
            this.props.history.push('/')
        }, 2000)
    }

    render() {
        return (
            <div className="router_error">
                <div className="notfound_title">404</div>
                <div className="notfound_desc">Page Not Found</div>
                <div className="notfound_text">对不起,没有找到您所需要的页面,可能是URL不确定,或者页面已被移除。</div>
                <div className="notfound_countdown">页面没找到，2秒后跳转首页</div>
            </div>
        );
    }

    componentWillMount() {
        this.notMatch()
    }
}

export default NoMatch;
