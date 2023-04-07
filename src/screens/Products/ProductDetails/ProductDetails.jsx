import { convert } from "@/utils/uahToDollar";
import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { ProductsContext } from "@/contexts/productsContext";
import { categories } from "@/data/dummy";

const ProductDetails = () => {
  const [text, setText] = useState("");
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const { products } = useContext(ProductsContext);

  const { productId } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.id === productId);
    const category = categories.filter(
      (category) => category.id === product.categoryId
    );
    setProduct(product);
    setCategory(category);
  }, [productId]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <>
      {product && (
        <DetailsContainer>
          <h3>{product.name}</h3>
          <p>Category: {category.name}</p>
          <p>Price (UAH): {product.price}</p>
          <p>Price (USD): {convert(product.price)}</p>
          <Form onSubmit={onSubmit}>
            <textarea onChange={onChange} value={text}></textarea>
            <Button
              style={{ maxWidth: "180px", marginTop: "20px" }}
              type="submit"
            >
              Submit commentary
            </Button>
          </Form>
        </DetailsContainer>
      )}

      <Alert
        message={`Your response '${text}' was succesfully submitted!`}
        show={showAlert}
        setShow={setShowAlert}
      />
    </>
  );
};

const DetailsContainer = styled.div`
  padding-left: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export default ProductDetails;
