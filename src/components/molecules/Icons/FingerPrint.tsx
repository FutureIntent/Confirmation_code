import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const FingerPrint = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 20 21" {...rest}>
        <path
            d="M19.7704 8.45291C19.717 8.2101 19.5693 7.99845 19.3597 7.86452C19.1502 7.73059 18.8961 7.68536 18.6532 7.73877C18.4104 7.79218 18.1987 7.93986 18.0647 8.14932C17.9308 8.35879 17.8855 8.61288 17.939 8.85569C18.0999 9.64765 18.1613 10.4566 18.1218 11.2638C18.1203 11.5121 18.2171 11.7508 18.3911 11.928C18.5651 12.1052 18.8021 12.2063 19.0504 12.2093C19.2979 12.2093 19.5354 12.1114 19.711 11.9369C19.8866 11.7624 19.986 11.5256 19.9875 11.2781C20.0298 10.331 19.9569 9.38237 19.7704 8.45291ZM10.0047 10.1097C9.75617 10.1097 9.5178 10.2084 9.34205 10.3842C9.16631 10.5599 9.06757 10.7982 9.06757 11.0467C9.11208 13.8387 8.74628 16.6221 7.98186 19.3079C7.91442 19.5473 7.94486 19.8037 8.06649 20.0206C8.18812 20.2376 8.39099 20.3974 8.63044 20.4648C8.86989 20.5322 9.12632 20.5018 9.34333 20.3802C9.56033 20.2586 9.72013 20.0558 9.78757 19.8164C10.5963 16.9649 10.9814 14.0101 10.9304 11.0467C10.9304 10.7982 10.8317 10.5599 10.6559 10.3842C10.4802 10.2084 10.2418 10.1097 9.99328 10.1097H10.0047ZM5.64473 6.1448C5.54954 6.06691 5.43989 6.00858 5.32209 5.97317C5.20428 5.93775 5.08064 5.92594 4.95826 5.93841C4.83589 5.95089 4.71718 5.9874 4.60895 6.04586C4.50073 6.10431 4.40512 6.18357 4.3276 6.27906C3.32446 7.51475 2.78836 9.06404 2.81331 10.6553C2.83585 12.1222 2.71624 13.5878 2.45616 15.0316C2.4344 15.1528 2.43673 15.277 2.463 15.3973C2.48927 15.5176 2.53899 15.6315 2.60929 15.7326C2.6796 15.8336 2.76913 15.9198 2.87277 15.9863C2.97641 16.0528 3.09212 16.0982 3.21331 16.12C3.3345 16.1417 3.45879 16.1394 3.57909 16.1131C3.69938 16.0869 3.81333 16.0372 3.91441 15.9669C4.01549 15.8966 4.10173 15.8071 4.16821 15.7034C4.23469 15.5998 4.28012 15.4841 4.30188 15.363C4.58445 13.7996 4.71362 12.2124 4.68758 10.6239C4.66312 9.47303 5.05127 8.35137 5.78187 7.46168C5.85961 7.36633 5.91776 7.25656 5.95296 7.13867C5.98815 7.02079 5.99971 6.89712 5.98696 6.77475C5.97422 6.65239 5.93742 6.53375 5.87869 6.42565C5.81996 6.31754 5.74046 6.2221 5.64473 6.1448Z"
            fill="#486DFF"
        />
        <path
            d="M18.1988 4.90997C17.2565 3.57078 16.0108 2.47338 14.5633 1.70736C13.1159 0.941334 11.5078 0.528404 9.87027 0.502281C8.55173 0.473808 7.24104 0.712186 6.017 1.20308C4.79295 1.69398 3.68081 2.42726 2.74744 3.35885C1.85522 4.24568 1.15193 5.30403 0.680033 6.47005C0.208132 7.63607 -0.0225977 8.88559 0.00174368 10.1432V10.9802C-0.00206605 11.1032 0.0184206 11.2258 0.0620287 11.341C0.105637 11.4561 0.171514 11.5615 0.255893 11.6512C0.340272 11.7409 0.441489 11.813 0.553778 11.8636C0.666068 11.9141 0.787225 11.942 0.910309 11.9457H0.938874C1.18303 11.9458 1.41758 11.8506 1.59261 11.6804C1.76764 11.5102 1.86932 11.2785 1.87602 11.0345V10.1118C1.85782 9.10555 2.04333 8.10604 2.42139 7.17332C2.79946 6.24061 3.36229 5.39397 4.07602 4.6843C4.83398 3.93452 5.73566 3.3456 6.72694 2.95289C7.71822 2.56019 8.77866 2.3718 9.84457 2.39904C11.1845 2.41962 12.5007 2.75635 13.6858 3.38182C14.871 4.00728 15.8916 4.90379 16.6645 5.99832C16.8002 6.20667 17.013 6.3526 17.2563 6.40403C17.4996 6.45546 17.7533 6.40817 17.9617 6.27255C18.1701 6.13694 18.316 5.92412 18.3675 5.68091C18.4189 5.43769 18.3716 5.18401 18.236 4.97567C18.225 4.95757 18.2125 4.94038 18.1988 4.92425V4.90997ZM9.91313 3.71021C9.311 3.69614 8.70964 3.76145 8.12457 3.90446C7.88246 3.9609 7.6727 4.11119 7.54142 4.32226C7.41015 4.53333 7.36811 4.78789 7.42457 5.02995C7.48102 5.272 7.63133 5.48172 7.84245 5.61297C8.05356 5.74422 8.30817 5.78625 8.55028 5.72981C8.98584 5.62935 9.43188 5.5814 9.87885 5.58698C12.8246 5.62983 15.2588 7.98935 15.3074 10.8431C15.3309 12.325 15.2583 13.8068 15.0903 15.2793C15.0762 15.4016 15.0863 15.5255 15.1201 15.6438C15.154 15.7622 15.2108 15.8728 15.2873 15.9692C15.3638 16.0656 15.4586 16.146 15.5662 16.2058C15.6739 16.2656 15.7922 16.3036 15.9145 16.3177C16.0369 16.3318 16.1607 16.3216 16.2791 16.2878C16.3975 16.254 16.5081 16.1972 16.6045 16.1207C16.701 16.0442 16.7814 15.9494 16.8412 15.8418C16.901 15.7342 16.939 15.6159 16.9531 15.4936C17.1301 13.9404 17.2074 12.3775 17.1845 10.8145C17.1217 6.95242 13.8674 3.76734 9.91884 3.71307L9.91313 3.71021ZM9.97884 6.91528C8.94306 6.88373 7.93715 7.26472 7.18224 7.97448C6.42734 8.68424 5.98523 9.66468 5.95314 10.7002C5.95314 10.7545 5.95314 10.8088 5.95314 10.8631C5.97623 12.7333 5.79323 14.6004 5.40743 16.4305C5.35666 16.6741 5.40475 16.9279 5.54112 17.136C5.67748 17.3441 5.89095 17.4895 6.13457 17.5403C6.37819 17.5911 6.632 17.543 6.84017 17.4066C7.04833 17.2703 7.1938 17.0569 7.24457 16.8133C7.6532 14.8482 7.84482 12.8442 7.81599 10.8374C7.81371 10.2977 8.02576 9.77914 8.40557 9.39566C8.78539 9.01217 9.30192 8.79507 9.84171 8.79205H9.94456C10.5265 8.79452 11.085 9.02129 11.5038 9.42516C11.9227 9.82904 12.1696 10.3789 12.1931 10.9602C12.2222 12.8382 12.0816 14.7149 11.7731 16.5676C11.7516 16.6888 11.7541 16.813 11.7805 16.9332C11.807 17.0534 11.8568 17.1672 11.9273 17.2682C11.9977 17.3691 12.0873 17.4552 12.191 17.5215C12.2947 17.5878 12.4105 17.633 12.5317 17.6546C12.6529 17.6761 12.7771 17.6736 12.8974 17.6472C13.0176 17.6207 13.1314 17.5709 13.2324 17.5005C13.3333 17.43 13.4194 17.3404 13.4857 17.2367C13.552 17.133 13.5973 17.0173 13.6188 16.8961C13.6188 16.8961 13.6188 16.8961 13.6188 16.8733C13.9423 14.9108 14.0896 12.9232 14.0588 10.9345C14.0266 9.86839 13.5846 8.85575 12.8247 8.10717C12.0648 7.35859 11.0455 6.9317 9.97884 6.91528Z"
            fill="#486DFF"
        />
    </Icon>
);

export default FingerPrint;