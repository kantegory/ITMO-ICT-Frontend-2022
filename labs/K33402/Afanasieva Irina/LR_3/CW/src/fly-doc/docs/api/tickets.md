## Список билетов

Страница содержит данные о купленных билетах с фильтрацией по пассажиру

**URL** : `/tickets`

**Methods** : `GET`

**Success Code** : `200 OK`

```
<template>
  <div class="add">
    <h1 style="margin: 20px">Оформить билет</h1>
    <br />
    <v-form @submit.prevent="TicketCreate" ref="buyForm" class="my-2">
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-select
            label="Пассажир"
            v-model="buyForm.passenger"
            :items="passengers"
            item-text="username"
            item-value="id"
          >
          </v-select>
          <v-text-field
            v-model="buyForm.number"
            label="Номер билета"
          ></v-text-field>
          <v-btn color="accent" type="submit" class="mb-6 mr-3">ОК</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
import PassengersList from "@/components/PassengersList.vue";
import axios from "axios";

export default {
  name: "CreateTicket",
  components: {
    PassengersList,
  },
  data: () => ({
    passengers: [],
    flight_id: 0,
    buyForm: {
      number: "",
      flight: "",
      passenger: "",
    },
  }),
  async created() {
    this.PassengersList();
    this.flight_id = this.$route.params.flight_id;
    this.buyForm.flight = this.flight_id;
  },
  methods: {
    async PassengersList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/passengers/all"
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        this.passengers = response.data;

        return response.data;
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
    async TicketCreate() {
      try {
        const response = await this.axios.post(
          "http://127.0.0.1:8000/tickets/create/",
          this.buyForm
        );

        console.log(response);
        this.$refs.buyForm.reset();
        await this.$router.push("/tickets/");
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
  },
};
</script>
```

```
<template>
  <section>
    <h1 style="margin: 20px">Билеты</h1>
    <v-row>
      <v-form @submit.prevent="submitPas" ref="form" class="my-2">
        <v-row>
          <v-col cols="3" class="mx-auto">
            <v-select
              label="Пассажир"
              v-model="passenger"
              :items="passengers"
              item-text="username"
              item-value="id"
            >
            </v-select>
            <br />
            <v-btn color="accent" class="mb-3 mr-3" @click="$router.push(`/`)"
              >На главную</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
      <v-col cols="5" class="mx-auto">
        <ticket-info
          v-for="ticket in tickets"
          :key="ticket.identifier"
          :ticket="ticket"
          class="my-2"
        />
      </v-col>
    </v-row>
  </section>
</template>
 
<script>
import TicketInfo from "@/components/TicketInfo.vue";
import axios from "axios";

export default {
  components: { TicketInfo },
  name: "Tickets",

  data: () => ({
    tickets: [],
    passengers: [],
    passenger: "",
  }),

  methods: {
    async PassengersList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/passengers/all"
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        this.passengers = response.data;

        return response.data;
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
    submitPas() {
      localStorage.setItem("passenger", this.passenger);
      this.savedPas = this.passenger;
      this.$refs.form.reset();
      this.gettickets();
    },
    async gettickets() {
      try {
        const response = await this.axios.get(
          `http://127.0.0.1:8000/tickets/all?passenger=${this.savedPas}`
        );

        if (response.status !== 200) {
          throw new Error(response.error);
        }

        const tickets = response.data.map((ticket) => {
          let date = new Date(ticket.flight.departure);

          // собираем дату в нужном виде
          let year = date.getFullYear();

          let month =
            String(date.getMonth() + 1).length > 1
              ? date.getMonth() + 1
              : `0${date.getMonth() + 1}`;

          let day =
            String(date.getDate()).length > 1
              ? date.getDate()
              : `0${date.getDate()}`;
          let hour =
            String(date.getHours()).length > 1
              ? date.getHours()
              : `0${date.getHours()}`;
          let min =
            String(date.getMinutes()).length > 1
              ? date.getMinutes()
              : `0${date.getMinutes()}`;

          ticket.flight.departure = `${year}/${month}/${day} ${hour}:${min}`;

          date = new Date(ticket.flight.arrival);

          year = date.getFullYear();

          month =
            String(date.getMonth() + 1).length > 1
              ? date.getMonth() + 1
              : `0${date.getMonth() + 1}`;

          day =
            String(date.getDate()).length > 1
              ? date.getDate()
              : `0${date.getDate()}`;
          hour =
            String(date.getHours()).length > 1
              ? date.getHours()
              : `0${date.getHours()}`;
          min =
            String(date.getMinutes()).length > 1
              ? date.getMinutes()
              : `0${date.getMinutes()}`;

          ticket.flight.arrival = `${year}/${month}/${day} ${hour}:${min}`;

          return ticket;
        });

        this.tickets = tickets;
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
  },

  created() {
    this.PassengersList();
    if (localStorage.getItem("passenger"))
      this.passenger = localStorage.getItem("passenger");
    this.savedPlace = this.passenger;
    this.gettickets();
  },
};
</script>
 
<style>
</style>
```