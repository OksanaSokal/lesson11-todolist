import React from 'react';
import List from '@mui/material/List';
import type {TodolistType} from '../../../../../../app/App';
import {Task} from './Task/Task';
import {useAppDispatch} from '../../../../../../common/hooks/useAppDispatch';
import {useAppSelector} from '../../../../../../common/hooks/useAppSelector';
import {selectTasks} from '../../../../model/tasksSelectors';

type Props = {
    todolist: TodolistType
}
export const Tasks = ({todolist}: Props) => {

    const tasks = useAppSelector(selectTasks)

    const allTasks = tasks[todolist.id]

    let tasksForTodolist = allTasks

    if (todolist.filter === 'active') {
        tasksForTodolist = allTasks.filter(task => !task.isDone)
    }

    if (todolist.filter === 'completed') {
        tasksForTodolist = allTasks.filter(task => task.isDone)
    }

    return (
        <>
            {
                tasksForTodolist.length === 0
                    ? <p>Тасок нет</p>
                    : <List>
                        {tasksForTodolist.map((task) => <Task key={task.id} task={task} todolist={todolist}/>)}
                    </List>
            }
        </>
    )
}