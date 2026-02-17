import dynamic from "next/dynamic";
import styled from "styled-components";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const VideoBlockStyles = styled.div`
  padding: 100px 0;

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
`;

const VideoBlock = () => {
  return (
    <VideoBlockStyles>
      <div className="player-wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=sd6TnNWKCXM`}
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
    </VideoBlockStyles>
  );
};

export default VideoBlock;
