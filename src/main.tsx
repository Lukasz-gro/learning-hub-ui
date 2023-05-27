import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import SubmitStatusProvider from './contexts/SubmitStatusContext';
import UserProvider from './contexts/UserContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <SubmitStatusProvider>
        <App />
      </SubmitStatusProvider>
    </UserProvider>
  </QueryClientProvider>
);
