import styled from "styled-components";

type GenreBadgeProps = {
  genre: string;
};

const Badge = styled.span`
  color: #868686;
  border: 1px solid #868686;
  margin-right: 5px;
  border-radius: 10px;
  font-size: 12px;
  padding: 4px;
  transition: .2s ease;
  &:hover {
    color: white;
    border-color: white;
  }
`;

const GenreBadge = (props: GenreBadgeProps) => <Badge>{props.genre}</Badge>;

export default GenreBadge;
