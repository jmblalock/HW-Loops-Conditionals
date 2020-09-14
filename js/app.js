/*
Easy Going
1. Write a for loop that will log the numbers 1 through 20.
*/

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

/*
Get Even
1. Write a for loop that will log only the even numbers in 0 through 200.
*/

for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

/*
Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every even number in your loop, log "...human...why you taking pictures of me?...", 
"...the catnip made me do it...", or "...why does the red dot always get away..." at random.
*/

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");

    if (i % 2 === 0) {
        randInt = Math.floor(Math.random() * 3);
        if (randInt === 0) {
            console.log("...human...why you taking pictures of me?...");
        } else if (randInt === 1) {
            console.log("...the catnip made me do it...");
        } else {
            console.log("...why does the red dot always get away...");
        }
    }
}
