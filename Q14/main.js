// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Ayesha", "Muhammad", "Fahad"];
guestList.forEach(function (oneGuest) { return console.log("Hello ".concat(oneGuest, "! Would you like to have a dinner with me tonight?")); });
