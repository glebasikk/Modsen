const updateMeetingDTO = (data) => ({
    id: data.id,
    topic: data.topic,
    tag: data.tag,
    date: data.date,
    place: data.place
  });

module.exports = updateMeetingDTO;