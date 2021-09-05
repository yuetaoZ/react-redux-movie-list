import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import { setLoginStatus, loginAsyncAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .max(40, "User name should be less than 40 characters")
    .required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const WithMaterialUI = () => {
  const { login_failed } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoginStatus());
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginAsyncAction(values.username, values.password));
    },
  });

  return (
    <div className="login-container">
      <h1>Login</h1>
      {login_failed && <p style={{ color: "red" }}>Failed to login</p>}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;
