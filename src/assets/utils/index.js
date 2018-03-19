import querys from "qs";
export const qs = q => {
  const reg = /\?/g;
  const res = q.replace(reg, "");
  return querys.parse(res);
};

export const Reg = {
  clearUrl:str => str.replace(/\//g,"")
}
