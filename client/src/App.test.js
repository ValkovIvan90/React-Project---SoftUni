import { BrowserRouter } from 'react-router-dom';
import { render} from '@testing-library/react';

import App from './App';


describe('App', () => {

  test('empty test', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});