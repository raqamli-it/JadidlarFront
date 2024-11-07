// Tabutils.js
export function generateTabList(apiData, tabs) {
  if (!apiData) {
    return tabs.map((tab) => ({ ...tab, active: false }));
  }

  return tabs.map((tab) => {
    if (tab.dataKey === true) {
      return { ...tab, active: true };
    } else if (apiData[tab.dataKey]?.length > 0) {
      return { ...tab, active: true };
    }
    return { ...tab, active: false };
  });
}
