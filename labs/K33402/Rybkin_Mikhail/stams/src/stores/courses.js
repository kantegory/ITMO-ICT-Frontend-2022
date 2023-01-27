import {defineStore} from 'pinia'
import {
    acceptInvite,
    createInvite,
    fetchCourseInfo,
    fetchInviteInfo,
    fetchMyCourses,
    upsertCourse
} from "@/queries/courses";
import {useUsersStore} from "@/stores/users";

export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: null,
        courseInfo: null,
        inviteInfo: null,
        settings: {
            filters: {},
            dateFormatMode: 'absolute',
            sortKey: 'name',
            sortOrder: 'asc',
            viewMode: 'table',
            refreshList: true
        }
    }),
    getters: {
        processedCoursesList(state) {
            if (state.courses !== null) {
                let sortFunc = (a, b) => (a[state.settings.sortKey] < b[state.settings.sortKey]) ? 1 : -1
                if (state.settings.sortOrder === 'asc') {
                    sortFunc = (a, b) => (a[state.settings.sortKey] > b[state.settings.sortKey]) ? 1 : -1
                }
                return state.courses
                    .sort(sortFunc)
            }
            return null
        },
        listViewMode(state) {
            return state.settings.viewMode
        },
        dateFormatMode(state) {
            return state.settings.dateFormatMode
        }
    },
    actions: {
        setListViewMode(mode) {
            this.settings.viewMode = mode
        },
        setDateFormatMode(mode) {
            this.settings.dateFormatMode = mode
        },
        setListSortKey(key) {
            this.settings.sortKey = key
        },
        setListSortOrder(order) {
            this.settings.sortOrder = order
        },
        setListRefresh() {
            this.settings.refreshList = true
        },
        resetListRefresh() {
            this.settings.refreshList = false
        },
        resetCourseInfo() {
            this.courseInfo = null
        },
        resetInviteInfo() {
            this.inviteInfo = null
        },
        async fetchCourses() {
            const usersStore = useUsersStore();
            const {data} = await fetchMyCourses(usersStore.userId)
            this.courses = data
        },
        async fetchCourseInfo(courseId) {
            const {data} = await fetchCourseInfo(courseId)
            this.courseInfo = data
        },
        async upsertCourse(formData) {
            await upsertCourse(formData)
        },
        async createInvite(formData) {
            await createInvite(formData)
        },
        async fetchInviteInfo(inviteLink) {
            const {data} = await fetchInviteInfo(inviteLink)
            this.inviteInfo = data
        },
        async acceptInvite() {
            const usersStore = useUsersStore();
            await acceptInvite(
                this.inviteInfo.id,
                usersStore.userId,
                this.inviteInfo.course.id
            )
        }
    },
})