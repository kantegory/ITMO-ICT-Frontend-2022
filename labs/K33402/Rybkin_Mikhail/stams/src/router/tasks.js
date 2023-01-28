import TaskListPage from "@/pages/tasks/TaskListPage";
import TaskFormPage from "@/pages/tasks/TaskFormPage";
import TaskInfoPage from "@/pages/tasks/TaskInfoPage";

export const taskRoutes = [
    {
        path: '/tasks',
        name: 'taskList',
        component: TaskListPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'tasks'
        }
    },
    {
        path: '/tasks/new',
        name: 'taskNew',
        component: TaskFormPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'tasks'
        },
    },
    {
        path: '/tasks/:taskId',
        name: 'taskInfo',
        component: TaskInfoPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'tasks'
        },
    },
]