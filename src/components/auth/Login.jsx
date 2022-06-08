import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import styles from "./login.module.css";
import { login } from '../../actions';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import validations from '../validations';

const Login = (props) => {

  const navigator = useNavigate();
  console.log(props.users);
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validations
  });

  const checkLogin = () => {
    const username = props.users.find(item => item.email === values.email ? item : "");
    if (props.users.find(item => item.email === values.email && item.password === values.password)) {
      props.login(values);
      navigator(`/chatpanel/${username.username}`)
    } else {
      return alert("emaıl yada sıfre yanlıs")
    }
  }

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={styles.container}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 className={styles.formHeader}>
          Chatify
          <span>.io</span>
        </h1>
        <Form
          size="large"
          className={styles.form}
        >
          <Segment>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              name="email"
              placeholder="E-Mail"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div style={{ fontSize: "16px", color: "purple" }}><i><strong>{errors.email}</strong></i></div>}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <div style={{ fontSize: "16px", color: "purple" }}><i><strong>{errors.password}</strong></i></div>}
            <Button onClick={checkLogin} type='submit' color="purple" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>

        <Message>
          Don't you have an account yet ? <Link to="/signup">Create Account</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
};

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { login })(Login)