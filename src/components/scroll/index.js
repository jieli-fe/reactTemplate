import React, {Component} from 'react';
import seamless from 'seamscroll'


class Scroll extends Component {

    componentDidMount() {
        const {elementId} = this.props
        seamless.init({
            dom: document.getElementById("elementId")
        })
    }

    render() {
        return (
            <div>Scroll</div>
        )
    }
}

export default Scroll;
