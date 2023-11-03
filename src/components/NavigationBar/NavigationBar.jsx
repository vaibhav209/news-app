import { Form, Container, Navbar } from "react-bootstrap";

const NavigationBar = ({ selectedCategory, categoryHandler }) => {
  const catogories = [
    "general",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
    "business"
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="sticky-top bg-body-tertiary"
    >
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand>
            {" "}
            <span
              style={{
                fontWeight: "bold",
                color: "#DC143C"
              }}
            >
              IndiNews
            </span>
          </Navbar.Brand>
          <Form>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => categoryHandler(e.target.value)}
            >
              {catogories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </Form.Select>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
