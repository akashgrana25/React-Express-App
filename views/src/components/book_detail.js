import React, { Component } from 'react';

export default class BookDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: []
        }
    }

    render() {
        if (this.props.book == []) {
            return <div><h3>Select a book to get started</h3></div>;
        }
        return (
            <div className="col-md-6 col-md-offset-1">
                <h2>Title: {this.props.book.title}</h2>
                <hr className="my-4"/>
                <img className="rounded float-left" src={this.props.book.image} alt={this.props.book.title} width={400} height={200} />
                <hr className="my-4"/>
                <h3>Description: </h3>
                <p className="lead">{this.props.book.description} </p>
                <hr className="my-4"/>
                <h3>Characters:</h3>
                <p className="lead"> {this.props.book.people}</p>
                <hr className="my-4"/>
                <h3>Rating: {this.props.book.rating}</h3>
            </div>
        );
    }
}