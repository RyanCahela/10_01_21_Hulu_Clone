import Image from "next/image";
import ImageNotFound from "./ImageNotFound";
import requests from "../utils/requests";

function ProductionCompany({ company }) {
  const { imageBaseURL } = requests.apiValues;
  const logoURL = company.logo_path
    ? `${imageBaseURL}${company.logo_path}`
    : null;
  return (
    <li key={company.id} className="flex flex-col">
      <h4 className="text-sm mb-2">{company.name}</h4>
      <div className="w-10">
        {logoURL ? (
          <Image
            src={logoURL}
            width={500}
            height={500}
            alt={`logo for ${company.name}`}
          />
        ) : (
          <ImageNotFound color="dark" />
        )}
      </div>
    </li>
  );
}

export default ProductionCompany;
