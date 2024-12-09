export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](obj) {
    if (obj === 'string') {
      return (this._location);
    } if (obj === 'number') {
      return (this._size);
    }
    return (null);
  }

  get size() {
    return (this._size);
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return (this._location);
  }

  set location(value) {
    this._location = value;
  }
}
