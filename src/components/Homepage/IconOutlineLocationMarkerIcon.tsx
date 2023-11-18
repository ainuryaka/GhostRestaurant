import { memo, SVGProps } from 'react';

const IconOutlineLocationMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.0711 17.8211C15.8152 19.077 13.0891 21.803 11.4126 23.4795C10.6316 24.2605 9.36798 24.2601 8.58693 23.4791C6.93868 21.8308 4.26912 19.1613 2.92893 17.8211C-0.976311 13.9158 -0.976311 7.58418 2.92893 3.67893C6.83418 -0.226311 13.1658 -0.226311 17.0711 3.67893C20.9763 7.58418 20.9763 13.9158 17.0711 17.8211Z'
      stroke='#A50000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.75 10.75C13.75 12.8211 12.0711 14.5 10 14.5C7.92893 14.5 6.25 12.8211 6.25 10.75C6.25 8.67893 7.92893 7 10 7C12.0711 7 13.75 8.67893 13.75 10.75Z'
      stroke='#A50000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineLocationMarkerIcon);
export { Memo as IconOutlineLocationMarkerIcon };
