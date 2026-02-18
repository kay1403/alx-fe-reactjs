import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Formik Submitted:", values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && <p>{formik.errors.username}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <p>{formik.errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikForm;
