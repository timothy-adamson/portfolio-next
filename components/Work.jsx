import styled, { useTheme } from "styled-components";
import Link from "next/link";
import { Grid } from "./styled/Grid";
import { CVicon } from "./svg/CVicon";

const Container = styled.div`
  margin-bottom: 32px;
`;

const WorkHeader = styled.h2`
  margin: 32px auto;
  text-align: center;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const WorkExampleContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 7;
  margin-top: 64px;
  color: ${({ theme }) => theme.colors.white};
  & > h4 {
    margin-top: 32px;
  }
  & > p {
    line-height: 24px;
  }
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `
      margin-top: 24px;
      grid-column-start: 2;
      grid-column-end: 12;
  `
    )}
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  white-space: nowrap;
  margin: 64px;
  & > a {
    flex: 0.5;
    & > img {
      object-fit: contain;
      height: 64px;
      padding-left: 32px;
    }
  }
  & > div {
    height: 100%;
    min-width: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `
    & > a > img {
      height: 48px;
      padding-left: 8px;
    }
`
    )}
`;

const CVbutton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 32px;
  ${({ theme }) =>
    theme.mediaQuery(
      "sm",
      `
      font-size: 12px;
      padding-right: 8px;
  `
    )}
`;

const Work = React.forwardRef((props, ref) => {
  const { windowSize } = useTheme();

  return (
    <Container ref={ref}>
      <WorkHeader>Work</WorkHeader>
      <Grid
        backgroundColor={theme => theme.colors.secondary}
        margin={windowSize <= 800 ? "0px 16px" : "0px 32px"}
      >
        <WorkExampleContainer>
          <h2>Projects</h2>
          <h4>Corporate site</h4>
          <p>
            For the Opun brand at the John Lewis Partnership, rebuilt the
            customer-facing site to drive traffic, improve SEO and deprecate a
            costly legacy WordPress site.
          </p>
          <p>
            As the sole developer on the project, worked alongside the VP of
            Design to rapidly deliver under time constraints. Utilized modern
            design tool Abstract and scaffolded the site from scratch with
            Next.js.
          </p>
          <h4>Procurement ERP module</h4>
          <p>
            At the John Lewis Partnership, delivered a React SPA for the
            internal procurement team. Its function was to execute and track
            material purchasing for home improvement projects. Worked alongside
            the senior frontend dev on a team of four.
          </p>
          <LinksContainer>
            <Link href="/TimothyAdamsonCV.pdf">
              <a>
                <CVbutton>
                  <h3>View my CV</h3>
                  <CVicon
                    height={windowSize <= 800 ? "48" : "64"}
                    width={windowSize <= 800 ? "48" : "64"}
                  ></CVicon>
                </CVbutton>
              </a>
            </Link>
            <div></div>
            <a href="https://github.com/timothy-adamson">
              <img src="/GitHub_Logo_White.png"></img>
            </a>
          </LinksContainer>
        </WorkExampleContainer>
      </Grid>
    </Container>
  );
});

export default Work;
