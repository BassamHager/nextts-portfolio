// packages
import useSWR from "swr";

type Props = {
  key: string;
  initialData?: any;
};

export default function useSWRGlobalState({ key, initialData }: Props) {
  const { data, mutate } = useSWR(<typeof initialData>key, () => initialData);

  return {
    state: data || initialData,
    setState: (value: any) => mutate(value, { revalidate: false }),
  };
}
