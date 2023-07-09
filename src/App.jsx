import "./App.css";
import Counter from './components/Counter';
import Text from './components/Text';

function App() {
  
  return (
    <div className = {'content'}>
      <nav className = {'nav'}>
        <Text> 0 bulbs</Text>
        <div className= {'counter'}>
            <Counter count = {0} item = {'rows'}/>
            <Counter count = {0} item = {'columns'}/>
        </div>
      </nav>
    </div>
  )
};

export default App;
