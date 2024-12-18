# React Router v6: Accessing Parent Route Parameters in Nested Routes

This repository demonstrates a common issue and its solution when using the `useParams` hook in nested routes within React Router v6. The problem arises when trying to access parameters from parent routes within child components.

## Problem

The `useParams` hook in React Router v6 only provides parameters for the currently active route. If a child component needs parameters from its parent route, simply calling `useParams` won't work. 

## Solution

The solution involves passing the parent route parameters as props from the parent component to the child component.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.