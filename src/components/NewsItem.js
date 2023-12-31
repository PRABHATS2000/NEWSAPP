import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
     let {title,description, imageUrl, newsUrl,author,date} = this.props;
    return (
    <div className = "my-3">
        <div className="card">
                <img src={!imageUrl? "https://images.moneycontrol.com/static-mcnews/2022/11/market-data-770x433.jpg" 
                :imageUrl} className="card-img-top" alt="..."/>
               <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by{!author?"Unknown":author} on {date}</small></p>
                    <a  rel ="noreferrer"   href={newsUrl} className="btn  btn-sm btn-dark">Read more</a>
               </div>
        </div>

    </div>
                    )
  }
}


export default NewsItem


