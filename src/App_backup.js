function Header(props) {
  console.log(props.title);

  return (
    <>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (props.fnHeader != null) {
              props.fnHeader();
            }
          }}
        >
          {props.title}{" "}
        </a>
      </h1>
    </>
  );
}

function List(props) {
  let list = [];
  for (let i = 0; i < props.list.length; i++) {
    list.push(
      <>
        {props.fnList != null ? (
          <li key={props.list[i].subNo}>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                props.fnList(props.list[i].subName);
              }}
            >
              {props.list[i].subName}
            </a>
          </li>
        ) : (
          <li key={props.list[i].subNo}>{props.list[i].subName}</li>
        )}
      </>
    );
  }

  console.log(list);

  return (
    <>
      <div>
        <ul>{list}</ul>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <h3> 푸터 123 </h3>
    </>
  );
}
function App() {
  // let test = <div> 변수안에 넣은 html태그 </div>
  let subjectList = [
    { subNo: 1, subName: "자바", bookName: "참좋은 자바" },
    { subNo: 2, subName: "오라클", bookName: "쉽게 쓴 오라클" },
    { subNo: 3, subName: "html", bookName: "재밌는 html" },
    { subNo: 4, subName: "react", bookName: "어려운 react" },
  ];

  let subjectList2 = [
    { subNo: 1, subName: "qq", bookName: "참좋은 자바" },
    { subNo: 2, subName: "tt", bookName: "쉽게 쓴 오라클" },
    { subNo: 3, subName: "aa", bookName: "재밌는 html" },
    { subNo: 4, subName: "bb", bookName: "어려운 react" },
  ];
  // let list=[];
  // for(let i =0; i<subjectList.length;i++){
  //   list.push(<li>{subjectList[i].subName}</li>)
  // }

  return (
    <div>
      <Header
        title="첫번째 헤더"
        fnHeader={() => {
          alert("안녕!");
        }}
      ></Header>
      <Header title="서브 헤더"></Header>
      <List
        list={subjectList}
        fnList={(name) => {
          alert(name);
        }}
      ></List>
      <List list={subjectList2}></List>
      <Footer></Footer>
      {/* <ul>
        {list}
      </ul> */}
    </div>
  );
}

export default App;
