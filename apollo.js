import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "https://a1b6-121-175-132-62.ngrok.io/graphql",
  cache: new InMemoryCache(),
});


