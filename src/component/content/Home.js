import React,{useContext} from 'react';
import {CounterContext} from '../../store/CounterProvider'
import { LoginContext } from '../../store/LoginProvider'
function Home() {
    const {counter, addCounter, subCounter} = useContext(CounterContext);
    const { login,setLogin } = useContext(LoginContext)
  return (
    <div>
      Home
    </div>
  );
}

export default Home;
