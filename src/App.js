import Header from "./component/Header";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Header title="안녕하세요"></Header>
      {/* 
        첫번째 footer 의 내용은 '푸터입니다' 출력
        footer 내용을 클릭하면 '첫번째 푸터' alert창 출력
      */}
      <Footer
        content="푸터입니다"
        fnAlert={(num) => {
          alert("첫" + num);
        }}
      ></Footer>
      {/* 
        두번째 footer 의 내용은 '서브푸터입니다' 출력
        footer 내용을 클릭하면 '두번째 푸터' alert창 출력
      */}
      <Footer
        content="서브푸터입니다"
        fnAlert={(num) => {
          alert("두" + num);
        }}
      ></Footer>
    </>
  );
}
export default App;
