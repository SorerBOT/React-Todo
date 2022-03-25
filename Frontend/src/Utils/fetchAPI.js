export default async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Unable to fetch data https://api.mojang.com/users/profiles/minecraft/${username}");
        const data = await response.json();
        return data;
    } catch (err) { console.error(err) };
}