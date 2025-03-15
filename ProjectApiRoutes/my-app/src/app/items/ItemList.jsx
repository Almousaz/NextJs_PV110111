async function fetchItems() {
    let res = await fetch(process.env.NEXT_FAKE_API);
    if (!res.ok) {
        throw new Error('Failed to Fetch ...');
    }
    return res.json();
}

export default async function ItemList() {
    let items = await fetchItems();

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}
