<template>


    <tbody class="RoomsBooks">
    <tr>
        <td>{{ room_number }}</td>
        <td>{{ number_contract }}</td>
        <td>{{ data_start_living }}</td>
        <td>{{ data_end_living }}</td>
        <td class="d-flex justify-content-start gap-2">
            <button v-bind:id="number_contract" type="button" class="btn btn-warning">Редактировать</button>
            <button v-bind:id="number_contract" type="button" class="btn btn-danger" @click.prevent="deleteBookPage()">Удалить</button>
        </td>

    </tr>
    </tbody>

</template>

<script>
import { mapActions } from 'pinia'
import useBooksStore from "@/stores/book";

export default {
    name: "CurrentBooks",
    props:{
        number_contract:{
            required: true,
        },
        data_start_living:{
            required: true,
        },
        data_end_living:{
            required: true,
        },
        room_number:{
            required: true,
        },

    },

    methods:{
        ...mapActions(useBooksStore, ['DeleteBook']),

        async deleteBookPage(){
            if (confirm(`Вы уверены, что хотите удалить данное бронирование (Номер договора = ${this.$props.number_contract})?\nЭта операция не восстановима.`)){
                await this.DeleteBook(this.$props.number_contract)
                window.location.reload()
            }

        }
    }
}
</script>
