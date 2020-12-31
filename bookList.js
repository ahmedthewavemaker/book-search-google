
import React, { Component } from 'react';
import './bookSearchApp.css';


class BookList extends Component {


    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <div key={item.id}>

                            <h2>{item.volumeInfo.title}</h2>

                            <p>{item.volumeInfo.authors ? item.volumeInfo.authors[0] : null}</p>
                            <p>{item.volumeInfo ? item.volumeInfo.description : null}</p>
                            <p>{item.volumeInfo.saleInfo ? item.volumeInfo.saleInfo.listPrice.amount : null}</p>

                            <img src={item.volumeInfo.imageLinks.thumbnail} />
                            <a href={item.volumeInfo.canonicalVolumeLink}>Click here to learn more</a>




                        </div>
                    )
                })}

            </div>

        )
    }
}

export default BookList;
