<template>
	<div>
		<img :src="img" class="card-img-top" alt="..." height="200" width="354">
		<div class="card-body">
			<h2 class="card-title text-card">{{ mero }}</h2>
			<p class="card-text text-card">{{ data }}</p>
			<p class="card-text text-card">
				<svg class="icon-main">
					<use xlink:href="#addr"></use>
				</svg>
				{{ address }}</p>
			<p class="card-text text-card">
				<svg class="icon-main">
					<use xlink:href="#type"></use>
				</svg>
				{{ type }}</p>
			<p class="card-text text-card">{{ text }}</p>
			<a href="#" @click="$router.push('/music/')" class="btn btn-dark button-color">Подробнее</a>
			<form @submit.prevent="addNote(id)">
				<button type="submit" class="btn btn-dark mt-3 button-color">
					<svg class="icon-main">
						<use xlink:href="#add"></use>
					</svg>
					Записаться
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import {mapActions, mapState} from 'pinia'

import useUserEventsStore from '@/stores/userEvents'

export default {
	name: 'NoteBlock',

	props: {
    mero: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
		type: {
			type: String,
      required: true
		},
		data: {
			type: String,
      required: true
		},
		address: {
			type: String,
      required: true
		},
		id: {
			type: Number,
      required: true
		},
		img: {
			type: String,
      required: true
		},
  },

	computed: {
		...mapState(useUserEventsStore, ['userEvents']),
		
	},

	methods: {
    ...mapActions(useUserEventsStore, ['addUserEvents', 'getUserEventsById']),
    async addNote(id) {
        const userId = JSON.parse(localStorage.user).id
        const userEvents = await this.getUserEventsById(userId)
        console.log(userEvents.data)
        const isEventExist = userEvents.data.filter(event => event.eventId == id)
        console.log(isEventExist.length)
		if (isEventExist.length) {
            alert("Event already exist")
            return
        }

        const event = {
            "userId": userId,
            "eventId": id
        }

        console.log(event)
        const response = await this.addUserEvents(event);
        console.log(response)
    }
	}
}
</script>