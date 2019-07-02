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

    removeKeyword = (event) => {
        this.setSearch(event.target.innerText, false);

    }

    keywordClick = (event) => {
        this.setSearch(event.target.innerText, true);
    }

    setSearch = (myValue, add) => {
        if(add && this.state.userEntry){
            this.setState({
                keywords: this.state.keywords.concat(myValue),
                search: this.state.userEntry.split(" ").concat(this.state.keywords.concat(myValue))
            })
        } else if (add) {
            this.setState({
                keywords: this.state.keywords.concat(myValue),
                search: this.state.keywords.concat(myValue)
            })
        } else if (!add && this.state.userEntry){
            this.setState({
                keywords: this.state.keywords.filter(i => i !== myValue),
                search: this.state.userEntry.split(" ").concat(this.state.keywords.filter(i => i !== myValue))
            })
        } else {
            this.setState({
                keywords: this.state.keywords.filter(i => i !== myValue),
                search: this.state.keywords.filter(i => i !== myValue)
            })
        }
    }

    renderKeywordButtons() {
        return this.state.keywords.map(keyword=>{
            return <FilterButton
                        key={`filterButton${keyword}`} 
                        keyword={keyword}
                        removeKeyword={this.removeKeyword}
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
        return this.buildArticles( (this.state.search.length === 0 && this.state.keywords.length === 0)?articleData:this.filteredArticles() );
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
