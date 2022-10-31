import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Bishkek",
    },
    {
      id: 2,
      title: "Pekin",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Tashkent",
    },
    {
      id: 5,
      title: "Seul",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} onClick={() => setQuery({q:city.title})} className="text-white text-lg font-medium">{city.title}</button>
      ))}
    </div>
  );
}

export default TopButtons;
