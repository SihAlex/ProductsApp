import { ProductsContext } from "@/contexts/productsContext";
import { categories } from "@/data/dummy";
import { Button, Form, Input, Select } from "antd";
import { useContext } from "react";

const AdminPanel = () => {
  const { addProduct } = useContext(ProductsContext);
  const onSubmit = (values) => {
    addProduct({ ...values, id: `product-${Date.now()}` });
  };

  return (
    <div>
      <h1>Add new product</h1>
      <Form
        name="addProduct"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Product name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input product's name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input product's price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product category"
          name="categoryId"
          rules={[
            {
              required: true,
              message: "Please choose product's category!",
            },
          ]}
        >
          <Select
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminPanel;
