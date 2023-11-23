const showTeachers = (req, res) => {
  res.send("Lista de profesor");
};

const getOneTeacher = (req, res) => {
  res.send("el profesor encontrado");
};

const createTeacher = (req, res) => {
  res.send("se creó el profesor");
};

const updateTeacher = (req, res) => {
  res.send("se actualizó el profesor");
};

const deleteTeacher = (req, res) => {
  res.send("se borró el profesor");
};

export {
  showTeachers,
  createTeacher,
  getOneTeacher,
  updateTeacher,
  deleteTeacher,
};
