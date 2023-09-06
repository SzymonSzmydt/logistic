type Style = {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

export type Content = {
  quantity: number;
  box: Style;
};

export interface LayerType {
  content: Content[];
  total: number;
}
