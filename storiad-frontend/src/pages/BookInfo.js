import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
function BookInfo() {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: "#3baed3", height: "100vh" }}>
      <Header title={"Book Info"} />
      <div
        style={{
          display: "flex",
          marginTop: 50,
          justifyContent: "center",
        }}
      >
        <div
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
          <div
            style={{ display: "flex", flexDirection: "row", color: "#0b222a" }}
          >
            <div>
              <img
                width={300}
                height={300}
                src={`http://127.0.0.1:8001/images/${location.state.book_image}`}
                style={{ marginBottom: 10, alignSelf: "center" }}
                alt={location.state.book_title}
              />
              <div>
                <span style={{ fontWeight: "bold" }}>Book Title:</span>{" "}
                {location.state.book_title}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Book Author:</span>{" "}
                {location.state.book_author}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Book Genre:</span>{" "}
                {location.state.book_genre}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Publisher Name:</span>{" "}
                {location.state.publisher_name}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Publication Date:</span>{" "}
                {location.state.publication_date}
              </div>
            </div>
            <div style={{ width: 400, marginLeft: 20, color: "#0b222a" }}>
              <span style={{ fontWeight: "bold" }}> Description:</span> <br />{" "}
              {location.state.description}
              <div style={{ marginTop: 20 }}>
                <span style={{ fontWeight: "bold" }}>Number of pages:</span>{" "}
                {location.state.number_of_pages}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Amazon Link:</span>{" "}
                <a href={location.state.amazon_link}> Click here </a>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Price:</span> $
                {location.state.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
