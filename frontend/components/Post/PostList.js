import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const PostList = props => {
  return (
    <>
      <InfiniteScroll
        className="scrollable-div"
        dataLength={props.length}
        next={props.fetchData}
        hasMore={props.hasMorePosts}
        loader={
          <Loader
            style={{ textAlign: "center", padding: "2rem 0", margin: "auto" }}
            type="Puff"
            color="#F48C7C"
            height={100}
            width={100}
          />
        }
        endMessage={
          <p style={{ width: "100%", textAlign: "center", padding: "2rem 0", margin: "auto" }}>
            <b>No More posts :(</b>
          </p>
        }
      >
        {props.children?.length > 0 && props.children}
        {props.children?.length <= 0 && (
          <p style={{ width: "100%", height: "300px", textAlign: "center", padding: "2rem 0", margin: "auto" }}>
            Sorry There are no Posts at the moment
          </p>
        )}
      </InfiniteScroll>
    </>
  );
};

const SInfiniteScrollContainer = styled.section`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  @media screen and (max-width: ${props => props.theme.breakPoints.MD}) {
    align-items: center;
    flex-direction: column;
  }
`;

export default PostList;
