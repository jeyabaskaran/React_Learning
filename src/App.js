import logo from './logo.svg';
import './App.css';
import Greek from './Component/Greek';
import MyComponent from './Component/ClassComponent';
import JSXCOmponent from './Component/classJSXExample';
import StateExample from './Component/StateExample';
import SetStateCount from './Component/SetStateCount';
import DA from './Component/ClassComponent';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventHandler from './Component/EventHandler';
import ParentComponent from './Component/ParentComponent';
import ValidateComponent from './Component/ValidateComponent';
import ListHandle from './Component/ListHandle';

function App() {
  return (
    <div className="App">
      <ListHandle />
      {/* <ParentComponent /> */}
      {/* <ValidateComponent /> */}
      {/* <EventHandler /> */}

      {/* <DA name="duldl"/>
      <Greek name="Hi" others="Dummy3" /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
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
