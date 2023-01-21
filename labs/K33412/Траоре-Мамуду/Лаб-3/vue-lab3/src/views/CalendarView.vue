<template>
  <main class="d-flex flex-column">
    <div class="d-flex flex-column search-section">
      <span class="fw-bold h2 pt-5 pb-3"> Que voulez-vous trouver?</span>
      <div class="d-flex search-container justify-content-center">
        <input
          class="search-box p-3 me-2"
          type="search"
          placeholder="Search for keywords"
          id="input"
          v-model="search.keywords"
        />
        <input
          class="search-box p-3 me-2"
          type="search"
          placeholder="Enter location"
          id="input2"
          v-model="search.location"
        />
        <button
          class="search-button me-3"
          type="submit"
          id="search-btn"
          @click="getItems()"
        >
          <i class="fa fa-search"></i>
        </button>

        <div class="wrapper">
          <input
            type="radio"
            name="select"
            id="option-1"
            v-model="activeCategory"
            v-bind:value="'events'"
          />
          <input
            type="radio"
            name="select"
            id="option-2"
            v-model="activeCategory"
            v-bind:value="'groups'"
            @change="clearItems()"
            checked
          />
          <label for="option-1" class="option option-1">
            <span>Events</span>
          </label>
          <label for="option-2" class="option option-2">
            <span>Groups</span>
          </label>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center">
      <!-- Events/Groups - Params -->
      <div class="main-form d-flex flex-column align-items-center">
        <div style="width: 100%" class="d-flex flex-column">
          <hr />
          <div id="e" v-if="activeCategory === 'groups'">
            <GroupItem
              v-for="item in items.groups"
              :key="item.id"
              :itemId="item.id"
              :collections="item.collections"
              :likes="item.likes"
              :tags="item.tags"
              :url="item.webformatURL"
              :user="item.user"
              :views="item.views"
            />
          </div>
          <div class="e" v-if="activeCategory === 'events'">
            <EventItem
              v-for="item in items.events"
              :key="item.id"
              :imgUrl="item.performers[0].image"
              :test="`${item.datetime_utc.split('T')[0]} @ ${
                item.datetime_utc.split('T')[1]
              }`"
              :type="getEventType(item)"
              :city="item.venue.city"
              :country="item.venue.country"
              :name="item.venue.name"
              :eventId="item.venue.id"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GroupItem from "@/components/GroupItem.vue";
import EventItem from "@/components/EventItem.vue";

export default {
  name: "CalendarView",
  data() {
    return {
      search: this.$store.state.search,
      activeCategory: "groups",
      items: {
        groups: [],
        events: [],
      },
    };
  },
  computed: {},
  methods: {
    updateSearch() {
      this.$store.commit("setSearch", {
        keywords: this.search.keywords.trim(),
        location: this.search.location.trim(),
      });
    },
    goToLogin() {
      this.$router.push("./login");
    },
    getItems() {
      if (this.search.keywords || this.search.location) {
        if (this.activeCategory === "groups") {
          fetch(
            `https://pixabay.com/api/?key=24339880-ad2e916d540f2e061b8fd1194&q=${this.search.keywords}+${this.search.location}`
          )
            .then((res) => res.json())
            .then((data) => {
              this.items.groups = data.hits;
            });
        } else {
          const query =
            this.search.keywords && this.search.location
              ? `${this.search.keywords}&venue.city=${this.search.location}`
              : `${this.search.keywords}+${this.search.location}`;
          const url = `https://api.seatgeek.com/2/events?client_id=MjQzNjQyMTl8MTYzNjQ4NDc0Ni44MzY0Njc3&q=${query}`;
          fetch(url)
            .then((res) => res.json())
            .then(async (data) => {
              this.items.events = await data.events;
            });
        }
      }
    },
    getEventType(item) {
      let eType = item.type.replaceAll("_", " ");
      eType = eType[0].toUpperCase() + eType.substring(1);
      return eType;
    },
    clearItems() {
      this.items = {
        groups: [],
        events: [],
      };
    },
  },
  components: {
    GroupItem,
    EventItem,
  },
  mounted() {
    this.getItems();
  },
  unmounted() {
    this.$store.commit("setSearch", {
      keywords: "",
      location: "",
    });
  },
};
</script>

<style>
</style>