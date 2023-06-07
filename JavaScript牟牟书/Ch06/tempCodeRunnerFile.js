const serianum = {
    _n: 0,
    get next() { return this._n++; },
    set next(newvalue) {
        if (newvalue > this._n) {
            this._n = newvalue;
        } else {
            throw new Error("large value!");
        }
    }
}

serianum.next = 10;
console.log(serianum.next);
console.log(serianum.next);