<template>
    <div>
        <Navbar />
    </div>
    <main class="main">
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="row row-cols-1 d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            class="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            alt="profile pic"
                        />
                        <div class="row row-cols-2">
                            {{ this.email }}
                        </div>
                        <div class="row row-cols-3">{{ this.firstName }} {{ this.lastName }}</div>
                    </div>
                </div>
                <div class="col mt-5 mb-5">
                    <h3>My events</h3>
                    <div class="row mt-4">
                        <div class="col" v-for="event in userEvents" :key="event.id">
                            <div class="card">
                                <div class="card-body">
                                    <div v-if="event.photoPath">
                                        <img :src="event.photoPath" alt="event img" class="card-img-top" />
                                    </div>
                                    <h5 class="card-title">{{ event.title }}</h5>
                                    <p class="card-event-date">{{ event.date }}</p>
                                    <p class="card-event-location">{{ event.location }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <p class="mb-0">
            Author: Hege Refsnes<br />
            <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
    </footer>
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
        ...mapState(usersStore, ["firstName", "lastName", "email", "id"]),
        ...mapState(eventsStore, ["userEvents"]),
    },
    methods: {
        ...mapActions(eventsStore, ["loadUserEvents"]),
    },
    mounted() {
        this.loadUserEvents(this.id);
    },
};
</script>
