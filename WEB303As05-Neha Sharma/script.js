/*
    Assignment 05
Neha Sharma
*/

class ContentItem {
    constructor(uniqueID, name, description, categoryGenre) {
      this.uniqueID = uniqueID;
      this.name = name;
      this.description = description;
      this.categoryGenre = categoryGenre;
    }

    // updateContentItem method
    updateContentItem(uniqueID, name, description, categoryGenre) {
        if(uniqueID === this.uniqueID && name !== null && description !== null && categoryGenre !== null) {
            this.uniqueID = uniqueID;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }
    }

    // toString method
    toString() {
        return `
            <div class="content-item-wrapper" id="content-item-${this.uniqueID}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
        `;
    }
}

$(document).ready(function () {
    // your code here
    $("#content > h2").text("Movies I Love To Watch");

    let batman = new ContentItem(0, "Batman", "Fights Crime in Gotham", "Crime");
    let maxPayne = new ContentItem(1, "Max Payne", "New Jersey Cop", "Crime");
    let mask = new ContentItem(2, "The Mask", "Fun and Love", "Fun");
    let jamesBond = new ContentItem(3, "James Bond", "007 Secret Agent", "Spy");
    let jackSparrow = new ContentItem(4, "Captain Jack Sparrow", "A Famous Pirate", "Adventure");

    $("div#content-item-list").append(batman.toString());
    $("div#content-item-list").append(maxPayne.toString());
    $("div#content-item-list").append(mask.toString());
    $("div#content-item-list").append(jamesBond.toString());
    $("div#content-item-list").append(jackSparrow.toString());

    $(".content-item-wrapper").css({"border":"1px solid black", "width":"300px", "padding":"8px", "margin":"16px auto"});

    $("footer").append(`<button id="success-btn">Success</button>`);
    $("footer").append(`<button id="failure-btn">Failure</button>`);

    $("#success-btn").click(function() {
        batman.updateContentItem(0, "Bruce Wayne", "Fights Crime with Superman", "Crime");
        $("#content-item-0").empty();
        $("#content-item-0").html(batman.toString());
    })

    $("#failure-btn").click(function() {
        maxPayne.updateContentItem(0, "Bruce Wayne", "Fights Crime with Superman", "Crime");
        $("#content-item-1").empty();
        $("#content-item-1").html(maxPayne.toString());
    })
});
