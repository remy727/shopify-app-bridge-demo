import {Provider, Loading} from '@shopify/app-bridge-react';

const config = {
  host: 'xxx',
  apiKey: 'xxx',
};

function App() {
  return (
    <Provider config={config}>
      <Loading />
    </Provider>
  );
}

export default App;
