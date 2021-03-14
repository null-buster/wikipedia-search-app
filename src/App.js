import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import * as serviceWorker from './components/serviceWorker';

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}
serviceWorker.unregister();
export default App;
