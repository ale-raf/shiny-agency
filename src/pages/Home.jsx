import { Link } from "react-router-dom";
import HomeIllustration from "../assets/home-illustration.svg";
import styled from "styled-components";
import { colors } from "../utils/style/colors";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  padding: 60px;
  background-color: ${colors.backgroundLight};
  border-radius: 15px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  max-width: 90%;
  margin-bottom: 90px;
  font-size: 4rem;
  line-height: 5rem;
`;

const StyledLink = styled(Link)`
  max-width: 25%;
  padding: 10px 15px;
  color: #8186a0;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

/* eslint-disable react/no-unescaped-entities */
export const Home = () => {
  return (
    <HomeWrapper>
      <LeftCol>
        <StyledTitle>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </LeftCol>
      <img src={HomeIllustration} />
    </HomeWrapper>
  );
};
