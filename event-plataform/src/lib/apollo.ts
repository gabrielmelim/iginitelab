import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p57rgt1guo01xxa98aeqps/master',
    cache: new InMemoryCache()
    
})