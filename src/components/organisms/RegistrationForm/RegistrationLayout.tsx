import { useState } from 'react';

import Box from '@components/atoms/Box';

import BannerBlock from '@components/organisms/RegistrationForm/BannerBlock';
import FormBlock from '@components/organisms/RegistrationForm/FormBlock';
import Confirmation from '@components/organisms/RegistrationForm/Confirmation';
import Success from '@components/organisms/RegistrationForm/Success';


const RegistrationLayout = () => {

    const [displayComponents, setDisplayComponents] = useState({
        registration: true,
        confirmation: false,
        success: false
    });

    const [userEmail, setUserEmail] = useState('');

    const storeUserEmail = (email: string) => setUserEmail(email);

    const showConfirmation = () => {
        setDisplayComponents({
            registration: false,
            confirmation: true,
            success: false
        });
    }

    const showSuccess = () => {
        setDisplayComponents({
            registration: false,
            confirmation: false,
            success: true
        });
    }


    // {isSuccess ? <Confirmation email={userEmail} /> : <FormBlock handleOnSuccess={handleOnSuccess} storeUserEmail={storeUserEmail} />}
    // { <Confirmation email={"Future"} /> }
    // {<Success />}

    return (
        <Box display="flex" height="100%">
            <BannerBlock />
            {displayComponents.registration && <FormBlock showConfirmation={showConfirmation} storeUserEmail={storeUserEmail} />}
            {displayComponents.confirmation && <Confirmation email={userEmail} refreshTime={60} trialNumber={3} showSuccess={showSuccess} />}
            {displayComponents.success && <Success />}
        </Box>
    );
};

export default RegistrationLayout;
