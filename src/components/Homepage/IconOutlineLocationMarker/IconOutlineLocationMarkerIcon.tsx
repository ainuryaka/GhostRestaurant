import { memo, SVGProps } from 'react';

const IconOutlineLocationMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.6569 13.6569C12.7202 14.5935 10.7616 16.5521 9.4138 17.8999C8.63275 18.681 7.36768 18.6814 6.58663 17.9003C5.26234 16.576 3.34159 14.6553 2.34315 13.6569C-0.781049 10.5327 -0.781049 5.46734 2.34315 2.34315C5.46734 -0.781049 10.5327 -0.781049 13.6569 2.34315C16.781 5.46734 16.781 10.5327 13.6569 13.6569Z'
      stroke='#171A1F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z'
      stroke='#171A1F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineLocationMarkerIcon);
export { Memo as IconOutlineLocationMarkerIcon };
