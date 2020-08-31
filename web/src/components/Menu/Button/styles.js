import styled from 'styled-components';

export const Container = styled.div`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: 500ms;

    &:hover, &:focus{
        color: var(--primary);
        border-color: var(--primary);
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;

        &:hover, &:focus{
            background-color: var(--black);
            color: var(--primary);
            font-size: 18px;
            border-color: var(--black);
        }
    }
`;