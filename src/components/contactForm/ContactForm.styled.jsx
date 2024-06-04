import styled from 'styled-components';

export const ContactFormUi = styled.form`
  width: 350px;
  height: 300px;
  margin-block: 20px;
  padding: 15px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  border: 2px black solid;
  border-radius: 15px;
  background-color: ;
`;
export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 5px;
  font-size: 25px;
`;
export const ContactFormInput = styled.input`
  width: 250px;
  margin: 0;
  padding: 5px;
  font-size: 18px;
  border: #8ca1adde 1px solid;
  border-radius: 5px;
`;
export const ContactAddButton = styled.button`
  margin-top: 10px;
  margin-left: 5px;
  width: 125px;
  height: 30px;
  padding: 2px;
  font-size: 20px;
  background-color: #6495ed;
  border-radius: 10px;
  border: 0px;

  &:hover {
    background-color: #4169e1;
    color: white;
  }
`;
