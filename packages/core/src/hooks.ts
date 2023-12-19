import React from "react";

export function usePrevious(value: any) {
  // The ref object is a generic container whose current property is mutable
  // and can hold any value, similar to an instance property on a class
  const ref = React.useRef();

  // Store current value in ref
  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export const useDebounce = <T>(value: T, delay: number): T => {
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
};

export const useOnUpdate = (
  onUpdate: () => void,
  deps: React.DependencyList | undefined
) => {
  let mounted = React.useRef(true);
  React.useEffect(() => {
    if (!mounted.current) {
      onUpdate();
    }
    mounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
