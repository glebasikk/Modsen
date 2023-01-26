const addMeetingDTO = (data) => ({
    topic: data.topic,
    tag: data.tag,
    date: data.date,
    place: data.place
  });

module.exports = addMeetingDTO;