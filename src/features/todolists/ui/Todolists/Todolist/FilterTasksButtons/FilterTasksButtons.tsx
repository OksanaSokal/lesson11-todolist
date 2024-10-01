import React from 'react';
import {changeTodolistFilterAC} from '../../../../model/todolists-reducer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {FilterValuesType, type TodolistType} from '../../../../../../app/App';
import {filterButtonsContainerSx} from './FilterTasksButtons.styles';
import {useAppDispatch} from '../../../../../../common/hooks/useAppDispatch';


type Props = {
    todolist: TodolistType
}

export const FilterTasksButtons = ({todolist}: Props) => {
    const dispatch = useAppDispatch()
    const changeFilterTasksHandler = (filter: FilterValuesType) => {
        // changeFilter(filter, props.todolistId)
        dispatch(changeTodolistFilterAC( {id: todolist.id, filter}))
    }

    return (
        <Box sx={filterButtonsContainerSx}>
            <Button
                variant={todolist.filter === 'all' ? 'outlined' : 'text'}
                color={'inherit'}
                onClick={() => changeFilterTasksHandler('all')}>
                All
            </Button>
            <Button
                variant={todolist.filter === 'active' ? 'outlined' : 'text'}
                color={'primary'}
                onClick={() => changeFilterTasksHandler('active')}>
                Active
            </Button>
            <Button
                variant={todolist.filter === 'completed' ? 'outlined' : 'text'}
                color={'secondary'}
                onClick={() => changeFilterTasksHandler('completed')}>
                Completed
            </Button>
        </Box>
    )
}