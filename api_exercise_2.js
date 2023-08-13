const container = document.getElementById('container'); 

const fetchFData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = document.createElement('p');
        item.textContent = `${index + 1}. ` + data[index].title;
        container.appendChild(item);
    }
}
fetchFData();