import Layout from "components/Layout";
import MosaicGrid from "components/home/MosaicGrid";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const VideoPageStyles = styled.div`
  padding-bottom: 100px;
  .title-container {
    padding: 40px 0;
    text-align: center;
  }
`;

const videos = [
  {
    videoId: "rHSq5-t_8iY",
  },
  {
    videoId: "kV47e9ZnIcQ",
  },
  {
    videoId: "f2fpM8ksVkk",
  },
  {
    videoId: "aRjBfYtZuCs",
  },
  {
    videoId: "N6-K3ttxDUg",
  },
  {
    videoId: "mtVJ8M_AUuk",
  },
  {
    videoId: "J94NLoZcMuU",
  },
  {
    videoId: "hzugGT1ZmiE",
  },
];

const VideoPage = () => {
  return (
    <Layout>
      <NextSeo title="videos" />
      <VideoPageStyles>
        <div className="title-container wrapper">
          <h1 className="no-margin">videos</h1>
        </div>
        <MosaicGrid items={videos} />
      </VideoPageStyles>
    </Layout>
  );
};

export default VideoPage;
