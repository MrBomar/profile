import React, {Component} from 'react';
import Profile from './Profile';

class ArticleViewer extends Component{
    // constructor(){
    //     super();
    //     // let history = [];
    // }
    render(){
        return (
            <main className="bg-white ma2 shadow-3">
                <Profile />
            </main>
        )
    }
}

export default ArticleViewer;