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
            this.setState({search:event.target.value.toLowerCase().trim().split(" ")});
        }
    }
    cycleWords = () => {
        return this.buildArticles( (this.state.search.length === 0)?articleData:this.filteredArticles() );
    }
    filteredArticles(){
        let justArticles = [];
        this.state.search.forEach(word=>{
            articleData.filter(article=>{
                return article.keywords.includes(word);
            }).forEach(item=>justArticles.push(item));
        })

        //This code makes sure to return only unique articles.
        return [...new Set(justArticles.map(art=>art.title))].map( nk => {
            return articleData.find(art=>art.title === nk);
        })
    }
    buildArticles(myData){
        return myData.map(article=>{
            return <ArticleCard image={article.image} keywords={article.keywords} title={article.title} description={article.description}/>
        })
    }
    render(){
        return(
            <div id="articleSearch">
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
