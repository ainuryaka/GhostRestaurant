import { memo, SVGProps } from 'react';

const HotFood1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_199_4909)'>
      <mask
        id='mask0_199_4909'
        style={{
          maskType: 'luminance',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={29}
        height={29}
      >
        <path d='M0 1.90735e-06H28.3333V28.3333H0V1.90735e-06Z' fill='white' />
      </mask>
      <g mask='url(#mask0_199_4909)'>
        <path
          d='M27.5032 14.1667H0.830078C0.830078 18.5019 3.60442 22.1798 7.4707 23.5486V25.7877H20.8626V23.5486C24.7289 22.1798 27.5032 18.5019 27.5032 14.1667Z'
          stroke='#4D592B'
          strokeWidth={1.66015}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1.39816 17.487H26.9347'
          stroke='#4D592B'
          strokeWidth={1.66015}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.18621 2.54557C8.26936 3.46241 8.26936 4.94903 9.18621 5.86588C10.1031 6.78272 10.1031 8.26934 9.18621 9.18619'
          stroke='#ED5700'
          strokeWidth={1.66015}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.1667 2.54557C13.2498 3.46241 13.2498 4.94903 14.1667 5.86588C15.0835 6.78272 15.0835 8.26934 14.1667 9.18619'
          stroke='#ED5700'
          strokeWidth={1.66015}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19.1472 2.54557C18.2303 3.46241 18.2303 4.94903 19.1472 5.86588C20.064 6.78272 20.064 8.26934 19.1472 9.18619'
          stroke='#ED5700'
          strokeWidth={1.66015}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_199_4909'>
        <rect width={28.3333} height={28.3333} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(HotFood1Icon);
export { Memo as HotFood1Icon };
