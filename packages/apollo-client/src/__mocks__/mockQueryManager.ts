import { QueryManager } from '../../src/core/QueryManager';

import { mockSingleLink, MockedResponse } from './mockLinks';

import { DataStore } from '../../src/data/store';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Helper method for the tests that construct a query manager out of a
// a list of mocked responses for a mocked network interface.
export default (...mockedResponses: MockedResponse[]) => {
  const cache = new InMemoryCache({ addTypename: false });
  return new QueryManager({
    link: mockSingleLink(...mockedResponses),
    store: new DataStore(cache),
  });
};
