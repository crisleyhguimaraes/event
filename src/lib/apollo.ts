import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5dzktu70ect01uo0x22cehd/master',
    cache: new InMemoryCache()
})