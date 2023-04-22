import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;

  .heart {
    color: red;
    margin: 0 5px;
  }

  .social-links {
    display: flex;
    margin-top: 20px;
  }

  .social-links li {
    list-style-type: none;
    margin-left: 10px;
  }

  .social-links li a {
    color: #000;
  }
`;
