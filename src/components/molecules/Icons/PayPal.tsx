import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const ArrowUp = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <path d="M9.55688 28.9903L10.0699 25.6878L8.92784 25.6604H3.47266L7.26365 1.29142C7.27565 1.21754 7.31287 1.15009 7.369 1.10057C7.42489 1.05203 7.49651 1.02544 7.57054 1.02576H16.7694C19.823 1.02576 21.9299 1.67006 23.0292 2.94187C23.5166 3.48384 23.8614 4.13869 24.0323 4.84729C24.199 5.71574 24.199 6.60796 24.0323 7.47641L24.0201 7.55275V8.22453L24.5361 8.52073C24.9307 8.72375 25.2847 8.99751 25.5804 9.32839C26.0412 9.87602 26.3371 10.5431 26.4339 11.2521C26.553 12.1841 26.5122 13.1295 26.3133 14.0477C26.1192 15.1592 25.7371 16.2295 25.1835 17.2127C24.7315 17.9915 24.122 18.6675 23.3941 19.1975C22.6655 19.7107 21.8481 20.0845 20.9833 20.2998C19.9984 20.5458 18.986 20.6643 17.971 20.6525H17.258C16.7444 20.6542 16.2484 20.8394 15.8594 21.1747C15.4684 21.5154 15.21 21.983 15.1296 22.4953L15.0762 22.7931L14.1693 28.6208L14.1281 28.8345C14.1237 28.881 14.1019 28.9241 14.067 28.9552C14.0403 28.9773 14.007 28.9896 13.9723 28.9903H9.55688Z" fill="#253B80"/>
        <path d="M25.0326 7.62195C25.0052 7.80007 24.9736 7.98227 24.938 8.16854C23.7257 14.4833 19.5759 16.6635 14.2749 16.6635H11.5725C11.2578 16.6653 10.9542 16.7798 10.7167 16.9863C10.4792 17.1927 10.3235 17.4774 10.2778 17.7888L8.90373 26.6731L8.51287 29.1908C8.49683 29.2899 8.50236 29.3913 8.5291 29.4881C8.55583 29.5848 8.60314 29.6747 8.66778 29.7515C8.73242 29.8284 8.81289 29.8903 8.90367 29.9332C8.99445 29.9761 9.09342 29.9988 9.19382 30H13.9772C14.2531 29.9983 14.5193 29.8982 14.7278 29.7176C14.9364 29.5371 15.0736 29.288 15.1147 29.0152L15.162 28.7694L16.0628 22.9676L16.1208 22.6501C16.1613 22.3769 16.2983 22.1272 16.5069 21.9463C16.7156 21.7654 16.9821 21.6651 17.2583 21.6638H17.9743C22.6112 21.6638 26.2419 19.7553 27.303 14.2314C27.5835 13.2887 27.6429 12.294 27.4766 11.3246C27.3103 10.3552 26.9228 9.43717 26.3441 8.64184C25.9728 8.22477 25.5283 7.87912 25.0326 7.62195Z" fill="#179BD7"/>
        <path d="M23.7683 7.11534C23.5831 7.06037 23.3922 7.00948 23.1958 6.96266C22.9993 6.91584 22.7958 6.87716 22.5851 6.84662C21.7973 6.72295 21.0007 6.66321 20.2033 6.66799H13.0015C12.829 6.66772 12.6588 6.70689 12.5037 6.7825C12.3345 6.86518 12.1879 6.9877 12.0764 7.13956C11.965 7.29141 11.8921 7.46805 11.864 7.65429L10.3372 17.5036L10.293 17.7906C10.3386 17.4792 10.4943 17.1945 10.7318 16.9881C10.9693 16.7816 11.273 16.6671 11.5877 16.6654H14.2855C19.585 16.6654 23.7347 14.4836 24.9485 8.17034C24.9852 7.98408 25.0157 7.80086 25.0432 7.62376C24.7235 7.45388 24.39 7.31138 24.0462 7.19778C23.9516 7.16572 23.8676 7.13671 23.7683 7.11534Z" fill="#222D65"/>
        <path d="M11.8627 7.65375C11.8908 7.46769 11.9637 7.29126 12.0751 7.13965C12.1866 6.98804 12.3332 6.86581 12.5024 6.78349C12.6574 6.70798 12.8277 6.66882 13.0001 6.66898H20.2096C21.0059 6.66335 21.8014 6.72207 22.5883 6.84456C22.7919 6.87815 22.9955 6.91683 23.199 6.96059C23.4026 7.00436 23.5934 7.05525 23.7716 7.11327L24.0449 7.19877C24.3884 7.31281 24.7219 7.4553 25.0418 7.62474C25.2747 6.69639 25.283 5.72592 25.0661 4.79372C24.8491 3.86151 24.4132 2.99441 23.7945 2.26422C22.4173 0.677891 19.9409 0 16.7728 0H7.57548C7.26003 0.00168773 6.9556 0.116231 6.71729 0.322905C6.47897 0.529579 6.3225 0.81473 6.27619 1.12676L2.44397 25.7476C2.42548 25.8612 2.43175 25.9774 2.46235 26.0883C2.49295 26.1992 2.54714 26.3022 2.62124 26.3902C2.69533 26.4782 2.78756 26.5491 2.89162 26.5982C2.99568 26.6473 3.10911 26.6732 3.22415 26.6744H8.90225L10.3283 17.503L11.8627 7.65375Z" fill="#253B80"/>
    </Icon>
);

export default ArrowUp;
