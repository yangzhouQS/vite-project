import { BaseHeader } from "./type/BaseHeader";
import type { BaseHeaderDefine } from "../list-grid/layout-map/api";
import { CheckHeader } from "./type/CheckHeader";
import { Header } from "./type/Header";
import type { HeaderTypeOption } from "../ts-types";
import { MultilineTextHeader } from "./type/MultilineTextHeader";
import { SortHeader } from "./type/SortHeader";

const TYPES = {
  
  DEFAULT: new Header<any>(),
  
  SORT: new SortHeader<any>(),
  
  CHECK: new CheckHeader<any>(),
  
  MULTILINETEXT: new MultilineTextHeader<any>(),
};
export { BaseHeader, Header, SortHeader, CheckHeader, MultilineTextHeader };

export function of<T>(
  headerType: HeaderTypeOption | BaseHeader<T> | null | undefined
): BaseHeader<T> {
  if (!headerType) {
    return TYPES.DEFAULT;
  } else if (typeof headerType === "string") {
    const key = headerType.toUpperCase() as keyof typeof TYPES;
    return TYPES[key] || of(null);
  } else {
    return headerType;
  }
}
export function ofCell<T>(headerCell: BaseHeaderDefine<T>): BaseHeader<T> {
  if (headerCell.sort) {
    return TYPES.SORT;
  }

  return of(headerCell.headerType);
}