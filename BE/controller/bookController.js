const Book = require("../model/model");

const bookController= {
    addBook: async(req,res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(req.body.book)
            {
                const book = book.findById(req.body.book);
                await book.update1({push: {book: savedBook._id }});
            }
            res.status(200).json({savedBook});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllbooks: async(req,res) => {
        try {
            const book = await Book.find();
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

module.exports = bookController;
