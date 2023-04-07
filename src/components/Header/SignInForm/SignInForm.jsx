import { Form, Input } from "antd";

const SignInForm = ({ formik }) => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={formik.handleSubmit}
      autoComplete="off"
    >
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input
          name="username"
          placeholder="MonsterHunter_2008"
          onChange={({ target }) =>
            formik.setFieldValue("username", target.value)
          }
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        )}
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password
          name="password"
          placeholder="1234ABCe"
          onChange={({ target }) =>
            formik.setFieldValue("password", target.value)
          }
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
