import styled from 'styled-components';

const UIButton = styled.a`
  background: #f5f5f5;
  color: #45494B;

  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-shadow: none;

  display: inline-block;
  height: 38px;
  cursor: pointer;

  padding: 0 40px;

  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;

  &:hover {
    background: #EBEDEF;
    text-decoration: none;
  }
`;

export default UIButton;
