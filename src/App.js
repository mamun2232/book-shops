import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import './App.css';
import Header from './components/Header/Header';
import AllBooks from './components/AllBooks/AllBooks';
import Question from './components/Question/Question';


function App() {
  return (
    <div className="book-shops">
     <Header></Header>
     <AllBooks></AllBooks>
     <Question></Question>
     
    </div>
  );
}

export default App;
