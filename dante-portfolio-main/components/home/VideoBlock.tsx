import dynamic from "next/dynamic";
import styled from "styled-components";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

const VideoBlockStyles = styled.div`
  padding: 100px 0;
  .player-wrapper {
    width: auto;
    height: auto;
    max-width: 1000px;
    margin: 0 auto;
  }
  mux-player {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
  }
`;

const VideoBlock = () => {
  return (
    <VideoBlockStyles>
      <div className="player-wrapper">
        <MuxPlayer
          playbackId="00znJldwdUxoxVkJhL9aDqaEIP9TH6ya53aOot400QvRU"
          muted
          autoPlay
          loop
          playsInline
          controls={false}
        />
      </div>
    </VideoBlockStyles>
  );
};

export default VideoBlock;
