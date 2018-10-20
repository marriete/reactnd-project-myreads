import React, { Component } from 'react'

class ShelfChanger extends Component {
	updateShelf = (e) => {
		this.props.changeShelf(this.props.book, e.target.value)
	}

	render() {

		let currentShelf = "none"

		for (let b of this.props.books) {
			if (b.id === this.props.book.id) {
				currentShelf = b.shelf
				break
			}
		}

		return (
			<div className="book-shelf-changer">
				<select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger