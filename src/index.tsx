import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.render(
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
