type ImageBuilderProps = {
  src: string;
  width: number;
  quality: number;
};
export const imageLoader = ({ src, width, quality }: ImageBuilderProps) => {
  return `https://portfolio-ten-ecru-86.vercel.app/${src}?w=${width}&q=${
    quality || 75
  }`;
};
