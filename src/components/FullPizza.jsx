import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
export default function FullPizza() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://65b2d2a29bfb12f6eafe789c.mockapi.io/Items/${id}`
        );
        console.log(data);

        setPizza(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPizza()
  }, [id]);

  if(!pizza) {
    return (
        <div>Загрузка...</div>
    )
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2 className="title">{pizza.title}</h2>
      <p className="descr">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum culpa,
        iste possimus esse perferendis nesciunt, qui ab dolorem hic explicabo
        quasi quod tempore? Consequuntur, repellendus!
      </p>
    </div>
  );
}
