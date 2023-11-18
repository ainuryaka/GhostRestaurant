import { memo, SVGProps } from 'react';

const IconOutlinePhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 2C0 0.895431 0.895431 0 2 0H5.27924C5.70967 0 6.09181 0.27543 6.22792 0.683772L7.72574 5.17721C7.88311 5.64932 7.66938 6.16531 7.22427 6.38787L4.96701 7.5165C6.06925 9.96122 8.03878 11.9308 10.4835 13.033L11.6121 10.7757C11.8347 10.3306 12.3507 10.1169 12.8228 10.2743L17.3162 11.7721C17.7246 11.9082 18 12.2903 18 12.7208V16C18 17.1046 17.1046 18 16 18H15C6.71573 18 0 11.2843 0 3V2Z'
      stroke='#171A1F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlinePhoneIcon);
export { Memo as IconOutlinePhoneIcon };
