const ch = [
    {
        VoterID: [
            "62adca9063bc6adb05d79db8"
        ],
        choice: "Give me my drink",
        _id: "62c668602f7c80bfbe59a9bd"
    },
    {
        VoterID: [],
        choice: "Bwoah",
        _id: "62c668602f7c80bfbe59a9be"
    },
    {
        VoterID: [],
        choice: "I dont know",
        _id: "62c668602f7c80bfbe59a9bf"
    },
    {
        VoterID: [],
        choice: "I Dont care",
        _id: "62c668602f7c80bfbe59a9c0"
    }
]

let totalVotes = 0;
ch.forEach(item => {
    totalVotes += item.VoterID.length;
})
console.log(totalVotes);