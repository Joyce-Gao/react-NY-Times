import React from "react";
import { Row, Col } from "react-bootstrap";
import { MOCK_NEWS_COMMENT } from "../constants/NewsComments";
import Moment from "react-moment";
import { DATE_FORMAT } from "../constants/Common";
// import { useGetArticleComments } from "../util/Helper"; //real data request need hook
import "./NewsItem.css";

export const NewsItem = (item) => {
  const media = item.multimedia;
  const thumb = media.find((item) => item.format === "thumbLarge");
  // These are real data requests and simulated data
  // const comments = useGetArticleComments(item.url);  //real data request, comments?.results?.comments is empty
  // const comments = useGetArticleComments(
  //   "https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key=h2E6f7FmFPR9tIj2eY71bsGlmY8w3Etx&offset=0&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F06%2F21%2Fscience%2Fgiant-squid-cephalopod-video.html"
  // );   // api demo url
  const comments = { ...MOCK_NEWS_COMMENT }; //simulated data
  const length = comments?.results?.comments?.length || 0;
  return (
    <div className="border-wrap news-item-wrap">
      <Row>
        {!!thumb?.url && (
          <Col xs="12" md="2" className="news-picture">
            <img src={thumb.url} alt="" className="news-thumb" />
          </Col>
        )}
        <Col xs="12" md="10">
          <a className="news-caption" href={item.url} title={item.title}>
            {item.title}
          </a>
          <div className="news-info">
            <span className="news-type" title={item.section}>
              {item.section}
            </span>
            <span title={item.byline}>{item.byline}</span>
            <span>
              <Moment date={item.published_date} format={DATE_FORMAT} />
            </span>
            {length > 0 && <span>{length} comments</span>}
          </div>
          <p className="news-abstract">
            {item.abstract}
            <a className="news-detail" href={item.url}>
              [See More]
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};
