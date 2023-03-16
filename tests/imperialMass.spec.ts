import 'mocha';
import { expect } from "chai";
import { ImperialMass } from "../src/imperialMass";

describe('Tests para la clase ImperialMass', () => {
  it('Se puede crear una clase ImperialMass', () => {
    expect(new ImperialMass(15)).not.to.be.undefined;
  })

  it('Se pueden obtener las onzas', () => {
    let masa = new ImperialMass(150);
    let masa2 = new ImperialMass(256);
    expect(masa.getOnzas()).to.be.eql(150);
    expect(masa2.getOnzas()).to.be.eql(256);
  })
  it('Se pueden obtener las libras', () => {
    let masa = new ImperialMass(150);
    expect(masa.getLibras()).to.be.eql(9.375);
  })
  it('Se pueden obtener las piedras', () => {
    let masa = new ImperialMass(150);
    expect(masa.getPiedras()).to.be.eql(0.6696428571428571);
  })
  it('Se pueden obtener las centenas', () => {
    let masa = new ImperialMass(150);
    expect(masa.getCentenas()).to.be.eql(0.08370535714285714);
  })
  it('Se pueden obtener las toneladas', () => {
    let masa = new ImperialMass(150);
    expect(masa.getToneladas()).to.be.eql(0.004185267857142857);
  })


  it('Se pueden modificar en onzas', () => {
    let masa = new ImperialMass(150);
    expect(masa.setOnzas(512)).to.be.eql(512);
  })
  it('Se pueden modificar en libras', () => {
    let masa = new ImperialMass(150);
    expect(masa.setLibras(512)).to.be.eql(8192);
  })
  it('Se pueden modificar en piedras', () => {
    let masa = new ImperialMass(150);
    expect(masa.setPiedras(512)).to.be.eql(114688);
  })
  it('Se pueden modificar en centenas', () => {
    let masa = new ImperialMass(150);
    expect(masa.setCentenas(512)).to.be.eql(917504);
  })
  it('Se pueden modificar en toneladas', () => {
    let masa = new ImperialMass(150);
    expect(masa.setToneladas(512)).to.be.eql(18350080);
  })
})