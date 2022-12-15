
"use strict";
const imgUrl = 'https://admin.cleospa.vn/';
const baseUrl = 'https://admin.cleospa.vn/api/v1/cleospa/posts';

fetch(baseUrl)
    .then(async (response) => {
        const result = await response.json();
        return result.data;
    })
    .then((data) => {
        let TopPostRight = [];

        let TopPostLeft = [];
        data.map((element, index) => {
            if (index === 0) {
                TopPostLeft = [element]
            } else {
                TopPostRight = [...TopPostRight, element]
            }
        });

        function showData() {
            for (let item of TopPostLeft) {
                let div = `
                        <div class="news__main-img">
                            <picture>
                                <source media="(max-width: 992px)" srcset="">
                                <img src="${imgUrl}${item.image}" alt="">
                            </picture>
                        </div>
                        <div class="news--subtitle f-w-700 fs-p-20 p-t-12 truncate2">
                            ${item.title}
                        </div>
                        <div class="news--text f-w-400 fs-p-16 p-t-4 truncate2">
                            ${item.description}
                        </div>
                        <div class="text--time p-t-4">
                            1 giờ trước
                        </div>
                    `
                $('.main-post').append(div);
            }
            var counter = 0;
            for (let itemR of TopPostRight) {
                counter++;
                if (counter <= 5) {
                    let divR = `
                    <div class="news-list m-t-16">
                        <div class="news-list--img">
                            <picture>
                                <source media="(max-width: 992px)" srcset="">
                                <img src="${imgUrl}${itemR.image}" alt="">
                            </picture>
                    </div>
                        <div class="news-list__content m-l-12 ">
                            <div class="news-list--title f-w-700 fs-p-18 truncate2">
                                ${itemR.title}
                            </div>
                            <div class="text--time fs-p-12 p-t-4 ">
                                5 giờ trước
                            </div>
                        </div>
                    </div>
                    <div class="news-list m-t-16">
                        <div class="news-list--img">
                            <picture>
                                <source media="(max-width: 992px)" srcset="">
                                <img src="${imgUrl}${itemR.image}" alt="">
                            </picture>
                    </div>
                        <div class="news-list__content m-l-12 ">
                            <div class="news-list--title f-w-700 fs-p-18 truncate2">
                                ${itemR.title}
                            </div>
                            <div class="text--time fs-p-12 p-t-4 ">
                                5 giờ trước
                            </div>
                        </div>
                    </div>   
                `
                    $('.main-post-right').append(divR);
                }
                else {
                    let divBottom = `
                    <div class="line-news m-y-16"></div>
                        <div class="post-item">
                            <div class="post--img">
                             <img src="${imgUrl}${itemR.image}" alt="">
                            </div>
                            <div class="post__content">
                                <div class="post--subtitle f-w-700 fs-p-20 truncate2">
                                    ${itemR.title}
                                </div>
                                <div class="post--text fs-p-14 truncate2">
                                    ${itemR.description}
                                </div>
                                <div class="text--time">
                                    11 giờ trước
                                </div>
                            </div>
                        </div>
                    `
                    $('.main-post-bottom').append(divBottom);
                }
            }
        }
        showData();

    })
    .catch((error) => {
        throw new Error(console.error('Error:', error));

    });



