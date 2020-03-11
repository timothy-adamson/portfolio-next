import styled from "styled-components";

const MobileRevealCard = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQuery("sm", `display: block`)}
  max-width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardText = styled.div`
  text-align: center;
  margin: auto;
  max-width: 240px;
  line-height: 36px;
  padding: 48px 32px;
  padding-bottom: 96px;
  background: url(/RevealListBG.jpg);
  background-size: auto 100%;
  background-position: 50% 150px;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0px 12px 24px -20px rgba(0, 0, 0, 0.75);
`;

const MobileReveal = ({ children }) => {
  return (
    <MobileRevealCard>
      <CardText>{children}</CardText>
    </MobileRevealCard>
  );
};

export default MobileReveal;
