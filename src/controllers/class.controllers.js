const showClasses = (req, res) => {
  res.send("Lista de clase");
};

const getOneClass = (req, res) => {
  res.send("el clase encontrado");
};

const createClass = (req, res) => {
  res.send("se creó el clase");
};

const updateClass = (req, res) => {
  res.send("se actualizó el clase");
};

const deleteClass = (req, res) => {
  res.send("se borró el clase");
};

export { showClasses, createClass, getOneClass, updateClass, deleteClass };
