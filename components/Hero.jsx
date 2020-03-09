import styled, { keyframes } from "styled-components";
import { Grid } from "./styled/Grid";

const bounceIn = keyframes`
0%{
  opacity: 0%;
  bottom: -24px;
}
60%{
  opacity: 60%;
  bottom: 8px;
}
100%{
  opacity: 100%;
  bottom: 0px;
}`;

const Container = styled.div`
  height: calc(100vh - 24px);
  margin: 12px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
`;

const HeroText = styled.h1`
  position: relative;
  grid-column-start: 3;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  margin: 0;
  margin-top: auto;
  animation: 0.5s ${bounceIn} ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column-start: 2;
    font-size: 48px;
  }
`;

const HeroSubtext = styled.h3`
  grid-column-start: 3;
  grid-column-end: 7;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 32px;
  line-height: 48px;
  margin: 32px auto;
  margin-bottom: auto;
  animation: 0.5s ${bounceIn} ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column-start: 2;
    font-size: 24px;
  }
`;

const Hero = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Grid alignItems="center">
        <HeroText>Timothy Adamson</HeroText>
        <HeroSubtext>Professional web development services</HeroSubtext>
      </Grid>
    </Container>
  );
});

export default Hero;
