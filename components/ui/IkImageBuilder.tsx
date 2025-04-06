"use client";

import { ImageProps } from "next/image";
// external libs
import { IKImage } from "imagekitio-next";
// utils
import config from "@/utils/config";

type Props = {
  width?: number;
  height?: number;
  path: string;
  alt: string;
  className?: string;
  transformation?: Record<string, number | string>[];
  loading?: "lazy" | "eager";
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  priority?: boolean;
  // lqip?: Record<string, string | number | boolean>;
};

const {
  env: {
    imageKit: { urlEndpoint },
  },
} = config;

const IkImageBuilder = (props: Props) => {
  const onError: React.EventHandler<
    React.SyntheticEvent<HTMLImageElement, Event>
  > = (err) => console.error("Error", err);

  const imageProps: Omit<ImageProps, "src" | "loading" | "loader"> & Props = {
    ...props,
    onError: onError,
    // ...(props.lqip !== undefined && { lqip: props.lqip }),
  };

  return <IKImage urlEndpoint={urlEndpoint} {...imageProps} />;
};

export default IkImageBuilder;
