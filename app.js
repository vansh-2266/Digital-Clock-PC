 const clock = document.querySelector(".clock");

 const tickTok = () => {

    const current = new Date();

    
    const hour = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    var ampm = hour >= 12 ? 'PM' : 'AM';

    // console.log(hour , minutes , seconds);

    const html = `
        <span> ${hour} </span> <span class = colon>:</span>
        <span> ${minutes} </span> <span class = colon>:</span>
        <span> ${seconds} </span> 
        <span> ${ampm} </span>
    `;

    clock.innerHTML = html;

 }

 // to call (for update) this function every second:

 setInterval(tickTok  , 1000 );