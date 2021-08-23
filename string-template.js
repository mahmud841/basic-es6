const priya = 'Mahmud Khan ';
const meye = 'Meye Tmi akhono amake bondhu vabo ki ';
const kobita = `kobita tmr asa akhono charini `;
/* const multiLine = 'ami tomake valobasi .
 this is second line
 this is my third line  ' */

//  backtrick use na korle multiline likha jabena
 const multiLineNew  = ` backtik use korle multiline error dibe na
 this first line `


 const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
// const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mahmud';
const last = 'Khan';
// const fullOld = 'This person name' + first + ' ' +last;

const fullNew = `This person name is :${first} ${last}.Has money ${(friends.length+10)* 500}.I live in rajshahi `;

console.log(fullNew);

// multiline kora possible . backtik ba caret use kore. $ sign use kore {}er moddhe kono akta var bosai deya jete pare 