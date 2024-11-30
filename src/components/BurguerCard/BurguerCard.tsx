import { FaCartPlus } from "react-icons/fa6";
import Button from "../Button/Button";
import { DivOrder, ImgBurguer } from "./BurguerCardStyle";

type BurguerCardProps = {
  photo: string;
  name: string;
  ingredients: string[];
  price: number;
};
function BurguerCard({ photo, name, ingredients, price }: BurguerCardProps) {
  return (
    <DivOrder>
      <ImgBurguer src={photo} alt={name} />
      <h1>{name}</h1>
      <p>{ingredients.join(", ")}</p>
      <h3>$ {price.toFixed(2)}</h3>
      <Button>Add to cart <FaCartPlus/></Button>
    </DivOrder>
  );
}

export default BurguerCard;
