import { useEffect, useRef, useState } from "react";

export default function useDropdown(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleclick(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    window.addEventListener("click", handleclick);
    return () => {
      window.removeEventListener("click", handleclick);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
