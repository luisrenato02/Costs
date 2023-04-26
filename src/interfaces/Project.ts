export interface ICategory {
  id: number;
  name: string;
}
export interface IProject {
  id: number;
  name: string;
  budget: number;
  category: ICategory;
  services: string[];
  cost: number;
}
