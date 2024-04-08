import { graphql } from '../../gql'
export const verifyGooglerUserTokenQuery = graphql(`#graphql
    query verifyToken($token: String!) {
        verifyGoogleToken(token: $token)
    }`);