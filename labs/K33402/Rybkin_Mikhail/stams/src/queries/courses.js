import {supabase} from "@/supabase";
import {COURSE_STATUS, processError} from "@/helpers";

export const fetchAdminCourses = async function (query, userId) {
    let {data: data1, error: error1} = await supabase
        .from('courses_users')
        .select(`
                    course:course_id!inner (
                        id,
                        name
                    )
                `)
        .eq('user_id', userId)
        .in('status', [COURSE_STATUS.ADMIN, COURSE_STATUS.TEACHER, COURSE_STATUS.TUTOR])
        .ilike('course.name', `%${query}%`)
    let {data: data2, error: error2} = await supabase
        .from('courses')
        .select(`
                id,
                name
                `)
        .eq('created_by', userId)
        .ilike('name', `%${query}%`)
    data1.forEach(elem=>elem=elem.course)
    processError(error1)
    processError(error2)
    console.log([...data1, ...data2])
    return {
        data: [...data1, ...data2]
    }
}
export const fetchMyCourses = async function (userId) {
    let {data: data1, error: error1} = await supabase
        .from('courses')
        .select(`
                id,
                name,
                short_description,
                start_date,
                end_date,
                created_by (
                    id,
                    fio
                ),
                courses_users!inner (
                    user_id
                )
                `)
        .eq('courses_users.user_id', userId)
    let {data: data2, error: error2} = await supabase
        .from('courses')
        .select(`
                id,
                name,
                short_description,
                start_date,
                end_date,
                created_by (
                    id,
                    fio
                )
                `)
        .eq('created_by', userId)
    processError(error1)
    processError(error2)
    console.log([...data1, ...data2])
    return {
        data: [...data1, ...data2]
    }
}
export const fetchCourseInfo = async function (courseId) {
    let {data, error} = await supabase
        .from('courses')
        .select(`
                id,
                name,
                short_description,
                start_date,
                end_date,
                created_by (
                    id,
                    fio
                ),
                tasks (
                    id,
                    name,
                    is_mandatory,
                    is_protectable,
                    deadline_at,
                    protection_deadline_at,
                    course:course_id (
                        id,
                        name
                    )
                ),
                users:courses_users (
                    id,
                    status,
                    joined_at,
                    user:user_id (
                        id,
                        fio
                    )
                ),
                invites:courses_invites (
                    id,
                    name,
                    revoked,
                    max_users,
                    link,
                    created_at,
                    created_by (
                        fio
                    )
                )
                `)
        .eq('id', courseId)
        .maybeSingle()
    processError(error)
    return {data}
}
export const upsertCourse = async function (formData) {
    let {data, error} = await supabase
        .from('courses')
        .upsert(formData)
        .select()
    processError(error)
    return {data}
}
export const createInvite = async function (formData) {
    let {data, error} = await supabase
        .from('courses_invites')
        .upsert(formData)
        .select()
    processError(error)
    return {data}
}
export const fetchInviteInfo = async function (inviteLink) {
    let {data, error} = await supabase
        .from('courses_invites')
        .select(`
            id,
            creator:created_by (
                fio
            ),
            course:course_id (
                id,
                name,
                short_description
            ),
            courses_users (
                user_id
            )
         `)
        .eq('link', inviteLink)
        .maybeSingle()
    processError(error)
    return {data}
}
export const acceptInvite = async function (inviteId, userId, courseId) {
    let {data, error} = await supabase
        .from('courses_users')
        .insert({
            course_id: courseId,
            user_id: userId,
            invite_id: inviteId
        })
        .select()
    processError(error)
    return {data}
}