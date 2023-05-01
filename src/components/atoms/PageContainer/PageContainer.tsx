import styled from "styled-components";
import { getClampValue } from "@utils/helpers";

const PageContainer = styled.div<{ onlyX?: boolean }>`
    margin: 0 auto;
    max-width: 1920px;
    padding: ${({ onlyX }) => onlyX ? 0 : 'var(--header-height)'} ${getClampValue('15px', '45px')} 0;
    position: relative;
`;

export default PageContainer;
