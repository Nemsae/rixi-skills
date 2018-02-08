import NormalUIButton from 'components/UIButton';

const UIButtonBlue = NormalUIButton.extend`
  background: #00A4BB;
  border-color: #1e7785;
  color: #fff !important;

  font-weight: normal;

  height: 26px;
  line-height: 26px;
  padding: 0 20px;
  margin: 0 3px;

  &:hover {
    background: #1e7785;
    color: #00A4BB;
    text-decoration: none;
  }
`;

export default UIButtonBlue;
