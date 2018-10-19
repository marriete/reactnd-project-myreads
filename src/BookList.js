import React, { Component } from 'react'
import BookShelf from './BookShelf.js'

class BookList extends Component {
	render() {
		const shelfTypes = [
			{ type: "currentlyReading", title: "Currently Reading" },
			{ type: "wantToRead", title: "Want To Read" },
			{ type: "read", title: "Read" }
		];

		return (
			<div className="list-books-content">
				{shelfTypes.map((shelf) => (
					<BookShelf shelf={shelf} books={this.props.books} key={shelf.type} changeShelf={this.props.changeShelf} />
				))}
			</div>
		)
	}
}

export default BookList