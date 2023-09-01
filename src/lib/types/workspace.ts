type Style = {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

type Content = {
  quantity: number[];
  productStyle: Style;
};

export interface LayerType {
  content: Content[];
  total: number;
}
