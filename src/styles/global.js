import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #fff;        
        --text: #000;       
    }

    *{
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    html {               
        font-size: 87.5%; // 14px        
    }
    
    body{       
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--text);
    }
`

export const Container = styled.div`
    
    .header-content{       
        max-width: 100vw;
        position: fixed;
        z-index: 30;
        background: #fff;
        box-shadow: 0 -1rem 2rem #A1A1A1;

        .header{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem; 
                        
    
            .name{
                font-size: 1.6rem;
                font-weight: 600;
                color: #000;
            }
                
            img{
                max-width: 12rem;
            }
        }

        nav{        
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: scroll;
            font-size: 1rem; 
    
            .link{
                display: flex;
                color: var(--text);
                padding: .5rem 1rem;
                margin: .5rem;
                text-align: center;
                text-decoration: none;
                font-weight: 500;
                transition: all .2s;
                border-radius: 1rem;
            }
        }
    }
`

export const BurguerContent = styled.div`
    padding: 1rem;
    position: relative;
    top: 12rem;
    max-width: 425px;

    .search{
        font-size: 1rem;
        width: 100%;
        margin: 0 0 1rem 0;
        padding: .4rem .6rem;
        border-radius: 2rem;
        border: solid #d6d6d6 .1rem;
        background: #fff;
    }

    ul{
        list-style: none;

        li{
            margin-bottom: 2rem;

            .front{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                border-radius: 2rem;
                padding: 0;
                margin: 0 1rem 1rem 1rem;
                box-shadow: 0 0 2rem #D6d6d6;

                .price-container{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price-ok{
                        visibility: hidden;
                        margin: 0;
                        padding: .7rem;
                        background: red;
                        border-radius: 0 2rem 0 2rem;
    
                        p{
                            font-size: 1.2rem;
                            font-weight: 600;
                            color: #fff;
                        }
                    }

                    .price{     
                        margin: 0;                  
                        padding: .7rem;
                        background: #D33438;
                        border-radius: 0 2rem 0 2rem;
    
                        p{
                            font-size: 1.2rem;
                            font-weight: 600;
                            color: #fff;
                        }
                    }
                }
                

                .text{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 0 1rem 1rem 1rem;

                    .description{
                        color: #878787;
                        text-align: center;
                    }

                    .title{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        
                        margin: .5rem 0;
    
                        h3{
                            font-size: 1.4rem;
                            font-weight: 600;
                        }                           
                    }
                }
            }
        }
    }

    img{
        max-width: 60%;
    }
`