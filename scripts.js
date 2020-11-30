console.log(`Link is OK`);

let jmena = [`Petr`, `Jana`, `Lukas`, `Lubomir`, `Tomas`, `Pavel`, `Karel`];


jmena.forEach(jm => {
    if (jm === `Petr`) {
        $(`ul`).append(`<p><strong>${jm}</strong></p>`)
    } else {
    $(`ul`).append(`<p>${jm}</p>`)};
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $(`h1`).text(additionalBlock.title);
  $(`main`).append(additionalBlock.text);
