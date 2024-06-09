const employees = [
    {
        name: "Alice Smith",
        department: "Engineering",
        title: "Software Engineer",
        employeeId: "E001"
    },
    {
        name: "Bob Johnson",
        department: "Marketing",
        title: "Marketing Manager",
        employeeId: "M002"
    },
    {
        name: "Charlie Brown",
        department: "Sales",
        title: "Sales Representative",
        employeeId: "S003"
    },
    {
        name: "David Lee",
        department: "Human Resources",
        title: "HR Specialist",
        employeeId: "HR004"
    }
];
export const groupBy = Object.groupBy(employees, employee => employee.department)



