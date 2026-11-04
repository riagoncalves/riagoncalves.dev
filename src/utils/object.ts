// `Object.entries` widens keys to `string`; this keeps them typed for objects
// with a known, closed set of keys (like SkillsData).
export const entriesOf = <T extends object>(value: T) =>
  Object.entries(value) as { [K in keyof T]: [K, T[K]] }[keyof T][];
