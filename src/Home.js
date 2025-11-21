import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/content1"}>content실습</Link>
        </li>
        <li>
          <Link to={"/content2"}>content2실습</Link>
        </li>
        <li>
          <Link to={"/product/list"}>제품목록</Link>
        </li>
        <li>
          <Link to={"/product/add"}>제품등록</Link>
        </li>

        <hr></hr>
        <li>
          <Link to={"/mui1"}>Mui 1</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
