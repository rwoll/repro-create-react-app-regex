import React from 'react';

function App() {
  return (
    <pre>{JSON.stringify(/[^\d\-a-z]/iu.exec("a") == null)}</pre>
  );
}

export default App;
