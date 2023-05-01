import Box from "@components/atoms/Box";
import { useTranslation } from "react-i18next";
import GridParent from "@components/templates/GridParent";
import GridChild from "@components/templates/GridChild";
import Typography from "@components/atoms/Typography";
import styled from "styled-components";
import { FONT_BOLD } from "@components/atoms/Typography/Typography";
import Button from "@components/atoms/Button";

const StyledIFrame = styled.iframe`
    header {
        display: none;
    }
`;

const WhatsNew = () => {
    const { t } = useTranslation();


    return (
        <Box mb={200} mt={60}>
            <GridParent>
                <GridChild gridColumn={{ _: "1 / span 12", mobileM: "2/ span 10", tabletL: "4 / span 6"}}>
                    <Typography variant="h2" color={{ light: 'light.brandBlack', dark: 'dark.white' }} textAlign="center">{t('whatsNew')} ?</Typography>

                    <Box my={30}>
                        <StyledIFrame src="https://docs.surfinite.com/whats_new" width="100%" height="500px" />
                    </Box>
                    <Box display="flex" justifyContent="center" mt={45}>
                        <Button as="a" href="https://docs.surfinite.com/" target="_blank" rel="noreferrer">

                            <Typography as="span" fontWeight={FONT_BOLD} mr="0.5rem" variant="paragraph" color="commons.white">{t('viewAllUpdates')}</Typography>

                        </Button>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    )
}

export default WhatsNew;
