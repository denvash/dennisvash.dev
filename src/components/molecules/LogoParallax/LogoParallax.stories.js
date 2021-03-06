import { SB_LABELS } from '@constants';
import { mixins, styled } from '@styles';
import { calc, trans } from '@utils';
import React, { useCallback } from 'react';
import { useSpring } from 'react-spring';
import LogoParallax from './LogoParallax.react';

export default {
  title: `${SB_LABELS.MOLECULES}Logo Parallax`,
};

const spring = () => ({
  xy: [0, 0],
});

const Container = styled.div`
  ${mixins.fillContainer}
  div {
    width: 60%;
  }
`;

export const Default = () => {
  const [{ xy }, set] = useSpring(spring);

  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }), [set]);
  const transform = useCallback(delta => ({ transform: xy.to(trans(delta)) }), [xy]);

  return (
    <Container onMouseMove={onMouseMove}>
      <LogoParallax transform={transform} />
    </Container>
  );
};
