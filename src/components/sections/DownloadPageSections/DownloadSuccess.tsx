import { ISupportedPlatformOS } from "@components/organisms/DownloadDemo/DownloadDemo";
import Box from "@components/atoms/Box";
import GridParent from "@components/templates/GridParent";
import GridChild from "@components/templates/GridChild";
import WindowsSteps from "@components/sections/DownloadPageSections/Success/WindowsSteps";
import AppleSteps from "@components/sections/DownloadPageSections/Success/AppleSteps";
import LinuxSteps from "@components/sections/DownloadPageSections/Success/LinuxSteps";
import EnjoyOurProduct from "@components/sections/DownloadPageSections/Success/EnjoyOurProduct";


const DownloadSuccess = ({ platform }: { platform: ISupportedPlatformOS }) => {
    let Tutorial;

    switch(true) {
        case platform === ISupportedPlatformOS.windows:
            Tutorial = WindowsSteps;
            break;
        case platform === ISupportedPlatformOS.appleIntel:
            Tutorial = AppleSteps;
            break;
        case platform === ISupportedPlatformOS.linux:
            Tutorial = LinuxSteps;
            break;
        default:
            Tutorial = () => <></>;
    }

    return (
        <>
            <Box mt="-5%" zIndex="1" >
                <GridParent>
                    <GridChild gridColumn={{ _: "1 / span 12", mobileM: "2/ span 10", tabletL: "3 / span 8"}}>
                        <Tutorial />
                    </GridChild>
                </GridParent>
                <EnjoyOurProduct />
            </Box>
        </>
    )
}

export default DownloadSuccess;
