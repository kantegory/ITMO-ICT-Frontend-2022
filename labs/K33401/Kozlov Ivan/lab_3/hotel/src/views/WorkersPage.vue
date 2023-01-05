<template>

    <base-layout>

        <a href="add_workers.html" style="text-decoration: none;">
            <div class="d-flex justify-content-end ">
                <button type="button" class="btn btn-dark p-2 flex-grow-1 rounded-0" >Добавить сотрудника</button>
            </div>
        </a>

        <table class="table table-hover table-bordered" style="color: rgb(0, 0, 0)" id="myTable">
            <thead>
            <tr>
                <th scope="col">Табельный номер</th>
                <th scope="col">
                    <input class="form-control me-2" type="search" placeholder="Поиск по ФИО"
                           id="myInput" onkeyup="findPosition()">
                    ФИО</th>
                <th scope="col">Телефон</th>

                <th scope="col">Действия</th>
            </tr>
            </thead>

            <tbody class="workers" v-for="worker in workers.results">
            <tr>
                <td>{{ worker.table_number }}</td>
                <td>{{ worker.fio }}</td>
                <td>{{ worker.phone_worker }}</td>
                <td class="d-flex justify-content-start gap-2">
                    <button id="${id}" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit_workers"
                            onclick="fill_forms(this)">Редактировать</button>
                    <button id="${id}" type="button" class="btn btn-danger" onclick="delete_row(this)">Удалить</button>
                </td>
            </tr>


            </tbody>
        </table>


        <form ref="noteForm" class="d-flex flex-column my-5">
            <input type="text" class="my-1">
            <textarea cols="30" rows="10" class="my-1" />

            <button type="submit" class="btn btn-primary">Отправить</button>

        </form>
    </base-layout>
</template>

<script>
import WorkerCard from '@/components/workersCard.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import useWorkersStore from '@/stores/workers'
import { mapActions, mapState } from 'pinia'

export default {
    name: 'WorkerPage',

    components: { BaseLayout, WorkerCard },

    computed: {
        ...mapState(useWorkersStore, ['workers'])
    },

    methods: {
        ...mapActions(useWorkersStore, ['loadWorkers', 'createWorker'])
    },

    mounted() {
        this.loadWorkers()
    }


}

</script>

