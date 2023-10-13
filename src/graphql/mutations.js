/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStock = /* GraphQL */ `
  mutation CreateStock(
    $input: CreateStockInput!
    $condition: ModelStockConditionInput
  ) {
    createStock(input: $input, condition: $condition) {
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
export const updateStock = /* GraphQL */ `
  mutation UpdateStock(
    $input: UpdateStockInput!
    $condition: ModelStockConditionInput
  ) {
    updateStock(input: $input, condition: $condition) {
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
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock(
    $input: DeleteStockInput!
    $condition: ModelStockConditionInput
  ) {
    deleteStock(input: $input, condition: $condition) {
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
export const createFeed = /* GraphQL */ `
  mutation CreateFeed(
    $input: CreateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    createFeed(input: $input, condition: $condition) {
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
export const updateFeed = /* GraphQL */ `
  mutation UpdateFeed(
    $input: UpdateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    updateFeed(input: $input, condition: $condition) {
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
export const deleteFeed = /* GraphQL */ `
  mutation DeleteFeed(
    $input: DeleteFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    deleteFeed(input: $input, condition: $condition) {
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
