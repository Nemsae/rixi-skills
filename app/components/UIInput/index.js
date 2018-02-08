import styled from 'styled-components';

const UIInput = styled.input`
  padding: 3px 4px;
  border: 1px solid #D7DBDF;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;

  &::selection {
    background: #7fdae7;
  }
`;

export default UIInput;
