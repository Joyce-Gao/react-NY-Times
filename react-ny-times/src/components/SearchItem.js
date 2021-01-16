import React from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import { useGetArticleComments } from "../hooks/CustomHook";
import "./NewsItem.css";

export const SearchItem = (item) => {
  const media = item.multimedia;
  const thumb = media.find((item) => item.crop_name === "articleLarge");
  let comments = useGetArticleComments(item.web_url);
  if (comments?.results?.comments?.length) return;
  // const commentsLength = comments?.results?.comments?.length;
  return (
    <div className="border-wrap news-item-wrap">
      <Row>
        {!!thumb?.url && (
          <Col xs="12" md="2" className="news-picture">
            <img src={thumb.url} alt="" className="news-thumb" />
          </Col>
        )}
        <Col xs="12">
          <a className="news-caption" href={item.web_url} title={item.abstract}>
            {item.abstract}
          </a>
          <div className="news-info">
            <span className="news-type" title={item.section_name}>
              {item.section_name}
            </span>
            <span title={item.source}>{item.source}</span>
            <span>
              <Moment date={item.pub_date} format="YYYY-MM-DD HH:mm:ss" />
            </span>
            {/* {commentsLength > 0 && <span>{commentsLength} comments</span>} */}
          </div>
          {!!item.lead_paragraph && (
            <p className="news-abstract">
              {item.lead_paragraph}
              <a className="news-detail" href={item.web_url}>
                [See More]
              </a>
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};
