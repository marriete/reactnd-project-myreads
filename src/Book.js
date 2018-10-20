import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'

class Book extends Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
						<ShelfChanger book={this.props.book} books={this.props.books}  changeShelf={this.props.changeShelf} />
					</div>
					<div className="book-title">{this.props.book.title}</div>
					<div className="book-authors">{this.props.book.authors}</div>
				</div>
			</li>
		)
	}
}

export default Book