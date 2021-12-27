export class CharactersDTO {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  bornLocation: string;
  died: number;
  diedLocation: string;
  species: string;
  hairColor: string | undefined;
  eyeColor: string;
  skinColor: string;
  cybernetics: string | undefined;
  affiliations: string[] | undefined;
  masters: string[] | undefined;
  apprentices: string[] | undefined;
  formerAffiliations: string[];
  constructor(
    id: number,
    name: string,
    height: number,
    mass: number,
    gender: string,
    homeworld: string,
    wiki: string,
    image: string,
    born: number,
    bornLocation: string,
    died: number,
    diedLocation: string,
    species: string,
    eyeColor: string,
    skinColor: string,
    formerAffiliations: string[]
  ) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.gender = gender;
    this.homeworld = homeworld;
    this.wiki = wiki;
    this.image = image;
    this.born = born;
    this.bornLocation = bornLocation;
    this.died = died;
    this.diedLocation = diedLocation;
    this.species = species;
    this.eyeColor = eyeColor;
    this.skinColor = skinColor;
    this.formerAffiliations = formerAffiliations;
  }
}
