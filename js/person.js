class person {
  constructor(name, date, position, post) {
    this.name = name;
    this.date = date;
    this.position = position;
    this.post = post;
  }

  get name() {
    return this.name;
  }
  get date() {
    return this.date;
  }
  get position() {
    return this.position;
  }
  get post() {
    return this.post;
  }

  static makeCard(person, uid) {
    var authorCard = '<div class="col s12 l4 m6"><div class="card"><div class="card-image"><a class="btn-floating halfway-fab waves-effect waves-light white" href="#%modal%"><i class="material-icons black-text">library_books</i></a><div class="category-color %color%"></div></div><div class="card-content"><h5 class="light"><small>by </small>%author%</h5><p class="light">%date%</p><i class="truncate">%post%</i></div></div></div>';
    var card = authorCard.replace("%author%", person.name);
    var card = card.replace("%modal%", id);
    var card = card.replace("%post%", person.post);
    var card = card.replace("%date%", person.date);
    var card = card.replace("%color%", person.position);
    return card;
  }
}

var people = [person("Abhi Agarwal", "March 24th 2017", "sophomore", "test"), person("Your Mom", "March 24th 2017", "parents", "test2")];
var cards;
for(i = 0; i < people.length; i++) {
  cards.push(makeCard(people[i], i++));
}
