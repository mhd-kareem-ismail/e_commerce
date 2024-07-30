import axios from "axios";
import { useState } from "react";
import { LOGIN, baseUrl } from "../../Api/Api";
import LoadingSubmit from "../../Components/Loading/Loading";
import Cookie from "cookie-universal";
import { Form } from "react-bootstrap";

export default function Login() {
  //States
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //Loading

  const [loading, setLoading] = useState(false);

  //cookies

  const cookie = Cookie();

  //Err
  const [err, setErr] = useState("");

  //Handle Form Change
  function handleChange(e) {
    return setForm({ ...form, [e.target.name]: e.target.value });
  }
  //Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/${LOGIN}`, form);
      setLoading(false);
      const token = res.data.token;
      cookie.set("e-commerce", token);
      window.location.pathname = "/users";
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setErr("wrong email or password");
      } else {
        setErr("Internal Server Error");
      }
    }
  }

  return (
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row " style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1>Login</h1>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="form-custom"
              >
                <Form.Control
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Your Email:"
                  required
                />
                <Form.Label>Email:</Form.Label>
              </Form.Group>

              <Form.Group
                controlId="exampleForm.ControlInput2"
                className="form-custom"
              >
                <Form.Control
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Your Password:"
                  minLength="6"
                  required
                />
                <Form.Label>Password:</Form.Label>
              </Form.Group>
              <button className="btn btn-primary">submit</button>

              <div className="google-btn">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://static-00.iconduck.com/assets.00/google-icon-512x512-wk1c10qc.png"
                      alt="sign in with google"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </a>
              </div>

              {err !== "" && <span className="error">{err}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
