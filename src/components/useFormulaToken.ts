import type { InjectionKey } from "vue";

type LogicCataly<T> = (...args: any) => T;

const catay = <T>(logic: LogicCataly<T>) => logic as unknown as T;

export default function <T>(logic: LogicCataly<T>) {
  const logicCataly = catay(logic);
  const logicToken: InjectionKey<typeof logicCataly> = Symbol();
  return logicToken;
}
