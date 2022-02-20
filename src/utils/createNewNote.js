export const createNewNote = (textNote, weather)  => {
    const createDate = new Date()
    return {
        id: String(Date.now()),
        noteText: textNote,
        created: convertDate(createDate),
        ...weather
    }
}

function getCurrentDate(date, options) {
    return date.toLocaleString("en-GB", options)
}

function convertDate(date) {

    const optionsForDay = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }
    const optionsForTime = {
        hour: "numeric",
        minute: "numeric"
    }
    return {
        dateCreated: getCurrentDate(date, optionsForDay),
        timeCreated: getCurrentDate(date, optionsForTime)
    }
}