export default function Card({ img,price}) {
  const cardItem = {
    img: img,
    name: "iPhone",
    price: price
  };

  return (
    <>
      <div className="col-3">
        <div className="card-item">
          <div className="card-img">
            <img src={cardItem.img} alt="Product" />
          </div>
          <h2>{cardItem.name}</h2>
          <p>{cardItem.price}</p>
          <a href="javascript:void(0)">Add</a>
        </div>
      </div>
    </>
  );
}