import { useEffect, useRef, useState } from "react";
import { eyeShow, eyeHide } from "../../../assets/images/icons";
import "./form-row.css";

const FormRow = ({
  name,
  labelText,
  type,
  placeholder,
  handleChange,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (type === "password" && showPassword) inputRef.current.type = "text";
    else if (type === "password" && showPassword === false)
      inputRef.current.type = "password";
  }, [showPassword]);

  return (
    <article className="form-row">
      <label htmlFor={name}>{labelText}</label>

      <div className={type === "password" ? "password-container" : ""}>
        <input
          ref={inputRef}
          className={type === "password" ? "input password-container" : "input"}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        {type === "password" && (
          <button onClick={handleShowPassword} className="btn-show-pass">
            <img
              src={showPassword ? eyeShow : eyeHide}
              alt="eye icon"
              className="eye-icon"
            />
          </button>
        )}
      </div>
    </article>
  );
};
export default FormRow;
