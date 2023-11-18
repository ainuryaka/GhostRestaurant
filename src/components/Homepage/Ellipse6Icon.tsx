import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5.5} cy={5.5} r={5.5} fill='#C4C4C4' />
  </svg>
);
const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
