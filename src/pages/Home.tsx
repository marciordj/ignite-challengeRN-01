import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return null

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    return setTasks(oldTask => [...oldTask, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(markAsDone => markAsDone.map(task => (
      task.id === id ? {...task, done: !task.done} : task 
    )))
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTask => oldTask.filter(
      data => data.id !== id
    ))
  }
  
  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}