import { defineStore } from "pinia";
import { eventApi } from "@/api";

const eventsStore = defineStore("event", {
    state: () => ({
        events: null,
        userEvents: null,
    }),

    actions: {
        async loadEvents() {
            console.log("test");
            const response = await eventApi.loadEvent();
            console.log("response", response);
            this.events = response.data;
            console.log(this.events);
            console.log(events[1].photoPath);
            console.log(typeof this.events);
        },

        async loadUserEvents(userId) {
            const userEventsResposne = await (await fetch("http://localhost:3000/644/userEvents", {})).json();
            this.userEvents = [];
            console.log(typeof this.userEvents);
            console.log(userEventsResposne);
            for (const userEvent of userEventsResposne) {
                if (userId == userEvent.userId) {
                    this.userEvents.push(
                        await await (await fetch(`http://localhost:3000/events/${userEvent.eventId}`, {})).json()
                    );
                }
            }
            console.log(this.userEvents);
        },

        async addEventToUser(userId, eventId, accessToken) {
            if (userId) {
                const getResponse = await fetch("http://localhost:3000/644/userEvents", {});
                console.log("get response", getResponse);
                const getResposneJson = await getResponse.json();
                for (const event of getResposneJson) {
                    if (event.userId == userId && event.eventId == eventId) {
                        alert("Event already added");
                        return false;
                    }
                }
                const Data = {};
                Data["eventId"] = eventId;
                Data["userId"] = userId;
                console.log(Data);
                const postResponse = await fetch("http://localhost:3000/644/userEvents", {
                    method: "POST",
                    body: JSON.stringify(Data),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const responseJson = await postResponse.json();
                console.log(responseJson);
                alert("Added");
            } else {
                alert("Login to add events");
            }
        },
    },
});

export default eventsStore;
