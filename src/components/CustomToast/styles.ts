import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

interface CustomToastProps{
  color: string;
}
export const Container = styled.div<CustomToastProps>`
  min-width: 25rem;
  position: relative;

  .customToast{
    display: flex;
    align-items: center;
    border-radius: .4rem;
    border: 1px solid ${transparentize(0.75, 'gray')};
    background-color: ${(props) => transparentize(0.75, props.color)};
    border-bottom: 1px solid gray;
    box-shadow: 0 2px 2px ${transparentize(0.75, 'gray')};
    color: #000;
  }

  /* background-color: ${(props) => props.color}; */
  .customToastImage{
    margin: .2rem .5rem 0 .5rem;
    width: 3rem;
    height: 2.5rem;
    overflow: hidden;
    position: relative;

    &>div{
      transform: scale(.3);
      left: -25%;
      top: 70%;
    }
  }

  .customToastContent{
    background-color: #e5e5e5;
    border-radius: .25rem;
    height: 100%;
    padding: .2rem .5rem;
    display: flex;
    font-size: .75rem;
    max-width: 20rem;
    & span{
      margin-left: 4px;
    }
  }
`;