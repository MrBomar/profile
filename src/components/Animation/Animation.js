import React, {Component} from 'react';
import './Animation.css';

class Animation extends Component {
    componentDidMount() {
        this.props.startCount();
    }

    render() {
        return (
            <iframe id="intro" title="easy" className="appIframe" src='./profile/index.html'/>
        )
    }
}

export default Animation;