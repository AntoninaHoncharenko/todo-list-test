import styled from 'styled-components';

interface IPropsTitle {
  title: string | null;
}

interface IPropsDescr {
  description: string | null;
}

export const Form = styled.form`
  width: 540px;
  display: flex;
  margin: 0 auto 30px;
  align-items: baseline;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 6px;
  font-size: 18px;
`;

export const TitleInput = styled.input<IPropsTitle>`
  height: 25px;
  margin-top: 6px;
  padding: 3px 6px;
  border-color: ${props => (props.title === '' ? 'red' : 'black')};
`;

export const DescrInput = styled.input<IPropsDescr>`
  height: 25px;
  margin-top: 6px;
  padding: 3px 6px;
  border-color: ${props => (props.description === '' ? 'red' : 'black')};
`;

export const Button = styled.button`
  width: 90px;
  height: 35px;
  position: absolute;
  top: 9px;
`;

export const Error = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
`;

export const Wrap = styled.div`
  position: relative;
`;
