export interface Ioption {
  id: number;
  name: string;
}

export interface ISelectProps {
  text: string;
  name: string;
  options: Ioption[];
  handleOnChange?: () => void;
  value?: number;
}
