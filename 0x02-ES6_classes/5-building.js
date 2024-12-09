export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building) {
      if (!Object.getOwnPropertyNames(new.target.prototype).includes('evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }
}
