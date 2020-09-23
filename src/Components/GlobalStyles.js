
import {createGlobalStyle} from "styled-components"//createGlobalStyle에 styled-component를 사용 할거다
import reset from "styled-reset" // styled-reset 을 사용하기 위해

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration : none;
        color:inherit;
    }
    *{box-sizing:border-box;}
    body{
        font-family : sanserif;
        font-size: 14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:30px;
    }
`;
export default GlobalStyles;
