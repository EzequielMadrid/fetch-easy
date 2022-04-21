// fetch: buscar, traer, atraer, extraer, etc
const users = document.getElementById("users");

//// trayendo a mi proyecto usuarios de git-hub
/* fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);

        data.forEach((user) => {
            const content = document.createElement("div");
            content.innerHTML = `
            <img src= "${user.avatar_url}">
            <h4>${user.login}</h4>
            <a href="${user.html_url}">link</a>
            `;
            users.append(content);
        });
    }); 
*/

/* //// trayendo a mi proyecto info de la nasa
const info = [];

const nasa = async () => {
    try {
        const res = await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=MEzvp4xclmoWaWWAvu8WIZU43n9O2xqIgblRwnU"
        );
        const data = await res.json();
        //console.log(data);

        info.push(data); //poniendo mi data en un array para que funcione el forEach
        console.log(info);

        info.forEach((user) => {
            const content = document.createElement("div");
            content.innerHTML = `
            <p>${user.date}</p>
            <h4>${user.copyright}</h4>
            <p>${user.explanation}</p>
            <a href="${user.url}">link</a>
            `;
            users.append(content);
        });
    } catch (err) {
        console.log(err);
    }
};
nasa();
 */

/* // trayendo a mi proyecto info del banco central argentino
//Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODIwMTIyMDgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtYWRyaWRlemVxdWllbDI5OUBnbWFpbC5jb20ifQ.-2kCLZE9PzKehwn-uO2mxWo7rX2QxEDFIaVO1HHZbrFHUfKvDfgfPYcYTQknjZs8TWWXg5AXZTrTsCHt_NSAFQ"

fetch("https://api.estadisticasbcra.com/usd_of", {
    // algunas APIs necesitan headers
    headers: {
        Authorization:
            "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODIwMTIyMDgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtYWRyaWRlemVxdWllbDI5OUBnbWFpbC5jb20ifQ.-2kCLZE9PzKehwn-uO2mxWo7rX2QxEDFIaVO1HHZbrFHUfKvDfgfPYcYTQknjZs8TWWXg5AXZTrTsCHt_NSAFQ",
    },
})
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);

        data.forEach((user) => {
            const content = document.createElement("div");
            content.innerHTML = `
            <h4>dolar</h4>
            <p>fecha: ${user.d}</p>
            <p>valor oficial: ${user.v}</p>
            <hr>
            `;
            users.append(content);
        });
    });
 */
