<template>
    <tbody class="rooms">
    <tr>
        <td>{{ room_number }}</td>
        <td>{{ count_places }}</td>
        <td>{{ facilities }}</td>

    </tr>
    </tbody>

</template>

<script>
export default {
    name: "RoomsCard",
    props:{
        room_number:{
            type: Number,
            required: true
        },
        count_places:{
            type: Number,
            required: true
        },
        facilities:{
            type: String,
            required: true
        },

    }
}
</script>
