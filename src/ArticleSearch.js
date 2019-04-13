import React, {Component} from 'react';
import ArticleCard from './ArticleCard'
import articleData from './data/articleData';

class ArticleSearch extends Component{
    constructor(){
        super();
        this.state = {search:[]}
        this.cycleWords = this.cycleWords.bind(this);
    }
    onSearchType = (event) => {
        if(event.target.value === ""){
            this.setState({search:[]});
        } else {
            this.setState({search:event.target.value.toLowerCase().split(" ")});
        }
    }
    cycleWords = () => {
        if(this.state.search.length === 0){
            return articleData.map(article=>{
                return <ArticleCard image={article.image} keywords={article.keywords} title={article.title} description={article.description}/>
            })
        } else {
            let foundArticles = this.state.search.map(word=> {
                return articleData.find(article => {
                    return article.keywords.includes(word);
                });
            })
            if(foundArticles.length > 0){
                if(typeof foundArticles[0] !== "undefined"){                
                    return foundArticles.map(article=>{
                        return <ArticleCard image={article.image} keywords={article.keywords} title={article.title} description={article.description}/>
                    }) 
                }
            }
        };
    }
    render(){
        return(
            <div>
                <div>
                    <input id="searchbox" onChange={this.onSearchType} className="ma2" type="input" name="searchBox" placeholder="...search my projects"></input>
                    <button onClick={this.cycleWords}>GO!</button>
                </div>
                <div className="center">
                    {this.cycleWords()}
                </div>
            </div>
        )
    }
}

export default ArticleSearch;
