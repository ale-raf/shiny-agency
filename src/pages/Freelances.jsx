import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Loader } from "../utils/style/styled";
import { colors } from "../utils/style/colors";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Freelances = () => {
  const [freelancersList, setFreelancersList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSurvey = async () => {
      setDataLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await res.json();
        setFreelancersList(freelancersList);
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
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
};