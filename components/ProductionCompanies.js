import requests from "../utils/requests";
import ProductionCompany from "./ProductionCompany";

function ProductionCompanies({ productionCompanies }) {
  const containerLayout = `
    px-4
    py-2
    mt-4
    col-span-full
    lg:col-start-2
    lg:col-end-3
  `;

  const containerStyles = `
    bg-gray-200
    text-gray-900 
    rounded-sm 
  `;

  const titleLayout = `
    mt-3 
  `;

  const titleStyles = `
    text-xl font-bold  
  `;

  const listLayout = `
    grid
    grid-cols-2
    lg:grid-cols-3
  `;

  return (
    <div className={`${containerLayout}${containerStyles}`}>
      <h3 className={`${titleLayout}${titleStyles}`}>Production Companies</h3>
      <ul className={`${listLayout}`}>
        {productionCompanies.map((company) => {
          return <ProductionCompany company={company} />;
        })}
      </ul>
    </div>
  );
}

export default ProductionCompanies;
