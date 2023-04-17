import React from 'react';
import { Provider } from 'react-redux';
import ChatPat from './ChaPat/ChaPat';
import store from './ChaPat/Store/store';

function App() {
  return (
    <Provider store={store}>
      <ChatPat />
    </Provider>

  );
}

export default App;
