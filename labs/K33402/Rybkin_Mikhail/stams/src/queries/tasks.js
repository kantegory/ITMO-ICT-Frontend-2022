import {supabase} from "@/supabase";
import {processError} from "@/helpers";

export const fetchMyTasks = async function () {
    let {data, error} = await supabase
        .from('tasks')
        .select(`
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
                `)
    processError(error)
    return {data}
}
export const upsertTask = async function (formData) {
    const {data, error} = await supabase
        .from('tasks')
        .upsert(formData)
        .select()
    processError(error)
    return {data}
}
export const fetchTaskInfo = async function (taskId) {
    const {data, error} = await supabase
        .from('tasks')
        .select(`
                id,
                name,
                description,
                punishment,
                is_mandatory,
                is_protectable,
                deadline_at,
                protection_deadline_at,
                course:course_id (
                    id,
                    name
                )
                `)
        .eq('id', taskId)
        .maybeSingle()
    processError(error)
    return {data}
}