import React, {Component} from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import articleData from '../../data/articleData';
import Footer from '../../components/Footer/Footer';
import FilterButton from '../../components/FilterButton/FilterButton';
import './ArticleSearch.css';

//Comment

class ArticleSearch extends Component{
    constructor(){
        super();
        this.state = {
            search: [],
            keywords: [],
            userEntry: ''
        }
        this.cycleWords = this.cycleWords.bind(this);
        this.keywordClick = this.keywordClick.bind(this);
        this.renderKeywordButtons = this.renderKeywordButtons.bind(this);
    }

    keywordClick = (event) =>{
        let newValue = event.target.innerText;
        let testValue = this.state.keywords.find(item =>{
            return item === newValue;
        })

        //Used below
        let returnValue = (testValue)?
            this.state.keywords.filter(word => word !== newValue):
            this.state.keywords.concat([newValue]);
        
        //Update State
        this.setState({
            keywords: returnValue,
            search: this.state.userEntry.toLowerCase().trim().split(" ").concat(returnValue)
        })
    }

    renderKeywordButtons() {
        return this.state.keywords.map(keyword=>{
            return <FilterButton
                        key={`filterButton${keyword}`} 
                        keyword={keyword}
                        removeKeyword={this.keywordClick}
                    />;
        })
    }

    onSearchType = (event) => {
        if(event.target.value === ""){
            this.setState({search:[]});
        } else {
            this.setState({
                userEntry: event.target.value,
                search: event.target.value.toLowerCase().trim().split(" ").concat(this.state.keywords)
            });
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
                    <h5>Enter a keyword to filter my projects</h5>
                    <input id="searchbox" 
                        onChange={this.onSearchType}
                        className="ma2"
                        type="input"
                        name="searchBox"
                        placeholder="...search my projects"
                    ></input>
                </div>
                <div id='filters'>
                    {this.renderKeywordButtons()}
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
