"use client";
import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Formfinish from "./Formfinish";
import { motion } from "motion/react";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
    date: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
    date: "",
  });
  const Step = [StepOne, StepTwo, StepThree, Formfinish][currentStep];
  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBackStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };  
  useEffect(() => {
    const savedForm = localStorage.getItem("stepOneForm");
    const savedstep = localStorage.getItem("currentstep");
    if (savedstep) setCurrentStep(JSON.parse(savedstep));
    if (savedForm) setForm(JSON.parse(savedForm));
  }, []);
  useEffect(() => {
    localStorage.setItem("stepOneForm", JSON.stringify(form));
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
  }, [form,currentStep]);

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <Step
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        setForm={setForm}
        setError={setError}
        error={error}
        form={form}
      />
    </div>
  );
};

export default MultiStepForm;
