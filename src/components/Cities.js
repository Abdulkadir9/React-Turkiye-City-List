import { useEffect, useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";

export default function Cities({ SearchText }) {
  const [active, setActive] = useState();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      `https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json`
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return cities.map((city, index) =>
    city.name.toLowerCase().includes(SearchText.toLowerCase()) ? (
      <li
        tabIndex={2}
        onClick={() => {
          active !== index ? setActive(index) : setActive();
        }}
        className="bg-slate-700 m-3 rounded text-slate-100 p-4 text-xl font-medium outline-5 outline-lime-400 select-none"
        key={index}
      >
        <div className="flex items-center justify-between">
          <p>{city.name}</p>
          {active === index ? (
            <MdOutlineExpandLess fontSize={30} />
          ) : (
            <MdOutlineExpandMore fontSize={30} />
          )}
        </div>
        {active === index && (
          <div>
            <p>Enlem: {city.latitude}</p>
            <p>Boylam: {city.longitude}</p>
            <p>Nüfus: {city.population}</p>
            <p>Bölge: {city.region}</p>
          </div>
        )}
      </li>
    ) : (
      false
    )
  );
}
