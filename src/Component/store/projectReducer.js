import {createSlice} from '@reduxjs/toolkit';
import todoJS from '../../images/todo_js.png';
import todoReact from '../../images/todo_react.png';
import layoutWelbex from '../../images/layout-welbex.jpg'

const initialState = {
  project: [
    {
      id: 1,
      title: 'Todo React',
      description: [
        'Данный проект содержит следующий функционал:',
        '-возможность создавать задачи со своими названиями и описаниями;',
        '-при создании добавляем полное описание задачи;',
        '-также отображается время создания задачи;',
        '-при создании задачи указывайте время выполнения;',
        '-если время выполнения истекло, индикатор задачи у карточки становится красным;',
        '-реализовано удаление задач;',
        '-у каждой задач есть приоритет',
        '-детальный просмотр задачи при клике на неё;',
        '-реализовано редактирование;',
        '-при выходе или перезапуске сайта данные сохраняются;',
        '-поиск задач по названию;',
        '-реализована функция drag and drop по вкладкам.',
      ],
      image: todoReact,
      site: 'https://wanashka.github.io/todolist-react/',
      Github: 'https://github.com/Wanashka/todolist-react',
    },
    {
      id: 2,
      title: 'Todo JS',
      description: [
        'Данный проект содержит следующий функционал: ',
        '-возможность создавать задачи со своими названиями;',
        '-при создании добавляем полное описание задачи;',
        '-также отображается время создания задачи;',
        '-при создании задачи указывайте время выполнения;',
        '-если время выполнения истекло, карточка задания становится красной;',
        '-реализовано удаление задач;',
        '-детальный просмотр задания при нажатии на него;',
        '-редактирование;',
        '-при выходе или перезапуске сайта данные сохраняются;',
        '-отметить задачу как выполненную;',
        '-отметить все задачи как выполненные;',
        '-поиск задач по названию;',
        '-вкладки (все, выполненные, невыполненные);',
        '-удалять выполненные задачи;',
        '-организована пагинация по пять задач на странице.'],
      image: todoJS,
      site: 'https://wanashka.github.io/TodoJS/',
      Github: 'https://github.com/Wanashka/TodoJS',
    },
    {
      id: 3,
      title: 'Адаптивная верстка сайта',
      description: [
        'У данного сайта был реализован адаптив, можете открыть и потрогать его',
      ],
      image: layoutWelbex,
      site: 'https://wanashka.github.io/adaptive-site-layout-test-/',
      Github: 'https://github.com/Wanashka/adaptive-site-layout-test-',
    },
  ],
  value: 0,
}
export const projectReducer = createSlice({
  name: 'project',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {increment, decrement, incrementByAmount} = projectReducer.actions

export default projectReducer.reducer;
