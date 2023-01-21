<template>
		<p class="fig"><img src="../assets/image/Заставка-1.png" class="img mt-5" alt="..."></p>
		<div class="text-center header-h1">
			<h1 class="custom-colored-h1"><b>PHOTOLIFE: МЕРОПРИЯТИЯ ДЛЯ ФОТОГРАФОВ</b></h1>
		</div>
		<div class="text-center header-h1">
			<h1 class="text-muted">Все самые важные события для фотографов</h1>
		</div>
		<section class="filtration">
			<div class="container justify-content-start">
				<div class="row mt-5 row mx-auto">
					<div class="form col-12 col-sm-6 col-lg-4 col-md-5 col-xl-3">
						<select class="form-select-lg event-type" aria-label=".form-select-lg example">
							<option value="ALL">Выберите тип мероприятия</option>
							<option value="Очно">Очно</option>
							<option value="Дистанционно">Дистанционно</option>
						</select>
						</div>
						<div class="form col-12 col-sm-6 col-lg-4 col-md-5 col-xl-3">
							<select class="form-select-lg region-type" aria-label=".form-select-lg example">
								<option value="ALL">Выберите город</option>
								<option value="Москва">Москва</option>
								<option value="Санкт-Петербург">Санкт-Петербург</option>
								<option value="Архангельск">Архангельск</option>
							</select>
						</div>
						<form class = "search-form d-flex justify-content-end col-12 col-sm-2 col-lg-4 col-xl-6 mx-auto px-5">
							<b-button @click="filter" type="submit" id="search" class="btn btn-info px-5 btn-lg" style="background-color:#C3073F">Найти мероприятие</b-button>
						</form>
					</div>
				</div>
		</section>
	<section class="container cards mt-5 row mx-auto">
		<div class="col-12 col-xl-3 col-md-5 col-lg-5 note card all active msk everything card-color" v-for="card in filteredCards" :key="card.id">
			<note-block :mero="card.mero" :text="card.text" :data="card.data" :address="card.address" :type="card.type" :img="card.img" :id="card.id"/>
		</div>
	</section>
</template>

<script>
import {mapActions, mapState} from 'pinia'

import useCardsStore from '@/stores/cards'

import NoteBlock from '@/components/note-card.vue'

export default {
	name: 'MainBlock',

	components: { NoteBlock },

	computed: {
		...mapState(useCardsStore, ['cards']),
		filteredCards() { 
			if (this.selectedCards.length) { 
				return this.selectedCards; 
			} else { 
				return this.cards 
			} 
		}
	},

	methods: {
		...mapActions(useCardsStore, ['loadCards']),
		async filter() { 
			const eventT = document.querySelector('.event-type') 
			const cityT = document.querySelector('.region-type') 
			this.selectedCards = []
			console.log(eventT.value, cityT.value) 
			this.cards.forEach((card) => { 
				if ((eventT.value === card.category && cityT.value === card.category2) || (eventT.value === "ALL" && cityT.value === card.category2) || (eventT.value === card.category && cityT.value === "ALL")) { 
					this.selectedCards.push(card); 
				}
			}) 
		}
	},
	data() {
		return {
			selectedCards: []
		}
	},
	mounted() {
		this.loadCards();
	}
}
</script>

<style>
	.fig {
		text-align: center;
	}
</style>