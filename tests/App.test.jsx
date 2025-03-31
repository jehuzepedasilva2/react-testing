import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

// Steps
// 1. in the project directory run 'npm install vitest --save-dev'
// 2. add script to package.json 'test: vitest'
// 3. Create a testing file with the suffix test (App.test.jsx)
// 4. run 'npm run test' to run test 

// The test are similar to Jest test,
// test suites (describe), test cases (it) and assertions (expect().toBe())

// 5. install 'npm install jsdom --save-dev'
// 6. in vite.config.js add 'test: {environment: 'jsdom',}'

// 7. install react testing library 'npm install @testing-library/react @testing-library/jest-dom --save-dev'
// 8. add a test setup file in tests/setup.js with:

// import { expect, afterEach } from 'vitest';
// import { cleanup } from '@testing-library/react';
// import * as matchers from "@testing-library/jest-dom/matchers";

// expect.extend(matchers);

// afterEach(() => {
//   cleanup();
// });

// 9. include this file in the vite.config.js file:
//   test: {
//   globals: true,
//   environment: 'jsdom',
//   setupFiles: './tests/setup.js',
// },

// 10. install 'npm install @testing-library/user-event --save-dev'

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});