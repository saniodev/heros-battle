import React from "react";
import ModalComponentProps from "../../interfaces/modalComponentProps/ModalComponentProps";

interface Metahuman {
  name: string;
  images?: {
    md?: string;
  };
  powerstats: {
    [key: string]: number;
  };
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  metahumans,
}) => {

  const getWinningMetahuman = () => {
    return metahumans.reduce((prev, current) =>
      prev.powerstats.power > current.powerstats.power ? prev : current
    );

  };

  const winningMetahuman = getWinningMetahuman();

  return (
    <div
      className={`modal ${
        isOpen ? "open" : "closed"
      } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 w-4/5 h-4/5 p-8 z-50 border-2 border-gray-300 rounded-md shadow-md`}
    >
      <button className="bg-yellow-600 rounded-md p-3" onClick={onClose}>
        Close Modal
      </button>
      <div className="flex justify-center items-center">
      {winningMetahuman && (
        <p className="text-white font-extrabold text-3xl mt-4">
          {winningMetahuman.name} is the winner!
        </p>
      )}
      </div>
      <div className="flex flex-row justify-between items-center mt-8">
        <div className="flex flex-col font-light text-white text-3xl justify-center items-center absolute top-1/4 bottom-14 left-1/4 right-1/4">
          <strong className="m-1 font-light text-white text-3xl">
            intelligence
          </strong>{" "}
          <strong className="m-1 font-light text-white text-3xl">
            strength
          </strong>{" "}
          <strong className="m-1 font-light text-white text-3xl">speed</strong>{" "}
          <strong className="m-1 font-light text-white text-3xl">
            durability
          </strong>{" "}
          <strong className="m-1 font-light text-white text-3xl">power</strong>{" "}
          <strong className="m-1 font-light text-white text-3xl">combat</strong>{" "}
        </div>
        {metahumans.map((metahuman: Metahuman, index: number) => (
          <div key={index} className="flex-row flex">
            {index === 0 ? (
              <>
                <div className="flex-col">
                  <img
                    src={metahuman.images?.md}
                    alt={metahuman.name}
                    className="m-4 h-72"
                  />
                  <h2 className="m-3 font-light text-white text-3xl">
                    {metahuman.name}
                  </h2>
                </div>
                <ul>
                  {Object.entries(metahuman.powerstats).map(([key, value]) => (
                    <li key={key} className="m-1 mt-2 relative top-3 font-light text-white text-3xl">
                      <strong className="m-3 font-light text-white text-3xl"></strong>{" "}
                      {value}
                    </li>
                  ))}
                </ul>
                <hr className="my-4" />
              </>
            ) : (
              <>
                <ul>
                  {Object.entries(metahuman.powerstats).map(([key, value]) => (
                    <li className="m-1 mt-2 relative top-3 font-light text-white text-3xl" key={key}>
                      <strong className=""></strong>{" "}
                      {value}
                    </li>
                  ))}
                </ul>
                <div className="flex-row">
                  <img
                    src={metahuman.images?.md}
                    alt={metahuman.name}
                    className="m-4 h-72"
                  />
                  <h2 className="m-3 font-light text-white text-3xl">
                    {metahuman.name}
                  </h2>
                </div>
                <hr className="my-4" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalComponent;
