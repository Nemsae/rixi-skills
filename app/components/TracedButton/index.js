import styled from 'styled-components';

const TracedButton = styled.a`
  font-size: 12px;
  font-weight: 300;\
  text-decoration: none;

  margin-left: 10px;
  padding: 6px 12px 6px 12px;
  float: right;

  color: #00A4BB;

  border: 1px solid #00A4BB;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;

  cursor: pointer;

  &:hover {
    background-color: #00A4BB;
    color: #fff;
  }
`;

export default TracedButton;
