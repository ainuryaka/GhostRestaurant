import { memo, SVGProps } from 'react';

const IconOutlineCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 6L4 10L14 0' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(IconOutlineCheckIcon);
export { Memo as IconOutlineCheckIcon };
