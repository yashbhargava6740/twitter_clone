import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== 'undefined';
// Since next js uses server side redering so when we are rendering this page at server side, so we dont have any window so at that time we might encounter some error, that is why we are checking whether we are rendering this page on server side or client side



export const graphQlClient = new GraphQLClient("http://localhost:8000/graphql", {
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem('__twitter_token')}` : ''
    })
}); 