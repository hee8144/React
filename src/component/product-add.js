import { useEffect, useRef, useState } from "react";

function ProductAdd() {
  let nameRef = useRef(null);
  let [price, setPrice] = useState(0);

  function fnNameRef() {
    nameRef.current.focus();
  }
  useEffect(() => {
    fnNameRef();
  }, []);
  return (
    <>
      <div>
        제품명:<input ref={nameRef}></input>
      </div>
      <div>가격: {price}</div>
      <div>
        가격:
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button onClick={fnNameRef}> focus</button>
      </div>
    </>
  );
}

export default ProductAdd;
