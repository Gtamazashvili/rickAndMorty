import styled from "styled-components";

export default function NextPage(props: any) {
  return <NextPageButton onClick={props.onClick}>Next</NextPageButton>;
}
const NextPageButton = styled.button`
  background-color: #d28108;
  font-size: 30px;
  font-weight: 700;
  color: white;
  height: 70px;
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  margin: 30px;
  transition: 0.3s;
  &:hover {
    color: #d28108;
    background-color: white;
  }
`;
