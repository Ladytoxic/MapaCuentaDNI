function fetchData() {
    return fetch('https://mapsdni-6207f-default-rtdb.firebaseio.com/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

export default fetchData