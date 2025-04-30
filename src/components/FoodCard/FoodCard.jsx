const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute top-0 right-3 mt-4 mr-4 rounded-lg px-4 bg-slate-900 text-white">${price}</p>
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
