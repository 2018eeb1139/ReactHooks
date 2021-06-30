import './App.css';
import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter1 from './components/HookCounter1';
import ClassCounter1 from './components/ClassCounter1';
import FinalSpace from './components/FinalSpace';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import ClassInterval from './components/ClassInterval';
import HookInterval from './components/HookInterval';
import DataFetchingOne from './DataFetchingOne';
import ComponentC from './components/ComponentC';
import CounterThree from './components/CounterThree';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounteringOne from './components/CounteringOne';
import CounteringTwo from './components/CounteringTwo';
import UserForm from './components/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserForm/>
      {/* <CounteringOne/>
      <CounteringTwo/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <HookTimer/>
      <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingOne/> */}
      {/* <CounterThree/> */}
      {/* <UserContext.Provider value={'Vivek'}>
        <ChannelContext.Provider value={'Kumar'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <HookInterval/>
      <ClassInterval/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <FinalSpace/> */}
      {/* <ClassCounter1/> */}
      {/* <HookCounter1/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
    </div>
  );
}

export default App;
