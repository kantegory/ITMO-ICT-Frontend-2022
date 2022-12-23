import instance from "@/api/instance.js"
import CardApi from "@/api/cards.js"

const cardApi = new CardApi(instance)

export { cardApi }