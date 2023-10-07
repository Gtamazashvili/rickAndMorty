import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type propsValues = {
  name: string;
  status: string;
  image: string;
  species: string;
  lastKnowLocation: string;
  episode: string[];
};

export default function Card(props: propsValues) {
  const navigate = useNavigate();
  let [firstAppeared, setFirstAppeared] = useState("");
  fetch(props.episode[0])
    .then((response) => response.json())
    .then((data) => setFirstAppeared(data.name))
    .catch((err) => console.log(err));
  function navigateToDetailedInformation() {
    navigate(`/detail/${props.id}`);
  }
  return (
    <CardDiv onClick={navigateToDetailedInformation}>
      <Image src={props.image}></Image>
      <InfoDiv>
        <h3>{props.name}</h3>
        <Div>
          {props.status === "Dead" ? (
            <DeadIcon />
          ) : props.status === "unknown" ? (
            <UnknownIcon />
          ) : (
            <AliveIcon />
          )}
          <p style={{ display: "inline-block" }}>
            {props.status} - {props.species}
          </p>
        </Div>
        <GreyP>last known location :</GreyP>
        <p>{props.lastKnowLocation}</p>
        {firstAppeared !== "" && <GreyP>First seen in the episode:</GreyP>}
        {firstAppeared !== "" && <p>{firstAppeared}</p>}
      </InfoDiv>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  display: flex;
  background-color: #3c3e44;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  width: 500px;
  height: 220px;
  cursor: pointer;
`;
const InfoDiv = styled.div`
  color: white;
  text-align: center;
  width: 100%;

  & > * {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Image = styled.img`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100%;
`;
const GreyP = styled.p`
  color: #9e9d98;
  margin: 0;
`;
const DeadIcon = styled.div`
  height: 10px;
  width: 10px;
  background-color: red;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
  margin-top: 0;
`;
const AliveIcon = styled.div`
  height: 10px;
  width: 10px;
  background-color: green;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
`;
const UnknownIcon = styled.div`
  height: 10px;
  width: 10px;
  background-color: yellow;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
