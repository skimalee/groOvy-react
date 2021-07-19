import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    & > .logo {
        font-family: 'Righteous', cursive;
        font-size: 2.5rem;
        text-decoration: none;
    }
`;

export const LoginSignupContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 125px;
`;
