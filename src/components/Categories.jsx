import { useEffect, useState } from "react";
import Accordion from "./ui/accordion/Accordion";
import avatar from "../assets/images/avatar.svg";

import { Bars } from "react-loader-spinner";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function getCategories() {
      const response = await fetch(
        "https://careandsafeapp.runasp.net/api/Categories"
      );
      const data = await response.json();

      console.log(data);
      setCategories(data);
      setIsLoading(false);
    }

    getCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-center">
          <Bars
            height="250"
            width="250"
            color="#FF382C"
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="accordions-container">
          {categories?.length === 0 ? (
            <h2 className="not-found-title">
              ...There are no categories to display
            </h2>
          ) : (
            categories?.map((category) => {
              return (
                <Accordion
                  key={category?.id}
                  name={category?.name}
                  image={avatar}
                >
                  {category?.description}
                </Accordion>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
export default Categories;
