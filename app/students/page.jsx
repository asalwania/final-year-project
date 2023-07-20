"use client";

import AddEditStudent from "@/components/modal/AddEditStudent";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  "ID",
  "Name",
  "Email",
  "Phone Number",
  "Father's Name",
  "Course",
  "Year",
  "DOB",
  "Fees Upto",
  "Next Fee Amount",
];

// const data = [
//   {
//     id: "1",
//     name: "Ajay Kumar",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Bal Krishan",
//     course: "BCA",
//     year: "3rd",
//     dob: "18-06-1991",
//     feesDepositeUpto: "12-06-2023",
//     nextFeeAmount: 10000,
//   },
//   {
//     id: "2",
//     name: "John Doe",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Robert Doe",
//     course: "BBA",
//     year: "2nd",
//     dob: "25-09-1994",
//     feesDepositeUpto: "15-07-2023",
//     nextFeeAmount: 12000,
//   },
//   {
//     id: "3",
//     name: "Jane Smith",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "David Smith",
//     course: "MBA",
//     year: "1st",
//     dob: "10-12-1990",
//     feesDepositeUpto: "20-08-2023",
//     nextFeeAmount: 15000,
//   },
//   {
//     id: "4",
//     name: "Alex Johnson",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Peter Johnson",
//     course: "B.Com",
//     year: "3rd",
//     dob: "07-03-1992",
//     feesDepositeUpto: "25-09-2023",
//     nextFeeAmount: 8000,
//   },
//   {
//     id: "5",
//     name: "Emily Wilson",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Richard Wilson",
//     course: "BA",
//     year: "2nd",
//     dob: "12-11-1993",
//     feesDepositeUpto: "18-07-2023",
//     nextFeeAmount: 11000,
//   },
//   {
//     id: "6",
//     name: "Daniel Brown",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Andrew Brown",
//     course: "B.Sc",
//     year: "1st",
//     dob: "29-05-1995",
//     feesDepositeUpto: "21-08-2023",
//     nextFeeAmount: 13000,
//   },
//   {
//     id: "7",
//     name: "Sophia Taylor",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Michael Taylor",
//     course: "B.Tech",
//     year: "4th",
//     dob: "04-09-1991",
//     feesDepositeUpto: "28-09-2023",
//     nextFeeAmount: 9000,
//   },
//   {
//     id: "8",
//     name: "Ryan Anderson",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "William Anderson",
//     course: "BBA",
//     year: "3rd",
//     dob: "21-02-1992",
//     feesDepositeUpto: "03-07-2023",
//     nextFeeAmount: 10000,
//   },
//   {
//     id: "9",
//     name: "Olivia Walker",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Charles Walker",
//     course: "BCA",
//     year: "2nd",
//     dob: "16-08-1993",
//     feesDepositeUpto: "09-08-2023",
//     nextFeeAmount: 12000,
//   },
//   {
//     id: "10",
//     name: "Matthew Hill",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Joseph Hill",
//     course: "MBA",
//     year: "1st",
//     dob: "03-04-1994",
//     feesDepositeUpto: "14-09-2023",
//     nextFeeAmount: 15000,
//   },
//   {
//     id: "11",
//     name: "Ava Martinez",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Thomas Martinez",
//     course: "B.Tech",
//     year: "4th",
//     dob: "19-07-1990",
//     feesDepositeUpto: "24-06-2023",
//     nextFeeAmount: 8000,
//   },
//   {
//     id: "12",
//     name: "Noah Clark",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Daniel Clark",
//     course: "BBA",
//     year: "3rd",
//     dob: "26-10-1991",
//     feesDepositeUpto: "01-07-2023",
//     nextFeeAmount: 10000,
//   },
//   {
//     id: "13",
//     name: "Isabella Turner",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "James Turner",
//     course: "BCA",
//     year: "2nd",
//     dob: "09-03-1992",
//     feesDepositeUpto: "08-08-2023",
//     nextFeeAmount: 12000,
//   },
//   {
//     id: "14",
//     name: "Ethan Evans",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Benjamin Evans",
//     course: "B.Com",
//     year: "1st",
//     dob: "14-12-1993",
//     feesDepositeUpto: "13-09-2023",
//     nextFeeAmount: 14000,
//   },
//   {
//     id: "15",
//     name: "Mia Thompson",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "David Thompson",
//     course: "MBA",
//     year: "1st",
//     dob: "01-06-1994",
//     feesDepositeUpto: "17-07-2023",
//     nextFeeAmount: 16000,
//   },
//   {
//     id: "16",
//     name: "Liam Garcia",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "John Garcia",
//     course: "B.Tech",
//     year: "4th",
//     dob: "18-09-1990",
//     feesDepositeUpto: "22-08-2023",
//     nextFeeAmount: 18000,
//   },
//   {
//     id: "17",
//     name: "Charlotte Lee",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Christopher Lee",
//     course: "BBA",
//     year: "3rd",
//     dob: "05-02-1991",
//     feesDepositeUpto: "27-09-2023",
//     nextFeeAmount: 9000,
//   },
//   {
//     id: "18",
//     name: "James Phillips",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Joshua Phillips",
//     course: "BCA",
//     year: "2nd",
//     dob: "20-07-1992",
//     feesDepositeUpto: "02-07-2023",
//     nextFeeAmount: 11000,
//   },
//   {
//     id: "19",
//     name: "Amelia Mitchell",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Mark Mitchell",
//     course: "B.Com",
//     year: "1st",
//     dob: "27-10-1993",
//     feesDepositeUpto: "07-08-2023",
//     nextFeeAmount: 13000,
//   },
//   {
//     id: "20",
//     name: "Benjamin Adams",
//     email: "abc@gamil.com",
//     phoneNumber: "7018308350",
//     fatherName: "Steven Adams",
//     course: "B.Sc",
//     year: "1st",
//     dob: "04-03-1995",
//     feesDepositeUpto: "12-09-2023",
//     nextFeeAmount: 15000,
//   },
// ];

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter(
          (student) =>
            student.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            student.course
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            student.year
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [search, data]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    axios
      .get("/api/student")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addStudent = (formData) => {
    axios
      .post("/api/student", formData)
      .then((res) => {
        getStudents();
        setShowModal(false);
      })
      .catch((err) => console.log(err.message));
  };

  const editStudent = (formData) => {
    axios
      .patch("/api/student", formData)
      .then((res) => {
        getStudents();
        setShowModal(false);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="p-1">
      <AddEditStudent
        onSubmit={selectedStudent ? editStudent : addStudent}
        showModal={showModal}
        setShowModal={setShowModal}
        selectedStudent={selectedStudent}
      />
      <div className="flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block relative space-y-2 min-w-full py-2 sm:px-6 lg:px-8">
            <div className=" sticky top-0 left-0 flex px-6 justify-between items-center">
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-sm rounded text-white hover:bg-primary/90 bg-primary"
                >
                  Add Student
                </button>
              </div>
              <div
                className="relative max-w-[20rem]"
                data-te-input-wrapper-init
              >
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border border-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput7"
                  placeholder="Search..."
                />
                <label
                  htmlFor="exampleInput7"
                  className="pointer-events-none absolute peer-focus:z-10 peer-focus:bg-[#eee] left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-[#4caf50] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#4caf50]"
                >
                  Search...
                </label>
              </div>
            </div>
            <div className="max-w-[calc(100vw-16rem)] max-h-[calc(100vh-8rem)] overflow-scroll scrollbar">
              <table className="min-w-full text-center text-sm font-light relative">
                <thead className="border-b sticky top-0 bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    {columns.map((column) => (
                      <th key={column} scope="col" className="px-6 py-2">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student) => (
                    <tr
                      onClick={() => {
                        setShowModal(true);
                        setSelectedStudent(student);
                      }}
                      key={student.id}
                      className="border-b dark:border-neutral-500 cursor-pointer hover:bg-neutral-200 transition-colors duration-200"
                    >
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        {student.id}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.email}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.fatherName}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.course}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.year}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.dob}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.feesDepositeUpto}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">
                        {student.nextFeeAmount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentsPage;
