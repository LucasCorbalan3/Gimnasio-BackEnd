import Users from "../models/user";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  // res.send("Lista de Usuarios");
};

const register = async (req, res) => {
  // res.send("el Usuarios encontrado");
  const { nameUser, telefono, emailUser, passwordUser, isAdmin, isTeacher } =
    req.body;
  try {
    const userFound = await Users.findOne({ emailUser });

    if (userFound)
      return res.status(400).json({
        message:
          "Ya existe un usuario con esta dirección de correo electrónico.",
      });
    const newUser = new Users({
      nameUser,
      telefono,
      emailUser,
      passwordUser,
      isAdmin,
      isTeacher,
    });
    if (req.body.isTeacher !== undefined) {
      newUser.isTeacher = req.body.isTeacher;
    } else {
      newUser.isTeacher = false;
    }
    if (req.body.isAdmin !== undefined) {
      newUser.isAdmin = req.body.isAdmin;
    } else {
      newUser.isAdmin = false;
    }
    const SALT_ROUND = 10;
    newUser.passwordUser = await bcrypt.hash(passwordUser, SALT_ROUND);
    await newUser.save();
    res.status(201).json({
      message: "Usuario creado correctamente",
      NameUser: newUser.nameUser,
      uid: newUser._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error al crear el usuario" });
  }
};

const showUser = async (req, res) => {
  //res.send("Lista de Usuarios");
  try {
    const listUser = await Users.find();
    res.status(200).json(listUser);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error al buscar los usuarios" });
  }
};

const getOneUser = async (req, res) => {
  //res.send("Lista de Usuarios");
  try {
    console.log(req.params.id);
    const oneUser = await Users.findById(req.params.id);
    res.status(200).json(oneUser);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar el usuario",
    });
  }
};

const updateUser = async (req, res) => {
  // res.send("se actualizó el Usuarios");
  try {
    await Users.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue editado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al editar el usuario",
    });
  }
};

const deleteUser = async (req, res) => {
  // res.send("se borró el Usuarios");
  try {
    await Users.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al eliminar el usuario",
    });
  }
};

export { showUser, getOneUser, login, register, updateUser, deleteUser };
