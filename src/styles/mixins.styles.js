import { css } from 'styled-components';
import tw from 'twin.macro';

const button = css`
  svg {
    ${tw`mr-2 w-8`}
  }
  ${tw`flex justify-around items-center bg-white
    hover:bg-gray-100 text-gray-800 font-semibold
    py-2 px-4 border border-gray-400 rounded shadow`}
`;

const fillContainer = css`
  ${tw`w-full h-full`}
`;

const flexCenter = css`
  ${tw`flex justify-center items-center`}
`;

const flexStart = css`
  ${flexCenter}
  ${tw`items-start justify-start`}
`;

const flexBetween = css`
  ${flexCenter}
  ${tw`justify-between`}
`;

const fixed = css`
  ${tw`fixed z-10`}
`;

const box = css`
  ${tw`
    block appearance-none bg-white border leading-tight
    border-gray-400 hover:border-gray-500 px-4 py-2
    rounded shadow focus:outline-none focus:shadow-outline
    `}
`;

const mixins = {
  button,
  flexCenter,
  flexStart,
  flexBetween,
  fillContainer,
  fixed,
  box,
};

export default mixins;
