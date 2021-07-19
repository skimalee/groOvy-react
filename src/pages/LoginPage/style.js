import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Form = styled.form`

`

export const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    width: 50%;
    height: 2rem;
    padding-left: 2rem;
    left: 18rem;    font-size: 1rem;
    color: #707070;
    &:focus {
        outline: none;
    }
`