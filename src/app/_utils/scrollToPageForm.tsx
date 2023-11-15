const useScrollToPageForm = () => {
  const clickEvent = (
    event: any,
    componentRef: React.RefObject<HTMLDivElement> | null
  ) => {
    event.preventDefault();
    if (componentRef?.current) {
      componentRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };
  return {
    clickEvent,
  };
};

export default useScrollToPageForm;
