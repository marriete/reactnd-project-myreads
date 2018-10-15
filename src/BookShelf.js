import React, { Component } from 'react'
import PropTypes from "prop-types"

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		<div>
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">

					</ol>
				</div>
			</div>
		</div>
	}
}

export default BookShelf