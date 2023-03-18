export default class PointsModel {
  #points = null;
  #offers = null;
  #destinations = null;

  constructor() {
    this.#points = [];
  }

  init(points, destinations, offers) {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
