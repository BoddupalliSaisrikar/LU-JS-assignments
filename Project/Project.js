let cards = [
    {
        image:"https://www.google.com/search?q=cat+images&sxsrf=ALeKk02JGQy3MIc8QyS1d0Ma2x9I5YNaPQ:1626196466595&tbm=isch&source=iu&ictx=1&fir=aiul5-jr8DbWEM%252C6MsMJjk6eGCktM%252C_&vet=1&usg=AI4_-kThvyJ49w8Tmr43GC_4GDQXkkWWqA&sa=X&ved=2ahUKEwisn-f1xeDxAhXC8HMBHchSDlwQ9QF6BAgUEAE#imgrc=aiul5-jr8DbWEM",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=cat+images&sxsrf=ALeKk02JGQy3MIc8QyS1d0Ma2x9I5YNaPQ:1626196466595&tbm=isch&source=iu&ictx=1&fir=aiul5-jr8DbWEM%252C6MsMJjk6eGCktM%252C_&vet=1&usg=AI4_-kThvyJ49w8Tmr43GC_4GDQXkkWWqA&sa=X&ved=2ahUKEwisn-f1xeDxAhXC8HMBHchSDlwQ9QF6BAgUEAE#imgrc=aiul5-jr8DbWEM",
        value:1,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+dog&sxsrf=ALeKk02L5eArwu1UR8JPcIP_JMXOABCS1A:1626196542102&tbm=isch&source=iu&ictx=1&fir=sgZuc8rXuAGvoM%252C2r6Arj4-hBjhNM%252C_&vet=1&usg=AI4_-kSHub8xJkl18pMYuwKMv1lQluE5Zg&sa=X&ved=2ahUKEwiA9eeZxuDxAhXI7XMBHZDmBrMQ9QF6BAgMEAE#imgrc=sgZuc8rXuAGvoM",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+dog&sxsrf=ALeKk02L5eArwu1UR8JPcIP_JMXOABCS1A:1626196542102&tbm=isch&source=iu&ictx=1&fir=sgZuc8rXuAGvoM%252C2r6Arj4-hBjhNM%252C_&vet=1&usg=AI4_-kSHub8xJkl18pMYuwKMv1lQluE5Zg&sa=X&ved=2ahUKEwiA9eeZxuDxAhXI7XMBHZDmBrMQ9QF6BAgMEAE#imgrc=sgZuc8rXuAGvoM",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+pig&sxsrf=ALeKk00aFgpXsv5aZknRA7ycohL7kWanWA:1626196727352&tbm=isch&source=iu&ictx=1&fir=ryk6Cog03BvADM%252CsDznAnFnl_ywpM%252C_&vet=1&usg=AI4_-kRxxOFNAmHWh21FC8IwfP8zOIDLUg&sa=X&ved=2ahUKEwjv4ZLyxuDxAhVd4zgGHSNrCPsQ9QF6BAgFEAE#imgrc=ryk6Cog03BvADM",
        value:3,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+pig&sxsrf=ALeKk00aFgpXsv5aZknRA7ycohL7kWanWA:1626196727352&tbm=isch&source=iu&ictx=1&fir=ryk6Cog03BvADM%252CsDznAnFnl_ywpM%252C_&vet=1&usg=AI4_-kRxxOFNAmHWh21FC8IwfP8zOIDLUg&sa=X&ved=2ahUKEwjv4ZLyxuDxAhVd4zgGHSNrCPsQ9QF6BAgFEAE#imgrc=ryk6Cog03BvADM",
        value:3,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+black+tiger&sxsrf=ALeKk01NvOdbnhKFz3ozFyjbg5aIKZLaFw:1626196809636&tbm=isch&source=iu&ictx=1&fir=zD_yE4XKnFgmvM%252C6tIUmkP0F1yr4M%252C_&vet=1&usg=AI4_-kSfwpecQb4vW7J5ZqxSritqLr5JmQ&sa=X&ved=2ahUKEwi-5LCZx-DxAhX3wjgGHYY2Aa0Q9QF6BAgHEAE#imgrc=zD_yE4XKnFgmvM",
        value:4,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+black+tiger&sxsrf=ALeKk01NvOdbnhKFz3ozFyjbg5aIKZLaFw:1626196809636&tbm=isch&source=iu&ictx=1&fir=zD_yE4XKnFgmvM%252C6tIUmkP0F1yr4M%252C_&vet=1&usg=AI4_-kSfwpecQb4vW7J5ZqxSritqLr5JmQ&sa=X&ved=2ahUKEwi-5LCZx-DxAhX3wjgGHYY2Aa0Q9QF6BAgHEAE#imgrc=zD_yE4XKnFgmvM",
        value:4,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+lion&sxsrf=ALeKk01ojGG3X6e1sr_yI0LillKa-FHKYg:1626196859128&tbm=isch&source=iu&ictx=1&fir=KrhT2h1uP41agM%252CGsZstfPbzotKIM%252C_&vet=1&usg=AI4_-kQfUWrx8g469U-5JDwZ1vzukm6W-g&sa=X&ved=2ahUKEwi43P2wx-DxAhXqumMGHbORDXoQ9QF6BAgLEAE#imgrc=KrhT2h1uP41agM",
        value:5,
        status:"closed"
    },
    {
        image:"https://www.google.com/search?q=images+of+lion&sxsrf=ALeKk01ojGG3X6e1sr_yI0LillKa-FHKYg:1626196859128&tbm=isch&source=iu&ictx=1&fir=KrhT2h1uP41agM%252CGsZstfPbzotKIM%252C_&vet=1&usg=AI4_-kQfUWrx8g469U-5JDwZ1vzukm6W-g&sa=X&ved=2ahUKEwi43P2wx-DxAhXqumMGHbORDXoQ9QF6BAgLEAE#imgrc=KrhT2h1uP41agM",
        value:5,
        status:"closed"
    },
]



let temp;

for(let i =cards.length-1;i>=0;i--) 

{ //Shuffling the cards

    let j = Math.floor(Math.random()*(i+1));
    
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;

}

let cardsCopy = cards;


function displayCards(data){

    let cardsString = "";

    data.forEach(function(card,index){

        cardsString += `
           <div class = "card" style="background-image:url('${card.image}')>
               <div class = "overlay ${cards.status}" onclick="opencard(${index})">
                    
               </div>
           </div>

        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}


displayCards(cards);

let cardcount=1;
let val1=null, val2=null;
let score=0;


function opencard(index){

    cards[index].status="opened";

    if(cardcount===1){

        val1 = cards[index].value;
        cardcount++;

    }

    else if(cardcount===2){

        val2 = cards[index].value;

        if(val1===val2){

            score++;
            document.getElementById('score').innerText = score;

            val1 = null;
            val2 = null;
            cardcount = 1;
        }
        else{

            // Method-1:
            // score=0;
            // val1 = null;
            // val2 = null;
            // cardcount = 1;
            // document.getElementById('score').innerText = "0";
            // cards = cardsCopy;

            //Method-2:
            alert("!**Game Over**!")
            location.reload();


        }
        
    }

    displayCards(cards);

}


