import program from "../models/program";

const createProgram = async (req, res) => {
  // res.send("se creó el programa");
  try {
    const newProgram = new program(req.body);
    await newProgram.save();
    res.status(201).json({
      mensaje: "La clase fue creado de manera exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ Message: "Error al crear el programa" });
  }
};
const showPrograms = async (req, res) => {
  // res.send("Lista de programas");
  try {
    const listProgram = await program.find();
    res.status(200).json(listProgram);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Message: "los programas no fueron encontrado" });
  }
};

const getOneProgram = async (req, res) => {
  // res.send("el programa fue encontrado");
  try {
    const oneProgram = await program.findById(req.params.id);
    res.status(200).json(oneProgram);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Message: "El programa no fue encontrado" });
  }
};

const updateProgram = async (req, res) => {
  // res.send("se actualizó el programa");
  try {
    await program.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue editado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ Message: "Error al editar el programa" });
  }
};

const deleteProgram = async (req, res) => {
  // res.send("se borró el programa");
  try {
    await program.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "El usuario fue eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ Message: "Error al eliminar el programa" });
  }
};

export {
  showPrograms,
  createProgram,
  getOneProgram,
  updateProgram,
  deleteProgram,
};
