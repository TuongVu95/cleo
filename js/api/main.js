
"use strict";
const baseUrl = 'https://admin.cleospa.vn/api/v1/cleospa/posts';

fetch(baseUrl)
    .then(async (response) => {
        const resutl = await response.json();
        console.log("baseUrl:", resutl);
    })
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        throw new Error(console.error('Error:', error));

    });