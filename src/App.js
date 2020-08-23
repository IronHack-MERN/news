import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [category, setCategory] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=87d631c59e0c4e1698100547578a5ed7`;
                
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
      console.log(noticias.articles);
    }
    consultarAPI();
  }, [category]);


  return (
    <Fragment>
      <Header
        title= {'News'}
      />
      <div className='container white'>
        <Form
          setCategory = {setCategory}
        />
      </div>
    </Fragment>
  );
}

export default App;
