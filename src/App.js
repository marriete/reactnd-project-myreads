import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import AddBook from './AddBook.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log({books})
    })
  }

  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((response) => {
      book.shelf = newShelf
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => (b.id !== book.id)).concat(book)
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="app">
                <BookList books={this.state.books} changeShelf={this.changeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <AddBook books={this.state.books} changeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
