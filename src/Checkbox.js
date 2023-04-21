import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
  overflow-y: hidden;
  font-weight : 400;
  line-height : 20px;
  width : 360px;
  margin: auto:
  font-family: Pretendard,'Pretendard JP','Pretendard Std',-apple-system,system-ui,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,'Apple SD Gothic Neo','Malgun Gothic','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

function Checkbox({ label, checked, onChange }) {

    return (
        <StyledLabel>
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </StyledLabel>
    );
}

export default Checkbox;