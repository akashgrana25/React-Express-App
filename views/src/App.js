import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import BookList from './components/book_list';
import BookDetail from './components/book_detail';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      book: []
    }
  }
  componentDidMount = () => {
    this.callApi()
  }


  selectBook = (bookSelected) => {
    this.setState({
      book: bookSelected
    })

    console.log(bookSelected)
  }

  callApi = async () => {
    const response = await axios.get('http://localhost:3001/series/');
    const data = response.data;
    this.setState({ books: data })

    console.log('DATA: ', data);

  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="container">
          <h1 className="jumbotron header"> My Books </h1>
            <BookList books={this.state.books} selectBookParent={this.selectBook} />
            <BookDetail book={this.state.book} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
