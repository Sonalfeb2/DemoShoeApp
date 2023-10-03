import { useState } from "react";
import ShoesList from "./ShoesList";
import './ShoesForm.css'
const ShoesForm = () => {
  const dummyList = [
    {
      id: 1,
      shoesName: "NavyBlue Reebok Shoes",
      price: 2000,
      des: "100 % cotton",
      count:0,
      sm: 2,
      l: 4,
      m: 5
    },
    {
      id: 2,
      shoesName: "Red Campus Shoes",
      price: 2000,
      count:0,
      des: "100 % cotton",
      sm: 2,
      l: 4,
      m: 5
    },
    {
      id: 3,
      shoesName: "Black RedCheif Shoes",
      price: 2000,
      count:0,
      des: "100 % cotton",
      sm: 2,
      l: 4,
      m: 5
    }
  ];
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState(dummyList);
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };
  const AddProductHandler = (e) => {
    e.preventDefault();
    setProductList(prevpro => [...prevpro, { id: Math.random(), count:0,...product }]);
  };
  return (
    <>
    
    <form className="Shoes_main_div" onSubmit={AddProductHandler}>
      <label>Shoes Name</label>
      <input type="text" name="shoesName" onChange={onChangeHandler} required/>
      <label> Description</label>
      <input type="text" name="des" onChange={onChangeHandler} required/>
      <label>Price</label>
      <input type="number" name="price" onChange={onChangeHandler} required/>
      <div className="shoes_size_div">
        Size:
        <label>sm</label>
        <input type="number" name="sm" onChange={onChangeHandler} required />
        <label>L</label>
        <input type="number" name="l" onChange={onChangeHandler} required/>
        <label>M</label>
        <input type="number" name="m" onChange={onChangeHandler} required/>
      </div>
      <button type="submit">Add to Product</button>
    
    </form>
    <ShoesList ProductList={productList} />
    </>
  );
};
export default ShoesForm;
