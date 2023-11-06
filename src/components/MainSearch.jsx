import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const x = useSelector((state) => state.fav.content.length);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={9} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={1} className="text-start">
          <Link to="/myList">{x !== 0 ? <StarFill /> : <Star />}</Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Row className="d-flex align-items-center">
              <Col>
                <Job key={jobData._id} data={jobData} />
              </Col>
              <Col className="col-2 ">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    dispatch({
                      type: "add_to_fav",
                      payload: jobData,
                    });
                  }}
                >
                  +
                </button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
