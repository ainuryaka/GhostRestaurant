import { memo, SVGProps } from 'react';

const IconOutlinePhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.75 3.25C0.75 1.86929 1.86929 0.75 3.25 0.75H7.34905C7.88709 0.75 8.36476 1.09429 8.5349 1.60472L10.4072 7.22151C10.6039 7.81165 10.3367 8.45664 9.78033 8.73483L6.95876 10.1456C8.33656 13.2015 10.7985 15.6634 13.8544 17.0412L15.2652 14.2197C15.5434 13.6633 16.1883 13.3961 16.7785 13.5928L22.3953 15.4651C22.9057 15.6352 23.25 16.1129 23.25 16.6509V20.75C23.25 22.1307 22.1307 23.25 20.75 23.25H19.5C9.14466 23.25 0.75 14.8553 0.75 4.5V3.25Z'
      stroke='#A50000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlinePhoneIcon);
export { Memo as IconOutlinePhoneIcon };
