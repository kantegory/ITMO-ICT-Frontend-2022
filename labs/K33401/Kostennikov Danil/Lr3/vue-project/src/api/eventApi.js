class EventApi {
    constructor(instance) {
        this.API = instance;
    }

    loadEvent = (async) => {
        return this.API({
            method: "GET",
            url: "/events",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
}

export default EventApi;
