import {StyledVideoWrapper} from './VideoList.style';
import {VideoCard} from '../../../components/VideoCard/index';

export const VideoList = () => {
  //   const {videoList, baseYouTubeUrl} = useContext(ListContext);
  return (
    <StyledVideoWrapper>
      <VideoCard />
      {/* {videoList.map((video) => {
        return <VideoCard video={video} baseYouTubeUrl={baseYouTubeUrl} />;
      })} */}
    </StyledVideoWrapper>
  );
};
