import BurguerCard from "../../components/BurguerCard";
import Header from "../../components/Header";
import { StyledOrderDiv } from "./OrderStyle";
import burguer from "./../../../src/data/data.json";

function Order() {
  return (
    <>
      <Header />
      <StyledOrderDiv>
        {burguer.map((item) => (
          <BurguerCard
            key={item.Id}
            photo={item.Photo}
            name={item.Name}
            ingredients={item.Ingredients}
            price={item.Price}
          />
        ))}
      </StyledOrderDiv>
    </>
  );
}
export default Order;
