import { gql } from 'apollo-server';

export const root = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;
