const showUsers = (req, res) => {
  res.send("Lista de Usuarios");
};

const getOneUser = (req, res) => {
  res.send("el Usuarios encontrado");
};

const createUser = (req, res) => {
  res.send("se creó el Usuarios");
};

const updateUser = (req, res) => {
  res.send("se actualizó el Usuarios");
};

const deleteUser = (req, res) => {
  res.send("se borró el Usuarios");
};

export { showUsers, createUser, getOneUser, updateUser, deleteUser };
