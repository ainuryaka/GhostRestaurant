import { memo, SVGProps } from 'react';

const Line6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 380 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1.4948L380 0.494797' stroke='white' strokeWidth={2} />
  </svg>
);
const Memo = memo(Line6Icon);
export { Memo as Line6Icon };
