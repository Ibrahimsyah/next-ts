import styled from "styled-components";
import GenreBadge from "./GenreBadge";

type GenreListProps = {
  genreList: string[];
};

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const GenreList = (props: GenreListProps) => {
  return (
    <Wrapper>
      {props.genreList.map((genre: string, index: number) => (
        <GenreBadge genre={genre} key={index} />
      ))}
    </Wrapper>
  );
};

export default GenreList;
