import React, {Component} from 'react';

class ArticleCard extends Component{
    keywords(){
        return this.props.keywords.split(" ").map(key=>{
            return  <span className="f7"><a href="#0">{key}</a>, </span>;
        })
    }
    render(){
        return(
            <div className="tc bg-white dib br3 ma2 grow bw2 shadow-2 w5">
                <img src={this.props.image} alt={this.props.title}></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <p className="f6">Keywords:<br/> {this.keywords()}</p>
            </div>
        )
    }
}

export default ArticleCard;