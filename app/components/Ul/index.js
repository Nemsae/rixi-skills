import styled from 'styled-components';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;


${''/* This code is specifically for <Ul /> when rendering the Skill List portion of the profile */}
  li:nth-child(6) {
    margin-bottom: 40px;
  }

  li:nth-child(n+7) {
    display: inline-block;
    margin-bottom: 20px;

    .skill-button {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      -webkit-border-radius: 24px;
      -moz-border-radius: 24px;
      -ms-border-radius: 24px;
      -o-border-radius: 24px;
      border-radius: 24px;
    }
  }
`;

export default Ul;
