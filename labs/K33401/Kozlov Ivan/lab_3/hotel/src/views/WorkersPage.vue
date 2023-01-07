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
                           id="myInput" @keypress="findPosition">
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
        ...mapState(useWorkersStore, ['workers']),


    },

    methods: {
        ...mapActions(useWorkersStore, ['loadWorkers', 'createWorker']),

        findPosition() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    },

    mounted() {
        this.loadWorkers()
    }


}

</script>

