import React, { useState } from "react";
import Faqs from "./Faqs";
import Title from "../../componet/common/Title";

function FAQsRow() {
  const [isVisible, setIsVisible] = useState(0);
  const data = [
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit,?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquamsit, commodi quibusdam laudantium laborum. Dignissimos, quibusdam quasi,quisquam perspiciatis possimus sapiente nulla necessitatibus voluptatibussunt doloribus quos nihil nostrum.",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <Faqs
        key={index}
        question={value.question}
        answer={value.answer}
        index={index}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    );
  });

  return (
    <div>
      <Title title="HAVE ANY QUESTIONS?" desc="Frequently Asked Questions" />
      {componet}
    </div>
  );
}

export default FAQsRow;
