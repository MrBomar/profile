import React, {Component} from 'react';
import LinkButton from '../LinkButton/LinkButton';
import KeywordButton from '../KeywordButton/KeywordButton';
import './ArticleCard.css';

class ArticleCard extends Component{
    constructor(){
        super();
        this.keywords = this.keywords.bind(this);
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

    render(){
        const {key, image, title, description} = this.props.article;
        return(
            <div key={key} className="articleCard">
                <img src={image} alt={title}></img>
                <h2>{title}</h2>
                <p>{description}</p>
                {this.renderLinks()}
                <p className="f6">Keywords:<br/>{this.keywords()}</p>
            </div>
        )
    }
}

export default ArticleCard;