import './App.css';
import Header from './component/Header/Header';
import Health from './component/Health/Health';
import Question from './component/Q&A/Question';

function App() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Health></Health>
      <Question></Question>
    </div>
  );
}

export default App;
