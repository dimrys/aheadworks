export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('notes')
        if (!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('notes', serializedState);
    } catch {
        // ignore write errors
    }
};