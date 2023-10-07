import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

type CharacterData = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: string[];
  gender: string;
  origin: {
    name: string;
  };
};

export default function DetailedInfo() {
  const { id } = useParams();
  const [result, setResult] = useState<CharacterData | null>(null); // Properly initialized state

  async function fetchData() {
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    try {
      const response = await fetch(url);
      const data: CharacterData = await response.json();
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData();

  if (!result) return <div>Loading...</div>;

  return (
    <Container>
      <Image src={result.image} />
      <h1>{result.name}</h1>
      <Div>
        {result.status === "Dead" ? (
          <DeadIcon />
        ) : result.status === "unknown" ? (
          <UnknownIcon />
        ) : (
          <AliveIcon />
        )}
        <h1 style={{ display: "inline-block" }}>{result.status}</h1>
      </Div>
      <h1>Species : {result.species}</h1>
      <h1>Gender : {result.gender}</h1>
      <h1>Origin : {result.origin.name}</h1>
      <h1>Last know location : {result.location.name}</h1>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Image = styled.img`
  height: 300px;
  border-radius: 10px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const DeadIcon = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
  margin-top: 0;
`;
const AliveIcon = styled.div`
  height: 20px;
  width: 20px;
  background-color: green;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
`;
const UnknownIcon = styled.div`
  height: 20px;
  width: 20px;
  background-color: yellow;
  display: inline-block;
  border-radius: 50%;
  margin-right: 6px;
`;
