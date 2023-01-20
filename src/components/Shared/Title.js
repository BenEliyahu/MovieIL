import React from "react";
import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    document.title = title || "MovieIL | Watch movies for free";
  });

  return <></>;
};

export default Title;
