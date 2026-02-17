import Layout from "components/Layout";
import MosaicGrid from "components/home/MosaicGrid";
import { NextSeo } from "next-seo";

import vertOne from "public/work/vert-1-min.jpg";
import vertTwo from "public/work/vert-2-min.jpg";
import vertThree from "public/work/vert-3-min.jpg";
import vertFour from "public/work/vert-4-min.jpg";
import vertFive from "public/work/vert-5-min.jpg";
import vertSix from "public/work/vert-6-min.jpg";
import vertSeven from "public/work/vert-7-min.jpg";
import vertEight from "public/work/vert-8-min.jpg";
import vertNine from "public/work/vert-9-min.jpg";

import horizontalOne from "public/work/hor-1-min.png";
import horizontalTwo from "public/work/hor-2-min.png";
import horizontalThree from "public/work/hor-3-min.jpg";
import horizontalFour from "public/work/hor-4-min.jpg";
import horizontalFive from "public/work/hor-5-min.jpg";
import horizontalSix from "public/work/hor-6-min.jpg";
import horizontalSeven from "public/work/hor-7-min.png";
import horizontalEight from "public/work/hor-8-min.jpg";
import horizontalNine from "public/work/hor-9-min.jpg";

import styled from "styled-components";
import { StaticImageData } from "next/image";

const StillPageStyles = styled.div`
  padding-top: 40px;
  .title-container {
    text-align: center;
    margin-bottom: 40px;
  }
`;

type MediaProps = {
  image: StaticImageData;
  className?: string;
};

const items: MediaProps[] = [
  {
    image: vertOne,
  },
  {
    image: vertTwo,
  },
  {
    image: vertThree,
  },
  {
    image: vertFour,
  },
  {
    image: vertFive,
  },
  {
    image: vertSix,
  },
  {
    image: vertSeven,
  },

  {
    image: vertEight,
  },
  {
    image: vertNine,
  },

  {
    image: horizontalOne,
  },
  {
    image: horizontalTwo,
  },
  {
    image: horizontalThree,
  },
  {
    image: horizontalFour,
  },
  {
    image: horizontalFive,
  },
  {
    image: horizontalSix,
  },
  {
    image: horizontalSeven,
  },
  {
    image: horizontalEight,
  },
  {
    image: horizontalNine,
  },
];

const StillsPage = () => {
  return (
    <Layout>
      <NextSeo title="stills" />
      <StillPageStyles>
        <div className="title-container wrapper">
          <h1>stills</h1>
        </div>
      </StillPageStyles>
      <MosaicGrid items={items} />
    </Layout>
  );
};

export default StillsPage;
