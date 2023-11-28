const showPrograms = (req, res) => {
  res.send("Lista de programas");
};

const getOneProgram = (req, res) => {
  res.send("el programa fue encontrado");
};

const createProgram = (req, res) => {
  res.send("se creó el programa");
};

const updateProgram = (req, res) => {
  res.send("se actualizó el programa");
};

const deleteProgram = (req, res) => {
  res.send("se borró el programa");
};

export {
  showPrograms,
  createProgram,
  getOneProgram,
  updateProgram,
  deleteProgram,
};
