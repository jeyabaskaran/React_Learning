import logo from './logo.svg';
import './App.css';
import Greek from './Component/Greek';
import MyComponent from './Component/ClassComponent';
import JSXCOmponent from './Component/classJSXExample';
import StateExample from './Component/StateExample';
import SetStateCount from './Component/SetStateCount';
import DA from './Component/ClassComponent';

function App() {
  return (
    <div className="App">
      <DA name="duldl"/>
      <Greek name="Hi" others="Dummy3" />
      {/* <SetStateCount /> */}
      {/* <StateExample /> */}
      {/* <Greek name="Hi" others="Dummy1" />
      <p> Data Child </p>
      <Greek name="Hi" others="Dummy2" />
      <button>Button Child</button>
      <MyComponent name="dummy1" />
      <MyComponent name="dummy1" />
      <MyComponent name="dummy1" /> */}


      {/* <JSXCOmponent /> */}
    </div>
  );
}

export default App;
