import styled from 'styled-components'
const Div = styled.div`
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 8px;  
    font-size: 16px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #45a049;
    }
`;

const Result = styled.div`
    font-size: 18px;
    margin-top: 20px;
`;

const Hearts = styled.div`
    font-size: 20px;
    color: ${(props) => (props.hearts > 0 ? 'green' : 'red')};
`;
export{Div,Button,Result,Label,Hearts,Input}