import { Grid } from '@mui/material';
import styled from 'styled-components';

export const DivOrderDetail = styled.div`
    padding: 32px;
`;

export const GroupHeader = styled.div`
`;

export const ContentOrderDetail = styled.div`
    background-color: #c4d3e9;
    /* height: 100vh; */
    margin-top: 29px;
    padding: 29px;
    border-radius: 14px;
    display: grid;
    grid-template-columns: 60% 38%;
    gap: 30px
`;

export const ButtonPrimary = styled.div`
    width: 98px;
    height: 39px;
    background: #134B8A;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    font-weight: 700;

    &:active {
      transform: scale(0.9);
      transition: 300ms ease-in-out;
    }
`;
export const GroupCardImg = styled.div`
    
    height: 800px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 14px;
    .group-header {
        padding: 0px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text-order {
            font-size: 24px;
            font-weight: 500;
        }
        .dod {
            width: 10px;
            height: 10px;
            border-radius: 50px;
            background: #134B8A;
        }
    }
    
    .text-dod {
        background: #134B8A;
    }
    .address {
        padding: 0px 24px;
        display: grid;
        grid-template-columns: 140px auto;
        gap: 10px;
        margin-bottom: 18px;
        .head-lable {
            width: 200px;
            margin: 0px;
            font-size: 16px;
            font-weight: 700;
        }
        .body-lable { margin: 0px;}
    }
    .opening-hour {
        padding: 0px 24px;
        display: grid;
        grid-template-columns: 140px auto;
        gap: 10px;
        .head-lable {
            margin: 0px;
            font-size: 16px;
            font-weight: 700;
        }
        .body-lable { margin: 0px;}
    }
    
`;

export const GroupCardImg2 = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 14px;
    padding: 0px 32px 32px 32px;
    p {
        font-size: 32px;
        font-weight: 500;
    }
`;

export const Dod = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: #134B8A;
`;

export const GridCustom = styled(Grid) `
    &:active {
      transform: scale(0.9);
      transition: 300ms ease-in-out;
    }
`