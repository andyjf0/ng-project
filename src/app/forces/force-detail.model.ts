// export class ForceDetail {
//   public description: string;
//   public url: string;
//   public engagement_methods: [];
//   public telephone: number;
//   public id: string;
//   public name: string;

//   constructor(name: string, id: string, url: string, telephone: number, description: string) {
//     this.name = name;
//     this.id = id;
//     this.url = url;
//     this.telephone = telephone;
//     this.description = description;
//   }
// }

export interface ForceDetail {
   description: string;
   url: string;
   engagement_methods: [];
   telephone: number;
   id: string;
   name: string;
}
