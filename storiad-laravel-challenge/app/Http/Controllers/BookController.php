<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Book;

class BookController extends Controller
{
    //
    public function createBook(Request $request){
        // search for validation 
            $data = $request->all();
            $book = new Book;
            $book->book_title = $data["book_title"];
            $book->book_image = $data["book_image"];
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


}