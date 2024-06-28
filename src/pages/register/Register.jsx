import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../../components/ui/form-row/FormRow";
import RegisterInfo from "../../components/ui/register-info/RegisterInfo";
import "./register.css";

const initialState = {
  username: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(false);

    if (!values.username || !values.password) {
      toast.error("Please fill all fields");
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <section className="super-manager register-grid">
      <article className="register-section">
        <h6 className="register-subtitle">Login</h6>

        <form className="register-form" onSubmit={handleSubmit}>
          <FormRow
            name="username"
            label="إسم المستخدم"
            type="text"
            placeholder="إسم المتسخدم"
            handleChange={handleChange}
            value={values.username}
          />

          <FormRow
            name="password"
            label="كلمة السر"
            type="password"
            placeholder="كلمة السر"
            handleChange={handleChange}
            value={values.password}
          />

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </article>
      <RegisterInfo />
    </section>
  );
};
export default Register;
