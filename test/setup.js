import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
// import server from 'src/mocks/server';
import { setupServer } from 'msw/node'
import { handlers } from 'src/mocks/handlers'
 
export const server = setupServer(...handlers)
// runs a clean after each test case (e.g. clearing jsdom)
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
