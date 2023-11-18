import { memo, SVGProps } from 'react';

const IconOutlineCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.333333 4.66667L3 7.33333L9.66667 0.666667'
      stroke='#F9FAFB'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineCheckIcon);
export { Memo as IconOutlineCheckIcon };
