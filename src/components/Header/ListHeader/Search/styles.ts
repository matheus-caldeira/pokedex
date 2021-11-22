/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';

const toLeft = keyframes`
  from {
    left: 45%;
  }

  to {
    left: 0;
  }
`;

const toRight = keyframes`
  from {
    left: 0;
  }

  to {
    left: 45%;
  }
`;

export const Container = styled.div`
  height: 1.5rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.25rem 1.5rem;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.secondary};
  border: 0.063rem solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;

  label {
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    animation: ${toRight} 150ms linear;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.input};

    img {
      height: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  button {
    position: absolute;
    right: 8px;
    height: 100%;
    width: auto;
    transform-origin: 50% 50%;
    padding: 0 0.25rem;

    display: none;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.input};
    background: none;
    border: none;

    img {
      width: 0.5rem;
    }
  }

  input {
    flex: 1;
    border: none;
    background: none;
    outline: 0;
    vertical-align: bottom;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    left: 0.8px;
    animation: ${toLeft} 150ms linear;

    p {
      display: none;
    }
  }

  input:focus ~ button,
  input:not(:placeholder-shown) ~ button {
    display: flex;
  }
`;
