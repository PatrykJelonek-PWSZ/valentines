//Elements
const heart = document.getElementsByClassName('fa-heart')[0];

//Dates
const firstDate = moment("20180526", "YYYYMMDD");
const aniversaryDate = moment("20200526", "YYYYMMDD");

//Intervals
let dateInterval;


window.addEventListener('beforeunload', () => {
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
});

dateInterval = setInterval(() => {
    document.getElementById('date-month').innerHTML = moment().diff(firstDate, 'months');
    document.getElementById('date-days').innerHTML = moment().diff(firstDate, 'days');
    document.getElementById('date-hours').innerHTML = moment().diff(firstDate, 'hours');
    document.getElementById('date-minutes').innerHTML = moment().diff(firstDate, 'minutes');
    document.getElementById('date-seconds').innerHTML = moment().diff(firstDate, 'seconds');
    document.getElementById('aniversaryLabel').innerHTML = aniversaryDate.diff(moment(), 'days') + 1;
}, 1000);


let date = moment("20180526", "YYYYMMDD")
let c = moment();
console.log("Y " + c.diff(date, 'days'));
console.log("D " + c.diff(date, 'days')%365);
console.log("M " + c.diff(date, 'hours')%365);

heart.addEventListener('click', function () {

    if(isNaN(parseInt(this.style.fontSize)))
    {
        this.style.fontSize = this.style.fontSize + 50 + 'px';
        reduceHeart();
    } else
        this.style.fontSize = parseInt(this.style.fontSize) + 10 + 'px';

    console.log(parseInt(this.style.fontSize));
});

let reduceHeart = () =>
{
    console.log(parseInt(heart.style.fontSize));

    while(parseInt(heart.style.fontSize) >= 50)
    {
        heart = setInterval(() => {

            if(parseInt(heart.style.fontSize) > 200)
            {
                clearInterval(heart);
                heart.classList.add('heart-out');
                document.body.style.overflow = 'scroll';

                setTimeout(() => {
                    document.getElementsByClassName('header-text')[0].classList.add('visible');
                    document.getElementsByClassName('get-down')[0].classList.add('visible');
                }, 1000);
            }

            else if(parseInt(heart.style.fontSize) > 50 && parseInt(heart.style.fontSize) <= 800)
            {
                heart.style.fontSize = parseInt(heart.style.fontSize) - 30 + 'px';
                console.log("reduce");
            }

        }, 1000);
    }
}