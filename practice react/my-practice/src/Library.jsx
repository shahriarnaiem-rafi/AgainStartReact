import Book from './Book';
export default function Library({ books }) {
    return (
        <div>
            <h2>My nation central library</h2>
            book collectio: {books.length}
            <p>Address:  </p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    );
}