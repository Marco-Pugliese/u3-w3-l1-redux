import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const MyList = () => {
  const dispatch = useDispatch();
  const myDatas = useSelector((state) => state.fav.content);
  return (
    <Container>
      <Row>
        <Col>
          <h2>My Favs:</h2>
          <ListGroup className="shadow-lg">
            {myDatas.map((singleJob) => {
              return (
                <ListGroup.Item className="d-flex justify-content-between shadow-lg">
                  <Link
                    className="nav-link "
                    key={singleJob._id}
                    to={`/${singleJob.company_name}`}
                  >
                    <div className="d-flex flex-column fw-bold">
                      {singleJob.company_name} - {singleJob.category}
                    </div>
                    <div className="fs-6 fst-italic">
                      {singleJob.salary} - {singleJob.job_type} / ("
                      {singleJob.publication_date.slice(0, 10)}")
                    </div>
                    <div>
                      Candidate location required:
                      {singleJob.candidate_required_location}
                    </div>
                  </Link>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "remove_element",
                          payload: singleJob,
                        });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyList;
