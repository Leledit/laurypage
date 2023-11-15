"use client";
import useScrollToPageForm from "@/app/_utils/scrollToPageForm";
import styles from "./index.module.scss";

interface props {
  text: string;
  type?: string;
  refForm: React.RefObject<HTMLDivElement>;
}

export function Button({ text, type = "default", refForm }: props) {
  let classStyle = "";
  if (type === "default") {
    classStyle = styles.button;
  } else {
    classStyle = styles.smalButon;
  }

  const { clickEvent } = useScrollToPageForm();
  return (
    <>
      <a
        href=""
        className={classStyle}
        onClick={(e) => {
          clickEvent(e, refForm);
        }}
      >
        {text}
      </a>
    </>
  );
}
