import { getClampValue } from '@utils/helpers';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    max-width: 1920px;
    padding: 0 ${getClampValue('15px', '45px')};
    width: 100%;
`;

export default Container;
