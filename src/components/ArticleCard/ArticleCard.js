import React, {Component} from 'react';
import LinkButton from '../LinkButton/LinkButton';
import KeywordButton from '../KeywordButton/KeywordButton';
import './ArticleCard.css';

class ArticleCard extends Component{
    constructor(){
        super();
        this.keywords = this.keywords.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
    }

    keywords(){
        const {keywords, articleID} = this.props.article;
        return keywords.split(" ").map(key=>{
            return <KeywordButton
                        key={articleID+'key'+key}
                        keywordClick={this.props.keywordClick}
                        word={key}
                    />
        })
    }

    renderDescription(description) {
        return description.map(i => {
            return (i.object === 'List')? <ul>{this.renderListItems(i.content)}</ul> : <p>{i.content}</p>;
        })
    }

    renderLinks(){
        const {links, articleID} = this.props.article;
        return links.map(myLink=>{
            return <LinkButton
                        key={articleID+'link'+myLink.linkID}
                        link={myLink.link}
                        alt={myLink.alt}
                        image={myLink.image}
                        message={myLink.message}
                    />
        })
    }

    renderListItems(list) {
        return list.map(j => <li>{j}</li>);
    }

    render(){
        const {key, image, title, description} = this.props.article;
        return(
            <div key={key} className="articleCard">
                <div className='articleData'>
                    <h3>{title}</h3>
                    {this.renderDescription(description)}
                    <div className='articleLinks'>{this.renderLinks()}</div>
                    <h6 className="f6">Keywords:</h6>
                    <div className='articleKeywords'>{this.keywords()}</div>
                </div>
                <div className='articleImage'>
                    <img src={image} alt={title}></img>
                </div>
            </div>
        )
    }
}

export default ArticleCard;