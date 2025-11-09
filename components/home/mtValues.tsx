import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

const MtValues: React.FC<Props> = (Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image width={180} height={200} src={Props.image} alt="" />
      <h2 className="text-center text-3xl font-bold mt-4">
        {Props.title}
      </h2>
      <p className="mt-2 text-center">
        {Props.description}
      </p>
    </div>
  );
};

export default MtValues;
