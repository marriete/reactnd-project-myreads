import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, newShelf) => {
    book.shelf = newShelf
    this.setState((prevState) => ({
      books: prevState.books.filter((b) => (b.id !== book.id)).concat(book)
    }))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="app">
          {console.log(this.state.books)}
          <BookList books={this.state.books} changeShelf={this.changeShelf} />
        </div>
      </div>
    )
  }
}

export default BooksApp
