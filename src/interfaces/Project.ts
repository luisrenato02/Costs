export interface ICategory {
  id: number;
  name: string;
}
export interface IProject {
  name: string;
  budget: number;
  category: ICategory;
  services: string[];
}
