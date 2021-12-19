import useAsync from "hooks/useAsync";
import React, { useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "redux/actionCreators/cardAction";
import ProductsService from "services/ProductsServecies";
import { IProduct } from "types";
import imageUrlParser from "utils/imageUrlParser";
const ProductDetails = () => {
  const { id } = useParams<Record<string, string | undefined>>();

  const getProduct = useCallback(() => {
    return ProductsService.getProductByID(String(id));
  }, [id]);

  const { data, isSuccess, isLoading, isError, error } =
    useAsync<IProduct>(getProduct);

  const { name, image, description, price } = (data || {}) as IProduct;
  console.log("name", name);

  const dispatch = useDispatch();
  return (
    <div className="product_details_component mt-3">
      <Container>
        <div className="wrapper bg-white rounded border">
          {isLoading && <h3>Loading.....</h3>}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img src={imageUrlParser(data ? image : "")} alt={name} />
              </Col>
              <Col md={8}>
                <h3 className="mb-3">{name}</h3>
                <h1>${price}</h1>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(addToCart(data as IProduct))}
                >
                  <BsFillCartCheckFill />
                  Add To cart
                </button>
                <div className="mt-5">{description}</div>
              </Col>
            </Row>
          )}
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;

// const [singleData, setSingleData] = useState(null);

// console.log("data", singleData);
// const getData = useCallback(async () => {
//   const response = await axios.get(
//     `https://fvaly.herokuapp.com/api/product/${id}`
//   );
//   setSingleData(response.data);
// }, []);

// useEffect(() => {
//   getData();
// }, []);
