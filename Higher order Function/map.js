const finalParticipants = ['Shashank', 'Yash', 'Ritik', 'Bhawana', 'Himanshu'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
})

console.log(announcements);