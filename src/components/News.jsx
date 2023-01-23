import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            category: "",
            loc: "",
            language: "en",
            loading: false,
            status:"",
            totalResults:0,
            articles:[],
            message:"",
            page:1
        };
    }

    // Can be used if a good NEWSAPI is used
    // getLoc(){
    //   fetch("https://ipinfo.io?token=a5431a7883ff5b")
    //   .then((response) => {
    //   return response.json();
    //   })
    //   .then((data) => {
    //       this.setState({loc: data.country});
    //   })
    // }
    newsGen(url,page) {
      this.setState({loading: true});
      let API_URL = `${url}&pageSize=12&page=${page}`;
      fetch(API_URL)
      .then((data)=>data.json())
      .then((parsedData)=>{
      this.setState({status: parsedData.status});
      if (this.state.status === "error") {
        this.setState({message: parsedData.message});
      }
      else{
        this.setState({articles: parsedData.articles});
        this.setState({totalResults: parsedData.totalResults});
      }
      this.setState({loading: false});
      })
    }
    prev = () => {
      this.setState({page: this.state.page - 1});
      let url = this.filterUrl(this.state.category);
      this.newsGen(url,this.state.page-1);
    }
    next = () => {
      this.setState({page: this.state.page + 1});
      let url = this.filterUrl(this.state.category);
      this.newsGen(url,this.state.page+1);
    }
    filterUrl(category){
      let url = "";
      if (category==="Top 12 Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Business Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Entertainment Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Sports Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Health Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Science Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      else if (category==="Technology Headlines"){
        url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=dd94936600b94889990bc1ebdc4cd939";
      }
      return url;
    }
    componentDidMount(){
      this.setState({category: this.props.category});
      let url = this.filterUrl(this.props.category);
      this.newsGen(url,1);
    }
    componentDidUpdate(){
      if (this.state.category !== this.props.category){
        document.title = `NewsCat ⦿ ${this.props.category}`;
        this.setState({category: this.props.category});
        let url = this.filterUrl(this.props.category);
        this.newsGen(url,1);
      }
    }
  render() {
    // this.getLoc();
    return (
      <>
      {this.state.loading ? <Spinner />:
      (
      <div className='container my-3'>
        <h1>{this.state.category}</h1>
        <hr/>
        <div className="row">
        {
          this.state.status === "error" ? <div className="alert alert-danger" role="alert">
            <strong>Error: {this.state.message}</strong>
          </div> :
          this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.id}>
                <NewsItem article={element} />
              </div>
            )
          })
        }
        </div>
      </div>
      )}
      <div className="container d-flex justify-content-evenly">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prev}>Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} type="button" className="btn btn-dark" onClick={this.next}>Next</button>
      </div>
      </>
    )
  }
}

export default News