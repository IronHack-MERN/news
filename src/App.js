import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [category, setCategory] = useState('');

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
