import React, { Component } from 'react'

class Book extends Component {
	render() {
		return (
			<li>
				<div class="book">
					<div class="book-top">
						<div class="book-cover" style="width: 128px; height: 193px; background-image: url();"></div>
						<div class="book-shelf-changer"></div>
					<div>
					<div class="book-title">To Kill a Mockingbird</div>
					<div class="book-authors">Harper Lee</div>
				</div>
			</li>
		)
	}
}

export default Book