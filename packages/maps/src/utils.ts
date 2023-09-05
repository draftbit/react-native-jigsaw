import React from "react";
import isEqual from "lodash.isequal";

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

/**
 * useMemo counterpart that does a deep compare on the dependency list
 */
export function useDeepCompareMemo<T>(
  factory: () => T,
  deps: React.DependencyList | undefined
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(factory, deps?.map(useDeepCompareMemoize));
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
