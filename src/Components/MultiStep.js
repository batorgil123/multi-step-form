"use client";
import React, { useState,useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Formfinish from "./Formfinish";
import { motion } from "motion/react";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
    const savedstep = localStorage.getItem("currentstep");
    if (savedstep) {
      setCurrentStep(JSON.parse(savedstep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentstep", JSON.stringify(currentStep));
  }, [currentStep]);

  return (
    <div>
      <Step handleBackStep={handleBackStep} handleNextStep={handleNextStep} />
    </div>
  );
};

export default MultiStepForm;
