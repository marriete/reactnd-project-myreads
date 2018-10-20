import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class AddBook extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
		BooksAPI.search(query).then((searchedBooks) => {
			if (searchedBooks.length > 0)
				this.setState({searchedBooks})
			else
				this.setState({searchedBooks: []})
			}).catch((error) => (
				this.setState({searchedBooks: []})
			))
	}

	render() {
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
        	{this.state.searchedBooks.length > 0 && (
          <ol className="books-grid">
						{this.state.searchedBooks.map((book) => (
							<Book book={book} books={this.props.books} changeShelf={this.props.changeShelf} key={book.id} />
						))}
          </ol>
        	)}
        </div>
      </div>
		)
	}
}

export default AddBook