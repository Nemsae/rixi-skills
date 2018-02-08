import NormalUIInput from 'components/UIInput';

const Input = NormalUIInput.extend`
  height: 26px;
  margin-top: -7px;

  position: relative;

  &:focus {
    border: 1px solid #00A4BB;
    outline: none;
  }
`;

export default Input;
