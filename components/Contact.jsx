import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 64px auto;
  padding: 32px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  & > * {
    margin: 16px 0px;
  }
`;

const UnderlinedContent = styled.div`
  cursor: pointer;
  display: flex;
  & > div {
    position: relative;
    margin-left: 24px;
  }
  & > div > div {
    position: absolute;
    width: 0%;
    height: 2px;
    transition: width 0.5s ease;
    background-color: ${({ theme }) => theme.colors.link};
  }
  &:hover {
    & > div > div {
      width: 100%;
    }
  }
`;

const Contact = React.forwardRef((props, ref) => {
  return (
    <ContactContainer ref={ref}>
      <h2>Contact</h2>
      <div>Based in South West London</div>
      <UnderlinedContent>
        <span>Email:</span>
        <div>
          <address>
            <a href="mailto:t.c.r.adamson@gmail.com">t.c.r.adamson@gmail.com</a>
          </address>
          <div />
        </div>
      </UnderlinedContent>
      <UnderlinedContent>
        <div>
          <a href="https://www.linkedin.com/in/timothyadamson/">
            <img style={{ height: "36px" }} src="/LI-Logo.png"></img>
          </a>
          <div />
        </div>
      </UnderlinedContent>
    </ContactContainer>
  );
});

export default Contact;
