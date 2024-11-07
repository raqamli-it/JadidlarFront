// utils/tabUtils.js
export const generateTabList = (data, tabs) => {
  return tabs.map((tab) => {
    const hasData =
      tab.dataKey === true || (data && data[tab.dataKey]?.length > 0);
    return {
      ...tab,
      hasData: hasData,
    };
  });
};
