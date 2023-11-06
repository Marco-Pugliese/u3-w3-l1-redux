import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const MyList = ({}) => {
  const dispatch = useDispatch();
  const myDatas = useSelector((state) => state.fav.content);
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {myDatas.map((singleJob) => {
              return (
                <Link key={singleJob._id} to={`/${singleJob.company_name}`}>
                  <ListGroup.Item className="d-flex">
                    <div className="d-flex">
                      {singleJob.company_name} - {singleJob.category} / ("
                      {singleJob.publication_date.slice(0, 10)}")
                    </div>
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
                </Link>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyList;
