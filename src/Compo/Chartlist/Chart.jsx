import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart, Bar, } from 'recharts';
const Chart = () => {
    const subjectMarks = [
        {
          "id": 1,
          "name": "John Doe",
          "mathMarks": 85,
          "physicsMarks": 78,
          "chemistryMarks": 92
        },
        {
          "id": 2,
          "name": "Alice Smith",
          "mathMarks": 92,
          "physicsMarks": 88,
          "chemistryMarks": 90
        },
        {
          "id": 3,
          "name": "Bob Johnson",
          "mathMarks": 78,
          "physicsMarks": 70,
          "chemistryMarks": 82
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "mathMarks": 95,
          "physicsMarks": 92,
          "chemistryMarks": 94
        },
        {
          "id": 5,
          "name": "Michael Brown",
          "mathMarks": 88,
          "physicsMarks": 85,
          "chemistryMarks": 89
        },
        {
          "id": 6,
          "name": "Sarah Wilson",
          "mathMarks": 89,
          "physicsMarks": 80,
          "chemistryMarks": 88
        },
        {
          "id": 7,
          "name": "David Lee",
          "mathMarks": 75,
          "physicsMarks": 72,
          "chemistryMarks": 76
        },
        {
          "id": 8,
          "name": "Emma White",
          "mathMarks": 96,
          "physicsMarks": 92,
          "chemistryMarks": 97
        },
        {
          "id": 9,
          "name": "James Taylor",
          "mathMarks": 84,
          "physicsMarks": 79,
          "chemistryMarks": 86
        },
        {
          "id": 10,
          "name": "Olivia Clark",
          "mathMarks": 90,
          "physicsMarks": 87,
          "chemistryMarks": 92
        }
      ]
      
      
    return (
        <div>
            <LineChart width={600} height={400} data={subjectMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'mathMarks'} stroke='red'></Line>
                <Line dataKey={'physicsMarks'} stroke='blue'></Line>
            </LineChart>
            <BarChart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'mathMarks'} stroke='red'></Bar>
                <Bar dataKey={'physicsMarks'} stroke='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;