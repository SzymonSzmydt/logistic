type Style = {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

type Content = {
  quantity: number;
  boxStyle: Style;
  productStyle: Style;
};

export interface LayerType {
  content: Content[];
  total: number;
}
