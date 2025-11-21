import StateEx1 from "./component/UseStateEx1";
import StateEx2 from "./component/UseStateEx2";
import EffectEx1 from "./component/UseEffectEx1";
import EffectEx2 from "./component/UseEffectEx2";
import Ref1 from "./component/UseRef";
import ProductAdd from "./component/ProductAdd";
import ProductEdit from "./component/productEdit";
import ContextEx from "./component/UseContext1";
import ContextEx2 from "./component/UseContext2";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MuiEx1 from "./muiCoponent/Mui-Ex1";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/content1" element={<ContextEx2></ContextEx2>}></Route>
        <Route path="/content2" element={<ContextEx></ContextEx>}></Route>
        <Route path="/effact" element={<EffectEx2></EffectEx2>}></Route>

        <Route path="/product/list" element={<EffectEx2></EffectEx2>}></Route>
        <Route path="/product/add" element={<ProductAdd></ProductAdd>}></Route>
        <Route path="/product/edit/:productId" element={<ProductEdit></ProductEdit>}></Route>
        <Route path="/mui1" element={<MuiEx1></MuiEx1>}></Route>
      </Routes>
    </>
  );
}

export default Main;
