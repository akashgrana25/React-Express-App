import React, { Component } from 'react';
import axios from 'axios';
import BookDetail from './book_detail';

export default class BookList extends Component {

    renderList() {

        return (this.props.books).map((book) => {
            console.log('Type', typeof book.title)
            console.log(book.title)
            return (
                <li
                    key={book.title}
                    onClick = {() => this.props.selectBookParent(book)}
                    className="list-group-item list-group-item-dark">

                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                <li className="list-group-item title"><h4><b>List of books</b></h4></li>
                {this.renderList()}
            </ul>
        )
    }

}