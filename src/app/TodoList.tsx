"use client";

import TodoItem from './TodoItem';
import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { removeAll } from '@/features/todo';
import { Flex } from '@chakra-ui/react';

const TodoList = () => {

  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}

      {todos.length > 1 &&
        <Button onClick={() => dispatch(removeAll())} colorScheme="teal" mb={6}>
          Delete All
        </Button>}
    </>
  )
}

export default TodoList