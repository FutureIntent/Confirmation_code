// eslint-disable-next-line import/no-extraneous-dependencies
import { useDisclosure } from '@chakra-ui/hooks';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from '@chakra-ui/modal';
import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

import ContactUs from '@components/organisms/Forms/ContactUs';
import { useTranslation } from "react-i18next";

const StyledModal = styled(ModalContent)`
    &.chakra-modal__content {
        border-radius: ${({ theme }) => theme.space['2xs']};
        padding: 30px;
        width: auto;
        z-index: 99;
    }
`;

const ContactUsModal = ({ children }: { children: ReactElement }): ReactElement => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {cloneElement(children, { onClick: onOpen })}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <StyledModal>
                    <ModalHeader width="100%" textAlign="left">
                        <Typography
                            mb={10}
                            variant="h4"
                            color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                        >
                            {t('askQuestion')}!
                        </Typography>
                    </ModalHeader>
                    <ModalBody>
                        <ContactUs onSuccess={onClose} />
                    </ModalBody>
                </StyledModal>
            </Modal>
        </>
    );
};

export default ContactUsModal;
