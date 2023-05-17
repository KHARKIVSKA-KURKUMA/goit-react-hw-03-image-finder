import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Searchbar></Searchbar>
      <ImageGallery></ImageGallery>
      <Loader></Loader>
      <Button></Button>
      <Modal></Modal>
    </Container>
  );
};
export default App;
