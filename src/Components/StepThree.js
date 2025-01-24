import React, { useState, useEffect } from "react";
import Input from "@/Components/Input";
import { motion } from "framer-motion";
import Header from "@/Components/header"
const StepThree = (props) => {
  const { handleNextStep, handleBackStep, setError, setForm, form, error } =
    props;
  const [imagePreview, setImagePreview] = useState(null);
  const checkform = () => {
    let err = false,
      str = form.date.split("-");
    let year = str[0] * 1;
    if (year < 1900 || year > 2025) {
      err = true;
      setError((prev) => ({ ...prev, date: "Invalid date of birth." }));
    }
    if (!err) handleNextStep();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl p-8 justify-between"
    >
      <div className="flex flex-col justify-around h-[350px]">
        <Header/>

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Date of birth:
        </label>
        <Input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, date: e.target.value }))
          }
          placeholder="YYYY-MM-DD"
        />
        {error.date && <p className="text-red-600 w-full">{error.date}</p>}

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Image:
        </label>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {imagePreview && (
          <div className="flex items-center justify-center   pt-[30px]">
            <img
              src={imagePreview}
              className="w-[400px] h-[300px] object-cover rounded-md "
            />
          </div>
        )}
      </div>

      <div className="flex flex-row justify-between">
        <button
          className="w-[128px] h-[44px] border rounded-xl flex items-center justify-center hover:bg-gray-200 hover:shadow-lg transform transition-all duration-[0.3s]"
          onClick={handleBackStep}
        >
          Back
        </button>
        <button
          className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center hover:bg-gray-600 hover:shadow-lg transform transition-all duration-[0.3s]"
          onClick={checkform}
        >
          Submit 3/3
        </button>
      </div>
    </motion.div>
  );
};

export default StepThree;
