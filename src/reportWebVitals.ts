type ReportHandler = (metric: PerformanceEntry) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (typeof onPerfEntry === "function" && "PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(onPerfEntry);
    });

    observer.observe({
      entryTypes: ["navigation", "paint", "largest-contentful-paint", "layout-shift"],
    });
  }
};

export default reportWebVitals;
