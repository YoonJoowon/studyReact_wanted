import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Chae_Btn_round = styled.button`
    .subTitleBtn2{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
        border: 1px solid #e1e2e4;
        border-radius: 50%;
        pointer-events: all;
        width: 36px;
        height: 36px;
    }

    .subTitleBtn2_1{
        display: flex;
        align-items: inherit;
        justify-content: inherit;
        
    }

    .subTitleBtn2_2{
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        flex-shrink: 0;
        font-size: inherit;
    }
`;

export default Chae_Btn_round;