import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Details, About, Home } from './Pages';
import { useState } from 'react';
import { SearchContext } from './context';
import { VideoList } from './Pages/Sections';

let query = '';
function App() {
  const [inputVal, setInputVal] = useState('');

  function onChange(val) {
    setInputVal(val.target.value);
  }

  function onClick() {
    query = inputVal;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header onChange={onChange} onClick={onClick} />

        <SearchContext.Provider value={{ inputVal, query }}>
          <Switch>
            <Route path='/About' component={About} exact />
            <Route path='/Details/:id' component={Details} exact />
            <Route path='/Home' component={Home} exact />
            <Route path='/' component={Home} />
          </Switch>
        </SearchContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
