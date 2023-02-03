const refreshTokenDTO = (data) => ({
    userId: data.userId,
    username: data.username,
    type: data.type,
    role: data.role,
  });


  
module.exports = refreshTokenDTO;