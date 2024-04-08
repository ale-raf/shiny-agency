/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styled from "styled-components";
import DefaultPicture from "../assets/profile.png";
import { colors } from "../utils/style/colors";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardLabel = styled.span`
  padding-left: 15px;
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;
const CardImage = styled.img`
  align-self: center;
  width: 50%;
  border-radius: 50%;
`;
const CardTitle = styled.span`
  font-size: 1.5rem;
  align-self: center;
`;

export const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};

// on définit des types requis pour chaque prop
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
// on définit la valeur des props par défaut
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};
