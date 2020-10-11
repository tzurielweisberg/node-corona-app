//getting the data of the jsin
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const lang = document.querySelector('#lang');
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')
const message4 = document.querySelector('#message-4')
const message5 = document.querySelector('#message-5')
const message6 = document.querySelector('#message-6')
const message7 = document.querySelector('#message-7')


message1.innerHTML = "A few counry codes for example:" + "<br>" +"Israel - IL" + "<br>" +"North America - US"

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('search ' + search.value);
  
  message2.textContent = '';
  
  
  fetch('/corona?country=' + search.value.toUpperCase ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log('error' + data.error);
      }
      else {
        console.log(data);
        message1.textContent = 'Todays confirmned cases (חולים חדשים): '+ data.newConfirmed;
        message2.textContent = 'Total Corona cases (סך כל החולים): ' + data.totalConfirmed;
        message3.textContent = 'Todays deaths (מקרי מוות היום ל\"ע): ' + data.newDeaths;
        message4.textContent = 'Total corona deaths (סך המתים): ' + data.totalDeaths;
        message5.textContent = 'Todays recovering (מחלימים מהיום): ' + data.newRecovered;
        message6.textContent = 'Total recovered  (סך המחלימים): ' + data.totalRecovered ;

        const newConfirmed = data.totalConfirmed-data.totalRecovered;
        message7.textContent = 'Confirmed (recovered not included) (סך החולים ללא המחלימים): ' + newConfirmed;
          
      }
    })
  })
})
