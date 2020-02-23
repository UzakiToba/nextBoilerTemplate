import styled, { css } from 'styled-components';
import { customLessThan } from '@/styles/setting/customMedia';

const queryStyle = css`
  color: red;
  background-color: green;
`;

export const H1 = styled.h1`
  font-size: 1.2rem;
  ${customLessThan('medium', queryStyle)}
`;
