import styled from "styled-components";

export default function Section({ title, callback, description, image }) {
  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        <StyledButton onClick={callback}>Open</StyledButton>
      </TitleContainer>
      <ImageContainer>
        <Image src={image} />
        <TextWrapper>{description}</TextWrapper>
      </ImageContainer>
    </Container>
  );
}

const ImageContainer = styled.div`
  display: flex;
  padding-top: 20px;
  gap:20px;
`;

const TextWrapper = styled.div`
  padding: 0px 10px;
`;
const Image = styled.img`

  width: 150px;
  height: 120px;
  object-fit: cover;
  object-position: top;
  border-radius:10px;
  opacity: .8 ;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  border: 1px solid black;
  border-radius: 10px;
  padding: 25px;
  min-width:400px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  font-family: AleoBold;
  font-size: 20px;
  border: none;
  background: #825cb5;
  color: white;
  cursor: pointer;
`;
