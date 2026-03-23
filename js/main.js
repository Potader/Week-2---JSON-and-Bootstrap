let favouriteSingers =
  '[{"name":"Jody Gadsden","band":"Autoheart","DOB":"Unknown","bestSongs":"The Witching Hour, We Can Build a Fire"},{"name":"Jonathan Morali","band":"Syd Matters","DOB":"5/22/1980","bestSongs":"Obstacles, River Sister"},{"name":"Jerome Alexander","band":"Message to Bears","DOB":"1985","bestSongs":"Mountains, You Are a Memory"},{"name":"Emilee Petersmark/Kate Pillsbury (Duo vocals)","band":"The Crane Wives","DOB":"Founded: 2010","bestSongs":"Curses, How to Rest"}]';
let singerList = document.getElementById("singer-list");
const singers = JSON.parse(favouriteSingers);

singers.forEach((item) => {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${item.name}</td>
    <td>${item.band}</td>
    <td>${item.DOB}</td>
    <td>${item.bestSongs}</td>
  `;

  singerList.appendChild(newRow);
});
