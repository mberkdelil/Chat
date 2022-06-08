import { connect } from 'react-redux';
import { Link, useNavigate, } from 'react-router-dom';
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import styles from "./signup.module.css";
import { signUp } from '../../actions';
import { useFormik } from "formik"
import validations from '../validations';

const Signup = (props) => {
  const navigator = useNavigate();

  let id = props.users?.length;

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    },
    validationSchema: validations
  })

  const user = ({
    id: id + 1, username: values.username, email: values.email, password: values.password, isLogin: false, comments: [],
    avatar: "https://cdn.dribbble.com/users/5094018/screenshots/14663135/avatar_4x.jpg",
  });
  console.log(props.users);

  const addNewUser = () => {
    if (props.users.find(item => item.username === user.username)) {
      return alert("This Username has already been taken")
    } else if (props.users.find(item => item.email === user.email)) {
      return alert("This email has already been taken")
    } else {
      props.signUp(user)
      alert("kayıt oldun gırıs sayfasına yonlendırılıyorsun")
      navigator("/")
    }
  };

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
          onSubmit={handleSubmit}
        >
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="username"
              placeholder="Username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && <div style={{ fontSize: "16px", color: "purple" }}><i><strong>{errors.username}</strong></i></div>}
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
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="passwordConfirm"
              placeholder="Password Again"
              type="password"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && <div style={{ fontSize: "16px", color: "purple" }}><i><strong>{errors.passwordConfirm}</strong></i></div>}
            <Button onClick={addNewUser} type='submit' color="purple" fluid size="large"  >
              Register
            </Button>
          </Segment>
        </Form>

        <Message>
          Have an Account ? <Link to="/">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { signUp })(Signup);