function Footer(props) {
  return (
    <>
      <div>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.fnAlert("번째 푸터");
          }}
        >
          {props.content}
        </a>
      </div>
    </>
  );
}

export default Footer;
