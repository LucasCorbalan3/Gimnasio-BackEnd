import Classes from "../models/classes";

const createClass = async (req, res) => {
  try {
    const newClass = new Classes(req.body);
    await newClass.save();
    res.status(201).json({
      mensaje: "La clase fue creado de manera exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error en la creacion de la clase",
    });
  }
};

const showClasses = async (req, res) => {
  //res.send("Lista de clase");
  try {
    const listClass = await Classes.find();
    res.status(200).json(listClass);
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar las clases",
    });
  }
};

const getOneClass = async (req, res) => {
  //res.send("el clase encontrado");
  try {
    const oneClass = await Classes.findById(req.params.id);
    res.status(200).json(oneClass);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar la clases",
    });
  }
};

const updateClass = async (req, res) => {
  //res.send("se actualizó el clase");
  try {
    await Classes.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue editado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al editar la clases",
    });
  }
};

const deleteClass = async (req, res) => {
  //res.send("se borró el clase");
  try {
    await Classes.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al eliminar la clases",
    });
  }
};

export { showClasses, createClass, getOneClass, updateClass, deleteClass };
