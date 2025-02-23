/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    createdAt
    tasks {
      nextToken
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    createdAt
    tasks {
      nextToken
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    createdAt
    tasks {
      nextToken
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createTask = /* GraphQL */ `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
    id
    title
    description
    status
    createdAt
    updatedAt
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTaskMutationVariables,
  APITypes.CreateTaskMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
    id
    title
    description
    status
    createdAt
    updatedAt
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTaskMutationVariables,
  APITypes.UpdateTaskMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
    id
    title
    description
    status
    createdAt
    updatedAt
    userId
    user {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTaskMutationVariables,
  APITypes.DeleteTaskMutation
>;
