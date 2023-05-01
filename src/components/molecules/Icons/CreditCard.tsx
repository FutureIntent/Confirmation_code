import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CreditCard = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <g clipPath="url(#clip0_1313_18393)">
            <path d="M28.0356 12.9373H8.19919C7.10974 12.9373 6.22656 13.8204 6.22656 14.9099V25.3138C6.22656 26.4032 7.10974 27.2864 8.19919 27.2864H28.0356C29.1251 27.2864 30.0083 26.4032 30.0083 25.3138V14.9099C30.0083 13.8204 29.1251 12.9373 28.0356 12.9373Z" fill="#3E3E94"/>
            <path d="M21.8765 20.3471C21.7464 20.0467 21.1756 19.7964 20.8752 19.6862L20.5848 19.4259C20.2993 19.3155 19.999 19.2481 19.6936 19.2256C19.5389 19.1248 19.3702 19.0472 19.193 18.9953C18.9088 18.9772 18.6243 19.0252 18.3619 19.1355C18.3228 19.1494 18.2882 19.1736 18.2617 19.2056C17.9316 19.5587 17.6882 19.9838 17.5508 20.4472C17.5508 20.6375 17.721 20.8077 17.9213 20.988C18.0048 21.0582 18.0788 21.139 18.1416 21.2283C18.1416 21.2884 18.1416 21.3585 18.1416 21.4486C18.1946 21.6555 18.1946 21.8725 18.1416 22.0794C18.0305 22.2919 17.9626 22.5244 17.942 22.7633C17.9214 23.0022 17.9484 23.2429 18.0214 23.4713C18.0475 23.5655 18.097 23.6516 18.1653 23.7217C18.2335 23.7917 18.3184 23.8433 18.4119 23.8718C18.4615 23.8815 18.5125 23.8815 18.5621 23.8718C18.9581 23.8052 19.3284 23.6321 19.6336 23.3711C19.7553 23.2781 19.8862 23.1976 20.0241 23.1308C20.3445 23.0007 20.4947 22.6001 20.5948 22.3097C20.5948 22.2496 20.6449 22.1896 20.6649 22.1395C20.8275 21.9397 21.0328 21.7788 21.2657 21.6689C21.4797 21.5264 21.65 21.3275 21.7578 21.0942C21.8656 20.8609 21.9067 20.6023 21.8765 20.3471Z" fill="#7575B9"/>
            <path d="M18.1124 15.03C17.1059 15.0281 16.1215 15.3247 15.2836 15.8824C14.4458 16.4402 13.7923 17.2339 13.4057 18.1632C13.0192 19.0926 12.917 20.1157 13.1122 21.1031C13.3073 22.0904 13.791 22.9978 14.502 23.7102C15.213 24.4226 16.1193 24.908 17.1063 25.1051C18.0933 25.3022 19.1166 25.2021 20.0467 24.8173C20.9768 24.4326 21.7718 23.7807 22.3312 22.9439C22.8906 22.1072 23.1892 21.1233 23.1892 20.1168C23.1892 18.7695 22.6546 17.4771 21.7029 16.5235C20.7511 15.5698 19.4598 15.0327 18.1124 15.03ZM18.1124 24.753C17.0517 24.7651 16.0192 24.4115 15.1885 23.7517L15.4589 23.3411C15.6292 23.2915 15.7797 23.19 15.8895 23.0507C15.9537 22.8538 15.9744 22.6453 15.9502 22.4395C15.926 22.2338 15.8574 22.0358 15.7493 21.8591C15.7373 21.6968 15.7104 21.5359 15.6692 21.3785C15.5503 21.1957 15.3794 21.0527 15.1785 20.968C15.017 20.7236 14.911 20.4467 14.8681 20.1569C14.8654 20.1121 14.8715 20.0673 14.8862 20.025C14.9008 19.9826 14.9237 19.9436 14.9535 19.9101C14.9832 19.8766 15.0193 19.8493 15.0597 19.8298C15.1 19.8103 15.1438 19.7989 15.1885 19.7964C15.4701 19.7389 15.718 19.5736 15.8794 19.3358C16.1284 19.2761 16.3504 19.1352 16.5103 18.9352C16.5909 18.6015 16.5628 18.2506 16.4302 17.9339C16.4802 17.7334 16.4802 17.5236 16.4302 17.3231C16.3509 17.1304 16.2233 16.9614 16.0597 16.8324C15.9616 16.6113 15.8372 16.4029 15.6892 16.2116C16.1998 15.8937 16.768 15.6794 17.3614 15.5808C17.3116 15.7165 17.3116 15.8656 17.3614 16.0013C17.4621 16.179 17.6269 16.3116 17.822 16.3718C17.7992 16.4884 17.8055 16.6088 17.8405 16.7224C17.8754 16.8359 17.9379 16.9391 18.0223 17.0227C18.1174 17.0857 18.2266 17.1241 18.3402 17.1346C18.4538 17.1451 18.5682 17.1273 18.6732 17.0828C18.6732 17.283 18.6732 17.4833 18.6732 17.6936C18.6687 17.7208 18.671 17.7487 18.6797 17.7749C18.6884 17.801 18.7034 17.8247 18.7232 17.8438C18.9723 18.1196 19.2956 18.3178 19.6545 18.4146H19.7246C20.1428 18.315 20.5141 18.0746 20.776 17.7336C21.1469 17.6445 21.5116 17.5308 21.8674 17.3932C22.3708 18.0843 22.6728 18.9013 22.7399 19.7536C22.807 20.606 22.6367 21.4602 22.2477 22.2216C21.8587 22.9829 21.2664 23.6216 20.5364 24.0667C19.8064 24.5118 18.9674 24.7459 18.1124 24.743V24.753Z" fill="#7575B9"/>
            <path d="M21.8091 2.71362H1.97263C0.883177 2.71362 0 3.5968 0 4.68625V15.0901C0 16.1796 0.883177 17.0628 1.97263 17.0628H21.8091C22.8985 17.0628 23.7817 16.1796 23.7817 15.0901V4.68625C23.7817 3.5968 22.8985 2.71362 21.8091 2.71362Z" fill="url(#paint0_linear_1313_18393)"/>
            <path d="M6.51732 11.1749H3.58341C3.33455 11.1749 3.13281 11.3767 3.13281 11.6255V13.468C3.13281 13.7168 3.33455 13.9186 3.58341 13.9186H6.51732C6.76619 13.9186 6.96793 13.7168 6.96793 13.468V11.6255C6.96793 11.3767 6.76619 11.1749 6.51732 11.1749Z" fill="#EAC178"/>
            <path d="M4.88515 6.71893L4.26432 8.21092H4.11412L3.49329 6.71893V8.21092H3.13281V6.20825H3.63348L4.18421 7.57007L4.74496 6.20825H5.24563V8.21092H4.88515V6.71893Z" fill="white"/>
            <path d="M5.76745 8.52128C5.81654 8.53405 5.86866 8.52772 5.91326 8.50356C5.95787 8.47939 5.99164 8.4392 6.00777 8.3911L6.08787 8.23089L5.45703 6.71887H5.79749L6.21805 7.82034L6.64862 6.71887H7.0091L6.28814 8.47121C6.25259 8.5757 6.18285 8.66515 6.09018 8.72511C5.99752 8.78507 5.88734 8.81204 5.77746 8.80165H5.59722V8.52128H5.76745Z" fill="white"/>
            <path d="M7.88797 7.19955C7.88118 7.0639 7.90206 6.92829 7.94933 6.80097C7.9966 6.67364 8.06928 6.55726 8.16295 6.45891C8.25662 6.36056 8.36931 6.28229 8.49418 6.22887C8.61905 6.17544 8.75349 6.14798 8.88931 6.14815C9.05563 6.14116 9.22073 6.17937 9.36707 6.25871C9.51341 6.33805 9.63552 6.45556 9.72041 6.59875L9.47008 6.71891C9.41569 6.62673 9.33804 6.55046 9.2449 6.49774C9.15176 6.44502 9.0464 6.4177 8.93937 6.41851C8.84555 6.42104 8.7532 6.44238 8.66778 6.48127C8.58236 6.52016 8.50563 6.57582 8.44212 6.64492C8.37862 6.71403 8.32964 6.79519 8.29809 6.88358C8.26654 6.97197 8.25307 7.0658 8.25847 7.1595C8.25305 7.25271 8.26657 7.34605 8.29823 7.43388C8.32989 7.52172 8.37902 7.60223 8.44266 7.67054C8.5063 7.73886 8.58312 7.79357 8.66849 7.83137C8.75387 7.86917 8.84602 7.88928 8.93937 7.89047C9.0464 7.89129 9.15176 7.86396 9.2449 7.81124C9.33804 7.75852 9.41569 7.68225 9.47008 7.59007L9.77048 7.75029C9.68559 7.89348 9.56348 8.01099 9.41714 8.09033C9.2708 8.16967 9.10569 8.20788 8.93937 8.20089C8.80372 8.20768 8.66811 8.1868 8.54079 8.13953C8.41346 8.09226 8.29708 8.01958 8.19873 7.92591C8.10038 7.83224 8.02211 7.71955 7.96869 7.59468C7.91526 7.4698 7.8878 7.33537 7.88797 7.19955Z" fill="white"/>
            <path d="M10.9539 8.05073C10.8914 8.11408 10.8164 8.16371 10.7337 8.19647C10.6509 8.22922 10.5622 8.24439 10.4733 8.24098C10.4088 8.23716 10.3457 8.22064 10.2877 8.19238C10.2296 8.16411 10.1777 8.12466 10.1349 8.07629C10.0921 8.02791 10.0593 7.97156 10.0383 7.91047C10.0173 7.84938 10.0086 7.78475 10.0127 7.72029C10.011 7.65413 10.0234 7.58837 10.0489 7.52729C10.0743 7.46622 10.1124 7.4112 10.1606 7.36585C10.2088 7.32049 10.266 7.2858 10.3285 7.26406C10.391 7.24231 10.4574 7.234 10.5234 7.23965C10.6126 7.23359 10.702 7.24753 10.7852 7.28044C10.8684 7.31336 10.9431 7.36442 11.004 7.4299V7.24966C11.004 7.07944 10.8538 6.9793 10.6535 6.9793C10.5734 6.9791 10.494 6.99494 10.42 7.0259C10.3461 7.05685 10.2791 7.10229 10.223 7.15954L10.0127 6.93925C10.0994 6.86158 10.2008 6.80207 10.3108 6.76423C10.4209 6.7264 10.5374 6.711 10.6535 6.71896C10.984 6.71896 11.2644 6.85914 11.2644 7.25968V8.26101H10.9539V8.05073ZM10.9539 7.6502C10.9101 7.60106 10.8559 7.56215 10.7954 7.5362C10.7348 7.51025 10.6693 7.49789 10.6035 7.5C10.4232 7.5 10.2831 7.60013 10.2831 7.76034C10.2855 7.79943 10.2959 7.83761 10.3135 7.87259C10.3311 7.90757 10.3557 7.93862 10.3856 7.96388C10.4155 7.98913 10.4503 8.00807 10.4877 8.01956C10.5252 8.03104 10.5645 8.03483 10.6035 8.0307C10.67 8.03089 10.7358 8.01667 10.7963 7.98901C10.8568 7.96135 10.9106 7.92092 10.9539 7.87049V7.6502Z" fill="white"/>
            <path d="M11.6836 6.71887H12.014V6.93917C12.0699 6.87087 12.1402 6.81573 12.2198 6.77765C12.2994 6.73958 12.3864 6.71951 12.4746 6.71887V7.01927H12.3745C12.3016 7.02234 12.2304 7.04197 12.1662 7.07667C12.102 7.11136 12.0465 7.16022 12.004 7.21954V8.22087H11.6836V6.71887Z" fill="white"/>
            <path d="M13.7682 8.01067C13.7123 8.0821 13.6408 8.13994 13.5593 8.17983C13.4778 8.21971 13.3883 8.24062 13.2976 8.24097C13.2031 8.23901 13.11 8.21709 13.0245 8.17664C12.9391 8.1362 12.8631 8.07814 12.8017 8.00628C12.7402 7.93443 12.6946 7.85039 12.6679 7.75968C12.6412 7.66898 12.634 7.57365 12.6467 7.47996C12.6467 6.99932 12.9171 6.69892 13.2976 6.69892C13.389 6.70118 13.4788 6.72395 13.5602 6.76555C13.6417 6.80714 13.7128 6.8665 13.7682 6.93924V6.17822H14.0886V8.18089H13.7682V8.01067ZM13.7682 7.17956C13.7248 7.11959 13.6675 7.07099 13.6012 7.03787C13.535 7.00475 13.4618 6.98809 13.3877 6.9893C13.1374 6.9893 12.9772 7.18957 12.9772 7.47996C12.9702 7.53891 12.9755 7.59866 12.9928 7.65546C13.01 7.71226 13.0388 7.76488 13.0774 7.81002C13.1159 7.85515 13.1634 7.89183 13.2168 7.91774C13.2702 7.94366 13.3284 7.95825 13.3877 7.9606C13.4618 7.96181 13.535 7.94515 13.6012 7.91203C13.6675 7.87891 13.7248 7.83031 13.7682 7.77035V7.17956Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_1313_18393" x1="21.0581" y1="3.02404" x2="1.02136" y2="18.024" gradientUnits="userSpaceOnUse">
                <stop stopColor="#836CC4"/>
                <stop offset="1" stopColor="#08228A"/>
            </linearGradient>
            <clipPath id="clip0_1313_18393">
                <rect width="30" height="24.5728" fill="white" transform="translate(0 2.71362)"/>
            </clipPath>
        </defs>
    </Icon>
);

export default CreditCard;