import React, { useEffect, useState } from "react";

const BookInfo = ({ isbn }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error("Not ok");
            })
            .then((data) => setBook(data.items[0]))
            .catch((err) => console.log(err));
    }, []);

    return (
        book && (
            <div>
                <h1>{book.volumeInfo.title}</h1>
                <p>by {book.volumeInfo.authors[0]}</p>
            </div>
        )
    );
};

export default BookInfo;