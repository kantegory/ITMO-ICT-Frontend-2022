<template>
    <div class="card">
        <div class="card-body">
            <!-- отображение свойств в шаблоне можно сделать так: -->
            <h5 class="card-title">{{ table_number }}</h5>
            <p class="card-text">
                {{ fio }}
            </p>
            <p class="card-text">
                {{ phone_worker }}
            </p>
        </div>
    </div>
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
