import 'mocha';
import { expect } from "chai";
import { ImperialLength } from "../src/imperialLength";

describe('Tests para la clase ImperialLength', () => {
  it('Se puede crear una clase ImperialLength', () => {
    expect(new ImperialLength(15)).not.to.be.undefined;
  })

  it('Se pueden obtener las pulgadas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.getPulgadas()).to.be.eql(150);
    expect(longitud2.getPulgadas()).to.be.eql(256);
  })
  it('Se pueden obtener las pies', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.getPies()).to.be.eql(12.5);
    expect(longitud2.getPies()).to.be.eql(21.333333333333332);
  })
  it('Se pueden obtener las yardas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.getYardas()).to.be.eql(4.166666666666667);
    expect(longitud2.getYardas()).to.be.eql(7.111111111111111);
  })
  it('Se pueden obtener las millas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.getMillas()).to.be.eql(0.0023674242424242425);
    expect(longitud2.getMillas()).to.be.eql(0.00404040404040404);
  })


  it('Se pueden modificar en pulgadas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.setPulgadas(512)).to.be.eql(512);
    expect(longitud2.setPulgadas(326)).to.be.eql(326);
  })
  it('Se pueden modificar en pies', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.setPies(512)).to.be.eql(6144);
    expect(longitud2.setPies(326)).to.be.eql(3912);
  })
  it('Se pueden modificar en yardas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.setYardas(512)).to.be.eql(18432);
    expect(longitud2.setYardas(326)).to.be.eql(11736);
  })
  it('Se pueden modificar en millas', () => {
    let longitud = new ImperialLength(150);
    let longitud2 = new ImperialLength(256);
    expect(longitud.setMillas(512)).to.be.eql(32440320);
    expect(longitud2.setMillas(326)).to.be.eql(20655360);
  })
})