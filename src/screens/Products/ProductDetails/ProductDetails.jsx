import { convert } from "@/utils/uahToDollar";
import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "@/components/Button/Button";
import Alert from "@/components/Alert/Alert";
import { ProductsContext } from "@/contexts/productsContext";
import { categories } from "@/data/dummy";
import { Field, Form, Formik } from "formik";

const ProductDetails = () => {
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

  const onSubmit = (values, { resetForm }) => {
    setShowAlert(true);
    resetForm();
  };

  return (
    <>
      {product && (
        <DetailsContainer>
          <h3>{product.name}</h3>
          <p>Category: {category.name}</p>
          <p>Price (UAH): {product.price}</p>
          <p>Price (USD): {convert(product.price)}</p>
          <Formik
            initialValues={{
              text: "",
            }}
            onSubmit={onSubmit}
          >
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field
                as="textarea"
                id="firstName"
                name="text"
                placeholder="Your commentary..."
              />

              <Button
                style={{ maxWidth: "180px", marginTop: "20px" }}
                type="submit"
              >
                Submit commentary
              </Button>
            </Form>
          </Formik>
        </DetailsContainer>
      )}

      <Alert
        message={`Your response was succesfully submitted!`}
        show={showAlert}
        setShow={setShowAlert}
      />
    </>
  );
};

const DetailsContainer = styled.div`
  padding-left: 10%;
`;

export default ProductDetails;
