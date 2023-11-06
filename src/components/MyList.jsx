import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MyList = () => {
  const dispatch = useDispatch();
  const myDatas = useSelector((state) => state.fav.content);
  return myDatas.map((singleJob) => {
    return (
      <Container>
        <Row>
          <Col>
            {singleJob.title} "("{singleJob.publication_date.slice(0, 10)}")"|{" "}
            {singleJob.company_name} - {singleJob.category}
          </Col>
        </Row>
        <Col>
          {singleJob.salary} - {singleJob.job_type}
        </Col>
        <Col>
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
        </Col>
      </Container>
    );
  });
};
export default MyList;
