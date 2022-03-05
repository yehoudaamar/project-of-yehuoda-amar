//יציאה

function deletsrorag() {

    document.querySelector('#logout').addEventListener('click', () => {

        localStorage.removeItem('username');
        open('login.html');

    })
}

deletsrorag();

//לקוחות

function openimg() {

    let newimg2 = document.createElement('img');
    newimg2.setAttribute('class', 'myimg');
    newimg2.setAttribute('src', 'https://picsum.photos/seed/picsum/200');

    document.querySelector('.mycostumerfull').appendChild(newimg2);
    document.querySelector('.mycostumerfull_container').style.display = 'block';
    document.querySelector('.mycostumerfull').style.display = 'block';
}

let myapi = async () => {

    try {
        let response = await fetch('https://webschool-js-final-api.herokuapp.com/customers/');
        let data = JSON.parse(await response.text());
        // console.log(data);


        for (let id of data) {

            let first =

                ` NAME : ${id.first}
                   LASTNAME  : ${id.last}
                  EMAIL  :${id.email}`

            let newdiv = document.createElement('button');
            newdiv.setAttribute('class', 'mycostumer');
            newdiv.innerText = first;
            document.querySelector('.myul').appendChild(newdiv);


            let mydata = document.querySelectorAll('.mycostumer');
            let numberlist = mydata.length;

            //    console.log(numberlist);


            for (let i = 0; i < numberlist; i++) {

                mydata[i].addEventListener('click', () => {

                    let myfirst = data[i].first;
                    let mylast = data[i].last;
                    let myemail = data[i].email;
                    let country = data[i].country;
                    let created_at = data[i].created_at;
                    let company = data[i].company;

                    document.querySelector('.mycostumerfull').innerHTML = `  
            
                           <div class='aa'>  שם </div> ${myfirst} 
                           <div class='aa'> משפחה </div>  ${mylast} 
                           <div class='aa'>  מייל </div> ${myemail} 
                           <div class='aa'>  מדינה </div> ${country} 
                           <div class='aa'>  תאריך לידה </div> ${created_at} 
                           <div class='aa'>  חברה </div> ${company} 
                      `;

                    openimg()

                })
            }
        }
    }

    catch (error) {

        console.log(error);
    }
}

function mycostumer2() {

    document.querySelector('.box1').addEventListener('click', function () {

        document.querySelector('.mycostumerfull_container').style.display = 'none';
        document.querySelector('.mycostumerfull').style.display = 'none';
        document.querySelector('.myul2').style.display = 'none';
        document.querySelector('.myul').style.display = 'block';

        myapi();

    })
}
mycostumer2();


// מוצרים 

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://webschool-js-final-api.herokuapp.com/products');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText)

        // console.log(data);

        for (const key of data) {

            const mquantity = key.quantity;
            const mtitle = key.title;
            let murl = key.url;

            const newdiv = document.createElement('div');

            newdiv.setAttribute('class', 'myproduct_title');

            newdiv.innerText = mtitle

            const newdiv3 = document.createElement('div');

            newdiv3.setAttribute('class', 'myproduct_url');

            // newdiv3.innerText = murl

            const newdiv2 = document.createElement('div');

            newdiv2.setAttribute('class', 'myproduct_quantity');

            newdiv2.innerText = 'כמות' + ' = ' + mquantity

            let img = document.createElement('img');
            img.setAttribute('class', 'myimg2');
            img.setAttribute('src', murl);

            document.querySelector('.myul2').appendChild(newdiv);
            document.querySelector('.myul2').appendChild(newdiv2);
            document.querySelector('.myul2').appendChild(newdiv3);
            document.querySelector('.myul2').appendChild(img);


            document.querySelector('.box2').addEventListener('click', () => {

                document.querySelector('.mycostumerfull').style.display = 'none';
                document.querySelector('.mycostumerfull_container').style.display = 'none';
                document.querySelector('.myul').style.display = 'none';
                document.querySelector('.myul2').style.display = 'block';

            })
        }
    }
})


function onload() {

    if (!localStorage.getItem('username')) {

        open('login.html');

    }
}
onload();



xhr.send(null);

















