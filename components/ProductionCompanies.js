import Image from "next/image";
import requests from "../utils/requests";
import ImageNotFound from "./ImageNotFound";

function ProductionCompanies({ productionCompanies }) {
  const { imageBaseURL } = requests.apiValues;
  return (
    <div className="bg-gray-200 text-gray-900 p-4">
      <h3 className="text-xl font-bold mt-3">Production Companies</h3>
      <ul className="flex flex-col md:flex-row md:flex-wrap md:space-x-4">
        {productionCompanies.map((company) => {
          const logoURL = company.logo_path
            ? `${imageBaseURL}${company.logo_path}`
            : null;
          return (
            <li key={company.id} className="flex flex-col">
              <h4 className="text-sm">{company.name}</h4>
              <div className="w-10 md:self-center hidden md:block">
                {logoURL ? (
                  <Image src={logoURL} width={500} height={500} />
                ) : (
                  <ImageNotFound color="dark" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductionCompanies;
