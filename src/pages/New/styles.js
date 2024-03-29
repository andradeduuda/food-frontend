import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-template-areas: content;
    padding: 38px 132px 122px 132px;

    .button-back {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 11px;
      font-weight: 500;
      font-size: 24px;
      color: #e1e1e6;
      margin-bottom: 24px;
    }
  }

  > header {
    grid-template-areas: header;
    display: flex;
    padding: 0 123px;
    height: 104px;
    background: #00111a;
    align-items: center;
    justify-content: space-between;

   .button-logo {
      display: flex;
      align-items: center;
      gap: 11px;
      width: max-content;

      background:#00111a;
      border:none;
      color: #ffffff;

      font-weight: 500;
      font-size: 14px;
    }
    

    .buttons {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  > .buttons, {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 40px;

    button {
      width: 357px;
      height: 48px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #ffffff;
      border-radius: 5px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
    }
  }

  .button-save{
    background: #AB4D55;
  
    width: 172px;
    height: 48px;
    border: none;

    margin-left: 1080px;
  }
`;

export const InputItem = styled.div`
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;

`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: end;
    
  .ingredients {
    flex: 80%;
   }

  .textarea {
    flex: 100%;
  }

  label,
  span, p {
    display: inline-block;
    margin-top: 32px;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 16px;
    color: #c4c4cc;
  }

`;

export const ImgPlate = styled.div`
  position: relative;
  width: 300px;

  input {
    display: none;
    }

  > label {
    width: max-content;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -4px;
    left: 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: white;
    cursor: pointer;
  }
`;
