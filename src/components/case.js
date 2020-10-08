import React from "react";
// change svg from fontasowe
function Case() {
  const caseStudies = [
    {
      id: 1,
      subtitle: "Futcher Vision",
      title:
        "It is a long established fact that a reader will be distracted by the readable  layout. The point of using Lorem",
      svg: "card1",
    },
    {
      id: 2,
      subtitle: "Product Desgin",
      title:
        "It is a long established fact that a reader will be distracted by the readable  layout. The point of using Lorem",
      svg: "card2",
    },
    {
      id: 3,
      subtitle: "Inovative Solarion",
      title:
        "It is a long established fact that a reader will be distracted by the readable  layout. The point of using Lorem",
      svg: "card3",
    },
  ];

  return (
    <section className="case">
      <div className="card">
        <div className="carditem">
          {caseStudies.map((caseItem) => (
            <div className="case-id" key={caseItem.id}>
              <img
                src={require(`../assets/${caseItem.svg}.svg`)}
                alt={caseItem.subtitle}
              />
              <div className="head">{caseItem.subtitle}</div>
              <div className="parg">{caseItem.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Case;
