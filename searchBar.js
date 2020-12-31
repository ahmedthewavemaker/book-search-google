import React, { Component } from 'react';


class SearchBar extends Component {
    submitForm = e => {
        e.preventDefault();
        const searchWord = e.target.search.value;
        const printStyle = e.target.printType.value;
        const bookStyle = e.target.bookType.value;
        console.log(searchWord, printStyle, bookStyle);
        
        const api = 'AIzaSyA2-WUbRSx5UxVX73Ruczc7MEFjfUue-G4'
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&printType=${printStyle}&filter=${bookStyle}&key=${api}`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("something is wrong")
                }
                return response
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.updateItems(data) })
            



    }



    render() {
        return (
            <div>
                <h1>Google Book Search</h1>
                <form onSubmit={this.submitForm}>

                    <label htmlFor='search'><h2>Search: </h2> </label>
                    <button type='submit' htmlFor='search'>Search</button>
                    <input name='search' placeholder="Search Books" type='text' />

                    <h2>Print Type</h2>
                    <select name="printType">
                        <option value="All">All</option>
                        <option value="Books">Books</option>
                        <option value="Magazines">Magazines</option>
                    </select>


                    <h2>Book Type</h2>
                    <select name="bookType">
                        <option value="No-filter">No filter</option>
                        <option value="full">full</option>
                        <option value="partial">partial</option>
                        <option value="free-ebooks">free ebooks</option>
                        <option value="paid-ebooks">paid ebooks</option>
                        <option value="ebooks">ebooks</option>
                    </select>

                </form>


            </div>

        )
    }

}

export default SearchBar;