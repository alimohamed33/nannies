import { useEffect, useState } from 'react';
import Accordion from './ui/accordion/Accordion';
import avatar from '../assets/images/avatar.svg';

import { Bars } from 'react-loader-spinner';

const Nannies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function getNannies() {
      const response = await fetch(
        'https://careandsafeapp.runasp.net/api/Nannies'
      );
      const data = await response.json();

      console.log(data);
      setNannies(data);
      setIsLoading(false);
    }

    getNannies();
  }, []);

  const deleteNanay = async (id) => {
    const response = await fetch(
      `https://careandsafeapp.runasp.net/api/Nannies/${id}`,
      { method: 'delete' }
    );
    // const data = await response?.json();
    // setNannies(data);
  };

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
          <div style={{ marginBottom: '1rem ' }}>
            <button
              style={{
                display: 'block',
                padding: '0.5rem 2rem',
                borderRadius: '12px',
                fontSize: '18px',
                background: 'green',
                width: 'fit-content',
                marginLeft: 'auto',
                color: '#fff',
                marginBottom: '8px',
              }}
            >
              Add Nany
            </button>
          </div>

          {nannies?.length === 0 ? (
            <h2 className="not-found-title">
              ...There are no Nannies to display
            </h2>
          ) : (
            nannies?.map((nany) => {
              return (
                <Accordion
                  key={nany?.nannyId}
                  name={`${nany?.firstName} ${nany?.lastName}`}
                  image={nany?.nannyImagePath}
                >
                  <div>description: {nany?.description}</div>
                  <div>phone: {nany?.phone}</div>
                  <div>price per hour: {nany?.pricePerHour}$</div>
                  <div>price per day: {nany?.pricePerDaily}$</div>

                  <div style={{ textAlign: 'left' }}>
                    <button
                      onClick={() => deleteNanay(nany?.nannyId)}
                      style={{
                        display: 'block',
                        padding: '0.5rem 2rem',
                        borderRadius: '12px',
                        fontSize: '18px',
                        background: 'red',
                        width: 'fit-content',
                        marginLeft: 'auto',
                        color: '#fff',
                        marginBottom: '8px',
                      }}
                    >
                      delete
                    </button>
                  </div>
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
