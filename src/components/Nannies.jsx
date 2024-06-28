import { useEffect, useState } from "react";
import Accordion from "./ui/accordion/Accordion";
import avatar from "../assets/images/avatar.svg";

import { Bars } from "react-loader-spinner";

const Nannies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function getNannies() {
      const response = await fetch(
        "https://careandsafeapp.runasp.net/api/Nannies"
      );
      const data = await response.json();

      console.log(data);
      setIsLoading(false);
    }

    getNannies();
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
          {nannies?.length === 0 ? (
            <h2 className="not-found-title">
              ...There are no Nannies to display
            </h2>
          ) : (
            Array.from({ length: 10 })?.map((category, index) => {
              return (
                <Accordion key={index} image={avatar}>
                  text
                </Accordion>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
export default Nannies;
