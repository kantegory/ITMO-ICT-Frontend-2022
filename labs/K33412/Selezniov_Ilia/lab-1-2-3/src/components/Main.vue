<template>
  <div class="container" id="telo" style="padding-top: 100px">
    <div class="row">
      <div class="col-md-6">
        <div style="display: flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="HeroPill__NakedBitcoinIcon-sc-16ndsef-1 epDkoW"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#1652F0"></path><path d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z" fill="#fff"></path></svg>
          <a href="/Registration" style="display: flex">&nbsp&nbspНачните формировать свой портфель</a>
        </div>
        <div>
          <h1 class="title_h1_main_page">
            Начните<br>формировать<br>свой<br>криптовалютный<br>портфель
          </h1>
          <h4 class="description_after_h1_main_page">
            Coinbase — самая удобная площадка для купли и продажи криптовалюты. Зарегистрируйтесь и начните прямо сегодня.
          </h4>
        </div>
      </div>

      <div class="col-md-6">
        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1DrLQBxqDE4XmGXcmaGy7u/8acbd0322803e3190154169b028e9d20/freeMoney-1.5.webp" height="534px" width="526px">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";

export default {
  name: 'MainBlock',

  // components: { CardNote },
  //
  // computed: {
  //   ...mapState(useCardsStore, ['cards']),
  //
  //   filteredCards() {
  //     if (this.selectedCards.length) {
  //       return this.selectedCards;
  //     } else {
  //       return this.cards
  //     }
  //   }
  // },
  //
  // methods: {
  //   ...mapActions(useCardsStore, ['loadCards']),
  //
  //   async filter() {
  //     const eventT = document.querySelector('.event-type')
  //     const cityT = document.querySelector('.city-type')
  //     this.selectedCards = []
  //
  //     console.log(eventT.value, cityT.value)
  //     this.cards.forEach((card) => {
  //       if ((eventT.value === card.mero && cityT.value === card.city) || (eventT.value === "ALL" && cityT.value === card.city) || (eventT.value === card.mero && cityT.value === "ALL")) {
  //         this.selectedCards.push(card);
  //       }
  //     })
  //   }
  // },
  //
  // data() {
  //   return {
  //     selectedCards: []
  //   }
  // },
  //
  // mounted() {
  //   this.loadCards();
  // }
}
</script>
