import { useEffect, useState } from "react";
import FormInput from "../FormInput";

const AddEditStudent = ({
  showModal,
  setShowModal,
  onSubmit,
  selectedStudent,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    fatherName: "",
    course: "",
    year: "",
    dob: "",
    feesDepositeUpto: "",
    nextFeeAmount: undefined,
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        ...selectedStudent,
      });
    }
  }, [selectedStudent]);

  return (
    <>
      {showModal ? (
        <div className="h-screen  w-screen flex items-center justify-center bg-black bg-opacity-70 fixed inset-0 z-50 transition-opacity">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50vw] my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font=semibold">Add Student</h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="py-4 min-h-[70vh] flex flex-col justify-between"
                >
                  <div className="max-h-[calc(70vh-6rem)] overflow-y-auto">
                    <FormInput
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleOnChange}
                      label="Full Name"
                    />
                    <FormInput
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleOnChange}
                      label="Email"
                    />
                    <FormInput
                      name="phoneNumber"
                      type="text"
                      value={formData.phoneNumber}
                      onChange={handleOnChange}
                      label="Phone Number"
                    />
                    <FormInput
                      name="fatherName"
                      type="text"
                      value={formData.fatherName}
                      onChange={handleOnChange}
                      label="Father Name"
                    />
                    <FormInput
                      name="course"
                      type="text"
                      value={formData.course}
                      onChange={handleOnChange}
                      label="Course"
                    />
                    <FormInput
                      name="year"
                      type="text"
                      value={formData.year}
                      onChange={handleOnChange}
                      label="Year"
                    />
                    <FormInput
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleOnChange}
                      label="Date Of Birth"
                    />
                    <FormInput
                      name="feesDepositeUpto"
                      type="date"
                      value={formData.feesDepositeUpto}
                      onChange={handleOnChange}
                      label="Fee Deposite Upto"
                    />
                    <FormInput
                      name="nextFeeAmount"
                      type="number"
                      value={formData.nextFeeAmount}
                      onChange={handleOnChange}
                      label="Next Fee Amount"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 pt-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-primary active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default AddEditStudent;
