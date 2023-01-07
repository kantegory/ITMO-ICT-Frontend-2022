<template>

    <tbody class="workers">
    <tr>
        <td>{{ table_number }}</td>
        <td>{{ fio }}</td>
        <td>{{ phone_worker }}</td>
        <td class="d-flex justify-content-start gap-2">
            <button id="${id}" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit_workers"
                    onclick="fill_forms(this)">Редактировать</button>
            <button id="${id}" type="button" class="btn btn-danger" onclick="delete_row(this)">Удалить</button>
        </td>
    </tr>
    </tbody>
</template>
    
<script>
export default {
    name: 'WorkerCard',

    // свойства, которые принимает компонент
    props: {
        table_number: {
            type: Number,
            required: true
        },
        fio: {
            type: String,
            required: true
        },
        phone_worker: {
            type: String,
            required: true
        }
    }
}
</script>
