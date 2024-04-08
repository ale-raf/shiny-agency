import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/style/colors";
import { Loader } from "../utils/style/styled";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

export const Survey = () => {
  const { questionId } = useParams();
  const questionParamInt = Number(questionId);
  const prevQuestionId =
    questionParamInt === 1 ? questionParamInt : questionParamInt - 1;
  const nextQuestionId = questionParamInt + 1;
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSurvey = async () => {
      setDataLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await res.json();
        setSurveyData(surveyData);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    };
    fetchSurvey();
  }, []);

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionId}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionId]}</QuestionContent>
      )}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionId}`}>Précédent</Link>
        {surveyData[questionParamInt + 1] ? (
          <Link to={`/survey/${nextQuestionId}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
      {/* affichage conditionnel selon la route
      <Link to="client">Questionnaire client</Link>
      <Link to="freelance">Questionnaire freelance</Link>
      <Outlet /> */}
    </SurveyContainer>
  );
};
