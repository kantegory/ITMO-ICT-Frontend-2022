<template>

    <base-layout>
        <div v-if="!chechkAuth">
            <a href="" style="text-decoration: none;">
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

                <worker-card v-for="worker in workers.results"
                             v-bind:key="worker.table_number"
                             v-bind:fio="worker.fio"
                             v-bind:phone_worker="worker.phone_worker"
                             v-bind:table_number="worker.table_number">
                </worker-card>



            </table>
        </div>

        <div v-if="chechkAuth" class="d-flex justify-content-center my-2">
            <h1> У вас нет доступа к этой странце</h1>
        </div>

        <div class=" modal fade" id="edit_workers" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Изменить сотрудника</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <article class="card-body">
                            <form onsubmit="update_worker(event)">

                                <label>Имя </label>
                                <input type="text" class="form-control" placeholder="" name="name" id="name" value="">

                                <label>Фамилия </label>
                                <input type="text" class="form-control" placeholder="" name="last_name" id="last_name"
                                       value="">

                                <label>Телефон</label>
                                <input required type="text" class="form-control" name="phone" id="phone"
                                       pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" value="">

                                <label>Email</label>
                                <input required type="email" class="form-control" placeholder="" name="email" id="email"
                                       value="">

                                <label>Должность</label>
                                <input required type="text" class="form-control" name="position" id="position" value="">

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                                    <button type="" class="btn btn-primary">Сохранить изменения</button>
                                </div>

                            </form>
                        </article> <!-- card-body end .// -->
                    </div>

                </div>
            </div>
        </div>
    </base-layout>
</template>

<script>
import WorkerCard from '@/components/workersCard.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import useWorkersStore from '@/stores/workers'
import { mapActions, mapState } from 'pinia'
import {checkTokenApi} from "@/api";

export default {
    name: 'WorkerPage',

    components: { BaseLayout, WorkerCard },

    computed: {
        ...mapState(useWorkersStore, ['workers']),

        chechkAuth() {
            // eslint-disable-next-line vue/no-async-in-computed-properties
            checkTokenApi.checkToken().catch( function(error) { localStorage.setItem("status_answer1", error.response.status) });


            if ( localStorage.status_answer1 === '401'){
                localStorage.removeItem("status_answer1")
                return true
            }

            else{
                localStorage.removeItem("status_answer1")
                return false
            }

        }


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

