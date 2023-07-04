import React from "react";
import Sidebar from "components/sidebar/Sidebar";
import Header from "components/header/Header";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { selectCollapsedState } from "store/slices/menuSlice";
import Row from "react-bootstrap/Row";

type Props = { children: React.ReactNode };

const Article = (props: Props) => {
  const collapse = useSelector(selectCollapsedState);
  return (
    <main>
      <div className="sidebar">
        <Header />
        <Sidebar />
      </div>

      <div
        className="content"
        style={{ width: `calc(100% - ${collapse ? 80 : 265}px)` }}
      >
        <Container>
          <Row>{props.children}</Row>
        </Container>
      </div>
    </main>
  );
};

export default Article;
