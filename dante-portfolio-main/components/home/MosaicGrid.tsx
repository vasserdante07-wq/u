import styled from "styled-components";
import { motion } from "framer-motion";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

import Image from "next/image";

import { useState } from "react";
import { media } from "components/helpers";
import clsx from "clsx";
import { MediaProps } from "types";
import dynamic from "next/dynamic";

const MosaicGridStyles = styled.div`
  .mosaic-grid {
    margin: 0 auto;

    .mosaic-grid-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 -20px;
    }

    .image-container,
    .video-container {
      flex: 0 0 50%;
      padding: 0 20px;
      margin-bottom: 40px;
      ${media.medium`flex: 0 0 25%;`}
      button {
        width: 100%;
        padding: 0;
        border: none;
      }

      img {
        max-height: 400px;
        object-fit: cover;
      }

      &.full-width {
        flex: 0 0 100%;
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(0 0 0 / 70%);
    z-index: 1000;
    display: flex;
    align-items: center;
    .close {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
    }

    .modal__content {
      flex: 1;

      img {
        max-height: 90vh;
        width: auto;
        margin: 0 auto;
      }

      .player-wrapper {
        width: auto; // Reset width
        height: auto; // Reset height
        max-width: 1000px;
        margin: 0 auto;
      }

      .react-player {
        padding-top: 56.25%; // Percentage ratio for 16:9
        position: relative; // Set to relative
        width: 100%;
        height: 100%;
      }

      .react-player > div {
        position: absolute; // Scaling will occur since parent is relative now
        top: 0;
        left: 0;
      }
    }
  }
`;

const MosaicGrid = ({ items = [] }: { items: MediaProps[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModal, setIsVideoModal] = useState(false);
  const [currentPortfolioItem, setCurrentPortfolioItem] = useState<number>(0);

  function toggleModal(index: number, isVideo = false) {
    setCurrentPortfolioItem(index);
    setIsModalOpen(true);
    if (isVideo) {
      setIsVideoModal(true);
    } else {
      setIsVideoModal(false);
    }
  }

  return (
    <MosaicGridStyles>
      <div className="mosaic-grid wrapper">
        <div className="mosaic-grid-row">
          {items.map((item, index) => {
            if (item.image) {
              return (
                <div
                  className={clsx("image-container", item?.className)}
                  key={`item-${index}`}
                >
                  <button onClick={() => toggleModal(index)}>
                    <Image src={item.image} alt="" />
                  </button>
                </div>
              );
            } else if (item.videoId) {
              return (
                <div className="video-container" key={`item-${index}`}>
                  <button onClick={() => toggleModal(index, true)}>
                    <img
                      src={`https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt=""
                    />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      {isModalOpen && (
        <motion.div
          className="modal"
          key="modal-container"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1 },
            collapsed: { opacity: 0 },
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <button
            className="close"
            onClick={() => setIsModalOpen(false)}
          ></button>
          <div className="modal__content wrapper">
            <div className="modal__content-inner">
              {isVideoModal ? (
                <div className="player-wrapper">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${items[currentPortfolioItem]?.videoId}`}
                    muted={true}
                    controls={false}
                    playing={true}
                    loop={true}
                    className="react-player"
                    width={"auto"}
                    height={"auto"}
                    playsinline={true}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 0,
                        },
                      },
                    }}
                  />
                </div>
              ) : (
                <>
                  {items[currentPortfolioItem].image && (
                    <Image
                      src={items?.[currentPortfolioItem]?.image || ""}
                      alt=""
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </MosaicGridStyles>
  );
};

export default MosaicGrid;
