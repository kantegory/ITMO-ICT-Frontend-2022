<template>
    <div>
        <Navbar />
    </div>
    <div>
        <main class="container my-5 pt-3 pb-5">
            <h1>
                Чем бы вы ни планировали заняться в этом году, вы всегда можете рассчитывать на помощь Meetup. Вот уже
                20 лет люди организуют встречи с помощью Meetup, приобретают друзей, обращаются за поддержкой, развивают
                свой бизнес и находят людей с общими интересами. Каждый день проводятся тысячи мероприятий —
                присоединяйтесь!
            </h1>
            <section class="intro"></section>
            <section class="filter">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search an event" aria-label="Search" />
                    <select class="btn btn-outline-success me-2" name="membership" id="membership">
                        <option value="date">By date</option>
                        <option value="relevance" selected>By relevance</option>
                    </select>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </section>
            <section class="row mt-5" id="events"></section>
            <div class="row mt-5" id="events">
                <div class="col" v-for="event in events" :key="event.id">
                    <div class="card">
                        <div class="card-body">
                            <div v-if="event.photoPath">
                                <img :src="event.photoPath" alt="event img" class="card-img-top" />
                            </div>
                            <h5 class="card-title">{{ event.title }}</h5>
                            <p class="card-event-date">{{ event.date }}</p>
                            <p class="card-event-location">{{ event.location }}</p>
                            <a
                                href="#"
                                @click.prevent="addEventToUser(this.id, event.id, this.accessToken)"
                                class="btn btn-dark mt-3 btn-sm"
                            >
                                Add event
                                <svg class="icon">
                                    <use xlink:href="sprite.svg#addIcon"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="container-fluid bg-light fixed-bottom pt-2 pb-2">
            <p class="mb-0">
                Author: Hege Refsnes<br />
                <a href="mailto:hege@example.com">hege@example.com</a>
            </p>
        </footer>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import eventsStore from "@/stores/events";
import usersStore from "@/stores/user";

export default {
    components: {
        Navbar,
    },
    computed: {
        ...mapState(eventsStore, ["events"]),
        ...mapState(usersStore, ["accessToken", "email", "id"]),
    },
    methods: {
        ...mapActions(eventsStore, ["loadEvents", "addEventToUser"]),
    },
    mounted() {
        this.loadEvents();
        console.log(this.events);
    },
};
</script>

<style>
main {
    padding-top: 20px;
    padding-bottom: 20px;
}

.filter {
    margin-bottom: 20px;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.btn {
    font-size: 1rem; /* размер шрифта кнопки */
    padding: 0.5rem 1rem; /* внутренний отступ кнопки */
    height: 3rem; /* высота кнопки */
    width: auto; /* автоматический размер кнопки */
}
</style>
