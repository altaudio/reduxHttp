import Route from './components/app/route'

import Landing from './components/landing'
import ReactTasks from './components/reactTasks'
import ImportExportTasks from './components/importExportTasks'
import TodoList from './containers/todoList'
import AlbumList from './containers/albumList'

export const routes = [
  { path: 'reactTasks', component: ReactTasks },
  { path: 'importExportTasks', component: ImportExportTasks },
  { path: 'todoList', component: TodoList },
  { path: 'albumList', component: AlbumList },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
