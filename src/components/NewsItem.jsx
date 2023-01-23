import React, { Component } from 'react'
import './card.css'

export class NewsItem extends Component {
    render() {
        let {title, url, description, publishedAt, urlToImage} = this.props.article;
    return (
    <div className="card my-3">
        <img src={urlToImage} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Updated: {publishedAt}</small></p>
            <a id="url" href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More...</a>
        </div>
    </div>
    )
  }
}

export default NewsItem;