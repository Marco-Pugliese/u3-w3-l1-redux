import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_FAV, getFetchAction, setQueryAction } from "../redux/actions";
const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const jobs = useSelector((state) => state.fetch.jobs);

  const handleChange = (e) => {
    dispatch(setQueryAction(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFetchAction(query));
  };
  const x = useSelector((state) => state.list.content.length);

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
                      type: ADD_TO_FAV,
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
