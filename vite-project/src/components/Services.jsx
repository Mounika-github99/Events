import React from "react";
const Services = () => {
  const services = [
    {
      id: 1,
      url: "birthday.jpg",
      title: "Birthday Event",
    },
    {
      id: 2,
      url: "anniversary.jpg",
      title: "Anniversary Event",
    },
    {
      id: 3,
      url: "entertainment event.jpg",
      title: "Entertainment Event",
    },
    {
      id: 4,
      url: "professional event.jpg",
      title: "Professional Event",
    },
    {
      id: 5,
      url: "party.jpg",
      title: "Party Event",
    },
    {
      id: 6,
      url: "wedding.jpg",
      title: "Wedding Event",
    },
  ];

  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <h3>{service.title}</h3>
            <img src={service.url} alt={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
