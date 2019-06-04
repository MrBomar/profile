import React, {Component} from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import articleData from '../../data/articleData';
import Footer from '../../components/Footer/Footer';
import './ArticleSearch.css';

class ArticleSearch extends Component{
    constructor(){
        super();
        this.state = {search:[]}
        this.cycleWords = this.cycleWords.bind(this);
        this.keywordClick = this.keywordClick.bind(this);
    }

    keywordClick = (event) =>{
        this.setState({search:event.target.value.toLowerCase().trim().split(" ")});
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
            return <ArticleCard
                        key={article.articleID}
                        article={article}
                        keywordClick={this.keywordClick}
                    />
        })
    }
    render(){
        return(
            <main id="articleSearch" onClick={this.props.closeNavMenu}>
                <div id="searchDiv">
                    <input id="searchbox" onChange={this.onSearchType} className="ma2" type="input" name="searchBox" placeholder="...search my projects"></input>
                </div>
                <div id="articleResults">
                    {this.cycleWords()}
                </div>
                <Footer />
            </main>
        )
    }
}

export default ArticleSearch;
