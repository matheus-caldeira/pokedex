import styled from 'styled-components';

const PROGRESS_SIZE = 2.48;

type Props = {
  progress: number;
};

export const Container = styled.div<Props>`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  position: relative;

  h4 {
    text-align: end;
    width: 1.75rem;
  }

  .break {
    margin: 0 12px;
    height: 1rem;
  }

  p {
    margin-right: 8px;
  }

  div {
    flex: 1;
    height: 4px;
    position: relative;
    margin: 0;
    padding: 0;

    .progress {
      position: absolute;
      width: 100%;
      width: ${props => `${props.progress / PROGRESS_SIZE}%`};
      height: 4px;

      &.opacity {
        width: 100%;
        opacity: 0.2;
      }
    }
  }
`;
