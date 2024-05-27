import { useState } from 'react';
import ShowButton from './components/showButton';
import ShowPhrase from './components/showPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json';
import './App.css';

function App() {
  
  const quote = randomArr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr);
  const [image, setImage] = useState(photo);

  const appStyles = {
    backgroundImage: `url(assets/fortuna-1/fondo${image}.jpg)`
  }

  console.log(randomPhrase)

  return (
      <div className='app' style={appStyles}>
        <header>
          <h1 className='app__title'><span>GALLETAS DE LA</span> <span>FORTUNA</span></h1>
          <ShowButton
          setRandomPhrase={setRandomPhrase}
          setImage={setImage}
          />
          <ShowPhrase 
          randomPhrase={randomPhrase}
          />
        </header>
      </div>
  );
}

export default App;
