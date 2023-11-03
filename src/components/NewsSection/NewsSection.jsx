import { useEffect, useState } from "react";
import { Badge, Card, Container, Spinner } from "react-bootstrap";
import { getNews } from "../../service/news";
import NavigationBar from "../NavigationBar/NavigationBar";

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const requestNewsData = () => {
    setIsError(false);
    setIsLoading(true);
    getNews(selectedCategory)
      .then((data) => {
        setNewsArticles(data.articles);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
        setNewsArticles([]);
      });
  };

  useEffect(() => {
    requestNewsData();
  }, [selectedCategory]);

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <NavigationBar
        selectedCategory={selectedCategory}
        categoryHandler={categoryHandler}
      />
      <Container>
        {isError && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "50vh" }}
          >
            <h4 style={{ color: "red" }}>
              Something went wrong, Please try again later.
            </h4>
          </div>
        )}
        {isLoading && !isError ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "50vh" }}
          >
            <Spinner />
          </div>
        ) : (
          <div className="d-flex flex-row flex-wrap justify-content-evenly mt-3 mb-3">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                style={{ width: "35rem", textAlign: "left", margin: "10px" }}
              >
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Img variant="top" src={article.image} />
                  <Card.Text>{article.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <a href={article.url} target="_blank" rel="noreferrer">
                      Read More
                    </a>
                    <Badge bg="secondary">{article.source.name}</Badge>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default NewsSection;
