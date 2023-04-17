import React from 'react';
import { Counter } from './Components/counter/Counter';
import Pockemon from './Components/Pockemon/Pockemon';

function ChatPat() {
  return (<React.Fragment>
    <Pockemon />
    <Counter />
  </React.Fragment>
  );
}

export default ChatPat;
