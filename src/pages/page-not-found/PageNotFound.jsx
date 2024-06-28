import { Link } from "react-router-dom";
import { notFound } from "../../assets/images/icons";
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <img src={notFound} alt="page not found" />

      <h5 className="not-found-page">
        <p>
          <span>عذراً,</span>
          <br /> الصفحة غير موجوده
        </p>
      </h5>

      <Link to="/nannies" className="back-home">
        الصفحة الرئيسية
      </Link>
    </section>
  );
};
export default PageNotFound;
