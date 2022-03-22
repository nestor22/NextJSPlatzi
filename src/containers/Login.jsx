import React, { useRef } from "react";
import "../styles/login.scss";
import logoYardSale from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      password: formdata.get("email"),
      repassword: formdata.get("re-password"),
    };
    console.log(data)
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logoYardSale} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="form" ref={form}>
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <label for="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            name="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            {" "}
            Confirm{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
