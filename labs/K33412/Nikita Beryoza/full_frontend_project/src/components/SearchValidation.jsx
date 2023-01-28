const incorrectDateForm = (year, month, day) => {
    const currentDate = new Date()
    return (year >= currentDate.getFullYear() &&
            month >= currentDate.getMonth() + 1 &&
            day < currentDate.getDate()) ||
        (year >= currentDate.getFullYear() &&
            month < currentDate.getMonth() + 1) ||
        year < currentDate.getFullYear();
}

const incorrectGroupForm = (group) => {
    return group === "Выберите группу" || group === "";
}

export const validateSearch = (date, group) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let incorrectDate = incorrectDateForm(year, month, day)
    let incorrectGroup = incorrectGroupForm(group)

    if (incorrectDate && incorrectGroup)
        return("Вы неправильно выбрали дату и группу")
    else if (incorrectDate)
        return("Вы неправильно выбрали дату")
    else if (incorrectGroup)
        return("Вы неправильно выбрали группу")
    return "OK"
}