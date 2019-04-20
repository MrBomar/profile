import React, {Component} from 'react';
import LinkButton from './LinkButton';
import KeywordButton from './KeywordButton';
import './ArticleCard.css';

class ArticleCard extends Component{
    constructor(){
        super();
        this.keywords = this.keywords.bind(this);
    }
    keywords(){
        return this.props.keywords.split(" ").map(key=>{
            return <KeywordButton
                        key={this.props.articleID+'key'+key}
                        keywordClick={this.props.keywordClick}
                        word={key}
                    />
        })
    }
    renderLinks(){
        return this.props.links.map(myLink=>{
            return <LinkButton
                        key={this.props.articleID+'link'+myLink.linkID}
                        link={myLink.link}
                        alt={myLink.alt}
                        image={myLink.image}
                        message={myLink.message}
                    />
        })
    }
    render(){
        return(
            <div className="articleCard">
                <img src={this.props.image} alt={this.props.title}></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                {this.renderLinks()}
                <p className="f6">Keywords:<br/>{this.keywords()}</p>
            </div>
        )
    }
}

export default ArticleCard;