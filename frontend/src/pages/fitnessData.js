/// src/pages/fitnessData.js

const fitnessCenters = [
    {
        id: 1,
        name: 'Prime Training Facility',
        address: 'Svetozara Miletica 43, Novi Sad, 21000',
        openingYear: 2015,
        owner: 'John Doe',
        monthlyFee: 3000,
        yearlyFee: 30000,
        singleTrainingFee: 500,
        groupTrainingFee: 400,
        personalTrainingFee: 1000,
        comments: [
            { user: 'Jane Smith', text: 'Great gym with modern equipment!' },
            { user: 'Michael Johnson', text: 'Friendly staff and clean environment.' }
        ]
    },
    {
        id: 2,
        name: 'Meltdown Gym',
        address: 'Bulevar Oslobođenja 50, Novi Sad, 21000',
        openingYear: 2018,
        owner: 'Anna Williams',
        monthlyFee: 3500,
        yearlyFee: 35000,
        singleTrainingFee: 600,
        groupTrainingFee: 500,
        personalTrainingFee: 1200,
        comments: [
            { user: 'Emily Davis', text: 'Excellent facilities and professional trainers.' },
            { user: 'Daniel Brown', text: 'The membership is a bit pricey, but worth it.' }
        ]
    },
    {
        id: 3,
        name: 'The One Fitness Centar',
        address: 'Bulevar Mihajla Pupina 2, Novi Sad, 21000',
        openingYear: 2020,
        owner: 'Mark Thompson',
        monthlyFee: 2800,
        yearlyFee: 28000,
        singleTrainingFee: 450,
        groupTrainingFee: 350,
        personalTrainingFee: 900,
        comments: [
            { user: 'Olivia Wilson', text: 'A peaceful place for workouts and relaxation.' },
            { user: 'Liam Taylor', text: 'The group classes are fantastic!' }
        ]
    },
];

export default fitnessCenters;
