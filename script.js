
fetch('https://fakestoreapi.com/products?sort=desc')
.then((res) => res.json())
.then((data) => {
    let text = "";
    data.forEach((values) => {
        text += `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.price}</td>
            <td>${values.category}</td>
            <td>${values.description}</td>
            <td><img src="${values.image}" alt="${values.title}"/></td>
        </tr>`;
    });
    document.getElementById("result").innerHTML = text;
})
.catch((error) => {
    console.error('Error:', error);
});