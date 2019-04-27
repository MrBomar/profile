import React, {Component} from 'react';
import {Transition} from 'react-transition-group';

class Main extends Component {
    render(){
        return (
            <main>
                <Transition>
                    {(status) => (
                        this.props.currentView
                    )}
                </Transition>
            </main>
        )
    }
}

export default Main;