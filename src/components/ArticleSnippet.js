import React from "react";
import { Link } from "react-router-dom";
import { ImageSnippet } from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import { P, H3, H5, CardStyled } from "../styles/GenericStyles";

export function ArticleSnippetWithImage(props) {
  const { title, subtitle, category, date, resume } = props;
  return (
    <CardStyled className={props.className} icon={props.icon}>
      <Link to="#">
        <CardStyled.Body className="p-0 text-left d-md-flex align-items-center">
          <ImageSnippet className="d-none d-lg-block" src={squarePlaceholder} />
          <div className="p-4">
            <H5>{category}</H5>
            <H3>{title.substring(0, 80)}</H3>
            <P className="mb-0">{resume.substring(0, 200)}</P>
          </div>
        </CardStyled.Body>
      </Link>
    </CardStyled>
  );
}

export function ArticleSnippet(props) {
  const { title, subtitle, category, date, resume } = props;
  return (
    <CardStyled className={props.className} icon={props.icon}>
      <Link to="#">
        <CardStyled.Body className="p-4 text-center">
          <H5>{category}</H5>
          <H3>{title}</H3>
        </CardStyled.Body>
      </Link>
    </CardStyled>
  );
}
