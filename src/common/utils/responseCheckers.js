export const normalCheck = (response) => {
    if (response.ok) {
        return response.json();
    } else if (response.status === 401) {
        throw new Error(response.statusText);
    } else {
        throw new Error(response.statusText);
    }
}
