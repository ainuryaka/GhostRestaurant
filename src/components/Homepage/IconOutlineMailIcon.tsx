import { memo, SVGProps } from 'react';

const IconOutlineMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.75 4L10.6132 10.5755C11.453 11.1353 12.547 11.1353 13.3868 10.5755L23.25 4M3.25 17.75H20.75C22.1307 17.75 23.25 16.6307 23.25 15.25V2.75C23.25 1.36929 22.1307 0.25 20.75 0.25H3.25C1.86929 0.25 0.75 1.36929 0.75 2.75V15.25C0.75 16.6307 1.86929 17.75 3.25 17.75Z'
      stroke='#A50000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineMailIcon);
export { Memo as IconOutlineMailIcon };
