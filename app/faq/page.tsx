"use client"
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What services does Fulltape provide?",
            answer: "Fulltape provides digital marketing technology solutions and high-quality Wi-Fi extenders to help businesses enhance both their digital presence and connectivity."
        },
        {
            question: "How can Fulltape’s Wi-Fi extenders help my business?",
            answer: "Fulltape’s Wi-Fi extenders ensure reliable and seamless internet coverage, supporting smooth operations and connectivity for both business and personal spaces."
        },
        {
            question: "What industries does Fulltape work with?",
            answer: "Fulltape serves a wide range of industries, including e-commerce, retail, healthcare, finance, and more, with custom digital marketing and connectivity solutions."
        },
        {
            question: "How do I get started with Fulltape’s services?",
            answer: "To get started, contact our team through our website or call us directly. We’ll guide you through our offerings and help tailor solutions to fit your needs."
        },
        {
            question: "Can Fulltape help improve my online advertising results?",
            answer: "Yes, Fulltape specializes in data-driven advertising solutions that increase visibility, target the right audiences, and drive conversions through tailored ad campaigns."
        },
        {
            question: "Are Fulltape’s Wi-Fi extenders easy to install?",
            answer: "Absolutely. Our Wi-Fi extenders come with simple setup instructions, and our support team is available to assist you with any installation questions."
        },
        {
            question: "Does Fulltape offer customer support?",
            answer: "Yes, we have a dedicated support team to assist with all questions related to our digital marketing services and Wi-Fi extenders."
        },
        {
            question: "How does Fulltape approach digital marketing?",
            answer: "We take a data-driven approach, combining analytics, customer insights, and automation to create effective marketing campaigns that align with your business goals."
        },
        {
            question: "What makes Fulltape different from other marketing technology providers?",
            answer: "Our unique blend of marketing technology services and connectivity solutions allows us to address both online marketing and infrastructure needs, making us a one-stop shop for businesses aiming to maximize their reach and efficiency."
        }
    ];

    const toggleAnswer = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section max-w-3xl mx-auto py-20 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center pb-10">Frequently Asked Questions</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index} className="mb-4 border-b pb-4">
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left text-lg font-semibold flex justify-between items-center"
                        >
                            {faq.question}
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;
