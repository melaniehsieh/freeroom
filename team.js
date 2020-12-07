const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")
const app = express();
app.set("view engine");
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res) {
 axios.get("https://en.wikipedia.org/wiki/National_Basketball_Association")
.then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $("#firstHeading").text();
    const teams = [];
    for (let i = 0; i < 30; i++) {
       teams.push($('td > b > a', html)[i].attribs.title);
    }
    console.log(title);
    console.log(teams);
res.send(teams);
})
})
