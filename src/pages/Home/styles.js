import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header" 
    "content"
    "footer";
`;


//sabores
export const FrontCover  = styled.div`
  margin-top: 64px;
  margin-inline: auto;
 

  > img {
    width: 632px;
    margin-top: 31px;
  }`

export const Content = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    grid-area: content;
    padding: 164px 124px 100px 124px;   

    > div {
        display: flex;
        align-items: center;
        justify-content: end;
        position: relative;

        border-radius: 8px;
        height: 260px;
        margin-top:27px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        div {
            margin-right: 47px;
        }

        img {
            position: absolute;
            bottom: 0;
            left: 10px;
            display: inline-block;

        @media (max-width: 700px) {
        width: 100%;
           
        max-width: 40%;         
        }}}

    @media (max-width: 1100px) {
        width: 100%;
        
        margin: auto;

        > div {

            width: 800px;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }}}

    @media (max-width: 900px) {
        max-width: 400px;
        padding-top: 64px;
        margin: auto;

        > div {

            width: 400px;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }}}
`;