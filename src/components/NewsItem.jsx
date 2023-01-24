import React, { Component } from 'react'
import './card.css'

export class NewsItem extends Component {
    render() {
        let {title, url, description, publishedAt, urlToImage, author, source} = this.props.article;
    return (
    <div className="card my-3">
        <img src={urlToImage} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                {source.name}
            </span>
            <p className="card-text">{!description?"No Description":description.slice(0,200)}</p>
            <p className="card-text"><small className="text-muted">By {author||"Unknown"} Updated at {new Date(publishedAt).toGMTString()}</small></p>
            <a id="url" href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More...</a>
        </div>
    </div>
    )
  }
}

export default NewsItem;