import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 1rem 0;
  position: relative;

  & > button {
    margin: 16px 0;
    width: 100%;
    min-height: 32px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.input};
  }
`;

export const Content = styled.main`
  flex: 1;
  min-width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;

  & > * {
    width: calc((100% - 1.5rem) / 3);
  }
`;
