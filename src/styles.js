import { createGlobalStyle} from 'styled-components';

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

*{
 margin: 0px;
 padding: 0px;
 outline: 0px;
 box-sizing: border-box;
}
html,body,#root{
        height: 100%;
    }
html{
        font-size: 100%; 
    }
body{
    font: 400px 14px Roboto, sans-serif;
    background: #fff;
    -webkit-font-smoothing: antialiased;
}

input,button,textarea{
    font:400px 18px Roboto, sans-serif;
}


a:link{
    text-decoration: none;
}

@media (max-width : 600 ){
    html{
            font-size: 30%; /* 1rem = 10px */
        }
}

`

export default globalStyles