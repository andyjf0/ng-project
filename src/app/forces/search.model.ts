export class Search {
  public age_range: string;
  public self_defined_ethnicity: string;
  public outcome_linked_to_object_of_search: string;
  public datetime: string;
  public removal_of_more_than_outer_clothing: string;
  public operation: string;
  public officer_defined_ethnicity: string;
  public object_of_search: string;
  public involved_person: boolean;
  public gender: string;
  public legislation: string;
  public location: object;
  public outcome: string;
  public type: string;
  public operation_name: string;

  constructor(type: string, gender: string, self_defined_ethnicity: string, age_range: string) {
    this.type = type;
    this.gender = gender;
    this.self_defined_ethnicity = self_defined_ethnicity;
    this.age_range = age_range;
  }
}
