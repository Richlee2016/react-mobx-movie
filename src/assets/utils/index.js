import querys from "qs";
export const qs = q => {
  const reg = /\?/g;
  const res = q.replace(reg, "");
  return querys.parse(res);
};
