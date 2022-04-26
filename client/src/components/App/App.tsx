import Container from '@mui/material/Container';
import CustomizedTables from '../Table/Table'
import Header from '../Header/Header';
import {GlobalStyle} from '../../styles'
import { AppLayout } from './styles';
import BasicModal from '../Modal/AddModal';

export default function App() {

  return (
    <AppLayout>
      <Header />
      <Container maxWidth="md">
        <CustomizedTables />
        <BasicModal />
      </Container>
      <GlobalStyle />
    </AppLayout>
  );
}
