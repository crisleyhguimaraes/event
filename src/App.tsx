import { Event } from './pages/Event';
import { ApolloProvider } from '@apollo/client';
import { Router } from "./Router";
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Event />
      </BrowserRouter>
      
    </ApolloProvider>
  )
}
  
export default App
