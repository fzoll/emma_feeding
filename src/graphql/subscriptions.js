/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock($filter: ModelSubscriptionStockFilterInput) {
    onCreateStock(filter: $filter) {
      id
      name
      madeAt
      remaining
      comment
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock($filter: ModelSubscriptionStockFilterInput) {
    onUpdateStock(filter: $filter) {
      id
      name
      madeAt
      remaining
      comment
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock($filter: ModelSubscriptionStockFilterInput) {
    onDeleteStock(filter: $filter) {
      id
      name
      madeAt
      remaining
      comment
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed($filter: ModelSubscriptionFeedFilterInput) {
    onCreateFeed(filter: $filter) {
      id
      feedAt
      name
      comment
      blog {
        id
        name
        madeAt
        remaining
        comment
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      stockPostsId
      __typename
    }
  }
`;
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed($filter: ModelSubscriptionFeedFilterInput) {
    onUpdateFeed(filter: $filter) {
      id
      feedAt
      name
      comment
      blog {
        id
        name
        madeAt
        remaining
        comment
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      stockPostsId
      __typename
    }
  }
`;
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed($filter: ModelSubscriptionFeedFilterInput) {
    onDeleteFeed(filter: $filter) {
      id
      feedAt
      name
      comment
      blog {
        id
        name
        madeAt
        remaining
        comment
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      stockPostsId
      __typename
    }
  }
`;
