async function addHotel(url) {
    let name = prompt("Provide hotel name");
    let hotelLocation = prompt("Provide location for the hotel");
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Name: name,
            Location: hotelLocation,
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Created a new hotel";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((response) => {
            alert(response.statusText);
        });
}