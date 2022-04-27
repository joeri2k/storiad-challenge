<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Book;

class BookController extends Controller
{
    //
    public function createBook(Request $request){
            $data = $request->all();
            $book = new Book;
            $file= $request->file('book_image');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(public_path('/images'), $filename);

            $book->book_title = $data["book_title"];
            $book->book_image = $filename;
            $book->description = $data["description"];
            $book->book_author = $data["book_author"];
            $book->book_genre = $data["book_genre"];
            $book->publisher_name = $data["publisher_name"];
            $book->publication_date = $data["publication_date"];
            $book->number_of_pages = $data["number_of_pages"];
            $book->price = $data['price'];
            $book->amazon_link = $data['amazon_link'];
            $book->save();

        return response()->json(["success" => true]);
    }

    public function getBooks(){
        $books = Book::all();

        return response()->json($books);
    }

    public function editBook(Request $request) {
        $book = Book::find($request['id']);
        $data = $request->all();
        
        $file= $request->file('book_image');
        $filename= date('YmdHi').$file->getClientOriginalName();
        $file-> move(public_path('/images'), $filename);

        $book->book_title = $data["book_title"];
        $book->book_image = $filename;
        $book->description = $data["description"];
        $book->book_author = $data["book_author"];
        $book->book_genre = $data["book_genre"];
        $book->publisher_name = $data["publisher_name"];
        $book->publication_date = $data["publication_date"];
        $book->number_of_pages = $data["number_of_pages"];
        $book->price = $data['price'];
        $book->amazon_link = $data['amazon_link'];
        $book->save();

        return response()->json(["success" => true]);
        
    }


    public function deleteBook(Request $request){
        $book = Book::find($request['id']);
        $book->delete();
        return response()->json(["success" => true]);
    }
    
    public function getBookById(Request $request){
        $book = Book::find($request['id']);

        return response()->json([$book]);
    }
}