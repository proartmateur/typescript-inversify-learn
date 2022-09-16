// Import stylesheets
import './style.css';

import "reflect-metadata";
import { Container, injectable, inject } from "inversify";

@injectable()
class Katana {
    public hit() {
        return "cut!";
    }
    constructor() {
      console.log('katana')
    }
}

@injectable()
class Shuriken {
    public throw() {
        return "hit!";
    }
    public constructor(katana: Katana) {
    }
}

@injectable()
class Ninja implements Ninja {

    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}
var container = new Container();
container.bind<Ninja>(Ninja).to(Ninja);
container.bind<Katana>(Katana).to(Katana);
container.bind<Shuriken>(Shuriken).to(Shuriken);
console.log(container.get(Ninja).fight())