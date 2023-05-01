import RegistrationLayout from '@components/organisms/RegistrationForm/RegistrationLayout';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const RegistrationBlock = () => (
    <section>
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptop: '3/ span 8' }} pb={120}>
                <RegistrationLayout />
            </GridChild>
        </GridParent>
    </section>
);

export default RegistrationBlock;
