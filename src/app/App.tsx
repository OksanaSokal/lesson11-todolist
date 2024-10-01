import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {getTheme} from '../common/theme/theme';
import {Header} from '../common/components/Header/Header';
import {Main} from './Main';
import {useAppSelector} from '../common/hooks/useAppSelector';
import {selectTheme} from './appSelectors';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: TaskType[]
}

export const App = () => {
    const themeMode = useAppSelector(selectTheme)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Main/>
        </ThemeProvider>
    );
}
