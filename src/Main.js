import React, {Component} from 'react';
import AboutMe from './AboutMe';
import ArticleCard from './ArticleCard';
import ArticleSearch from './ArticleSearch';

class Main extends Component{
    constructor(){
        super();
        this.openArticle = this.openArticle.bind(this);
    }
    openArticle = (action) => {
        //Code goes her for switching articles
    }
    render(){
        return(
            <main>
                <AboutMe/>
                <ArticleSearch/>
            </main>
        )
    }
}

export default Main;