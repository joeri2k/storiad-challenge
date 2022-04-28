import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState("");
  async function getBooks() {
    const url = "http://127.0.0.1:8001/api/get-books";
    try {
      const response = await axios.get(url);
      const data_received = await response.data;

      setBooks(data_received);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);
  //   const [books, setBooks] = useState([
  //     {
  //       id: 2,
  //       book_title: "test test",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 3,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 1,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 4,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 5,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 6,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //     {
  //       id: 7,
  //       book_title: "book1",
  //       book_image: "202204280712bg.jpg",
  //       description:
  //         "While eleven-year-old Nora Davis was up in her bedroom doing homework, she had no idea her father was killing women in the basement.",
  //       book_author: "Freida McFadden",
  //       book_genre: "thriller",
  //       publisher_name: "kindle edition",
  //       publication_date: "2020-08-07",
  //       number_of_pages: 313,
  //       price: "3.99",
  //       amazon_link:
  //         "https://www.amazon.com/Locked-Door-gripping-psychological-jaw-dropping-ebook/dp/B092RXXJDM/ref=zg_sccl_2/144-1539293-8127952?pd_rd_w=hOCzN&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=92C7MS0R2P6DRKA2CQ21&pd_rd_r=d41ae8ed-742b-4eb6-9900-19bbac65fef4&pd_rd_wg=C3Eyo&pd_rd_i=B092RXXJDM&psc=1",
  //       created_at: "2022-04-28T07:12:29.000000Z",
  //       updated_at: "2022-04-28T07:12:29.000000Z",
  //     },
  //   ]);
  return (
    <div style={{ backgroundColor: "#3baed3", height: "100vh" }}>
      <div>
        <Header title={"BookShell"} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexwWrap: "wrap",
            margin: 20,
            marginLeft: 70,
          }}
        >
          {books &&
            books.map((item, key) => {
              return (
                <div
                  key={key}
                  style={{
                    marginBottom: 50,
                    marginRight: 70,
                    padding: 15,
                    backgroundColor: "#89cee4",
                    display: "flex",
                    borderRadius: 15,
                    flexDirection: "column",
                    color: "#0b222a",
                  }}
                >
                  <img
                    width={200}
                    height={165}
                    src={`http://127.0.0.1:8001/images/${item.book_image}`}
                    style={{ marginBottom: 10, alignSelf: "center" }}
                    alt={item.book_title}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Book Title:</span>{" "}
                    {item.book_title}
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Price:</span> $
                    {item.price}
                  </div>
                  <span
                    style={{
                      color: "#000075",
                      marginTop: 10,
                    }}
                    onClick={() => {
                      navigate("/book-info", {
                        state: item,
                      });
                    }}
                  >
                    more info
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Books;
