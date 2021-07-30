export class Senior {
  public bio: string;
  public contact_details: object;
  public name: string;
  public rank: string;

  constructor(bio: string, contact_details: object, name: string, rank: string) {
    this.bio = bio;
    this.contact_details = contact_details
    this.name = name;
    this.rank = rank;
  }
}
