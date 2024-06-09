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
    },
    {
        name: "Eva Garcia",
        department: "Finance",
        title: "Financial Analyst",
        employeeId: "F005"
    },
    {
        name: "Frank Wang",
        department: "Engineering",
        title: "System Architect",
        employeeId: "E006"
    },
    {
        name: "Grace Chen",
        department: "Marketing",
        title: "Marketing Coordinator",
        employeeId: "M007"
    },
    {
        name: "Hannah Kim",
        department: "Engineering",
        title: "Frontend Developer",
        employeeId: "E008"
    },
    {
        name: "Isaac Rodriguez",
        department: "Sales",
        title: "Sales Manager",
        employeeId: "S009"
    },
    {
        name: "Jenny Patel",
        department: "Finance",
        title: "Senior Accountant",
        employeeId: "F010"
    }
];

export const groupBy = Object.groupBy(employees, employee => employee.department)




