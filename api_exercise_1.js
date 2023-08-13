const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const container = document.getElementById('container');

btn1.addEventListener('click', () => {
    container.textContent = '';
    const newP = document.createElement('p');
    const img = document.createElement('img');

    const fetchFData = async () => {
        const resp = await fetch('https://randomuser.me/api');
        const data = await resp.json();
        console.log(data);
        newP.textContent += data.results[0].name.first + ' ' + data.results[0].name.last + '  ';
        newP.textContent += data.results[0].email + '  ';
        newP.textContent += data.results[0].dob.age + '  ';
        img.src = data.results[0].picture.large;
        container.append(newP, img)
    }
    fetchFData();
})

btn2.addEventListener('click', () => {
    container.textContent = '';

    const fetchFData2 = async () => {
        
            
            const resp = await fetch('https://randomuser.me/api/?results=5&gender=male');
            const data = await resp.json();
            console.log(data);

        for (let index = 0; index < 5; index++) {
            const newP = document.createElement('p');
            const img = document.createElement('img');
            console.log(':)');
            newP.textContent += data.results[index].name.first + ' ' + data.results[index].name.last + '  ';
            newP.textContent += data.results[index].email + '  ';
            newP.textContent += data.results[index].dob.age + '  ';
            img.src = data.results[index].picture.large;
            console.log(data.results[index].name.first + ' ' + data.results[index].name.last);
            console.log(data.results[index].email);
            console.log(data.results[index].dob.age);
            console.log(data.results[index].picture.large);
            container.append(newP, img)
        }
        
    }
    fetchFData2();
})


